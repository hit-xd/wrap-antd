import { execFileSync } from 'node:child_process';
import { mkdirSync, readFileSync, rmSync } from 'node:fs';
import path from 'node:path';

const requiredFiles = [
  'package/src/reset.css',
  'package/src/styles/css-variables.css',
];

const pnpmCli = process.env.npm_execpath;

if (!pnpmCli) {
  throw new Error('package:check must be run through pnpm.');
}

const packDir = path.resolve('.pack-check');

rmSync(packDir, { force: true, recursive: true });
mkdirSync(packDir, { recursive: true });

try {
  execFileSync(process.execPath, [pnpmCli, 'pack', '--pack-destination', packDir], {
    stdio: 'pipe',
  });

  const manifest = JSON.parse(readFileSync(path.resolve('package.json'), 'utf8'));
  const tarballName = `${manifest.name.replace('/', '-')}-${manifest.version}.tgz`;
  const packedFiles = new Set(
    execFileSync('tar', ['-tf', path.join(packDir, tarballName)], {
      encoding: 'utf8',
    })
      .split(/\r?\n/)
      .filter(Boolean),
  );

  const missingFiles = requiredFiles.filter((file) => !packedFiles.has(file));

  if (missingFiles.length > 0) {
    throw new Error(
      `Package is missing required files:\n${missingFiles.map((file) => `- ${file}`).join('\n')}`,
    );
  }

  const resetCss = readFileSync(path.resolve('src/reset.css'), 'utf8');
  const resetImports = [...resetCss.matchAll(/@import\s+['"](.+)['"];/g)].map(
    ([, importPath]) => importPath,
  );

  const missingResetImports = resetImports
    .filter((importPath) => importPath.startsWith('./'))
    .map((importPath) => `package/src/${importPath.slice(2)}`)
    .filter((file) => !packedFiles.has(file));

  if (missingResetImports.length > 0) {
    throw new Error(
      `Package is missing files imported by src/reset.css:\n${missingResetImports
        .map((file) => `- ${file}`)
        .join('\n')}`,
    );
  }

  // 验证 Modal 分隔线 CSS 规则已从旧文件迁移到组件级 styles.css
  const modalCss = readFileSync(
    path.resolve('src/components/modal/styles.css'),
    'utf8',
  );

  const requiredModalRules = [
    'border-bottom: 1px solid',
    'border-top: 1px solid',
  ];

  const missingModalRules = requiredModalRules.filter((rule) => !modalCss.includes(rule));

  if (missingModalRules.length > 0) {
    throw new Error(
      `Modal divider rules are missing from component overrides:\n${missingModalRules
        .map((rule) => `- ${rule}`)
        .join('\n')}`,
    );
  }

  console.log('Package CSS files are publishable.');
} finally {
  rmSync(packDir, { force: true, recursive: true });
}
