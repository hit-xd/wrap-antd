import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const specDir = path.join(rootDir, 'ui-spec');

const isCheck = process.argv.includes('--check');
const generatedFiles = new Map();

const readSpec = (name) => {
  const file = path.join(specDir, name);
  return existsSync(file) ? readFileSync(file, 'utf8') : '';
};

const unique = (values) => [...new Set(values)];

const matchAll = (source, pattern, mapper = (match) => match[0]) =>
  [...source.matchAll(pattern)].map(mapper);

const extractSection = (source, headingText) => {
  const index = source.indexOf(headingText);
  if (index < 0) return '';
  const tail = source.slice(index);
  const next = tail.slice(headingText.length).search(/\n---\n|\n##\s+/);
  return next < 0 ? tail : tail.slice(0, headingText.length + next);
};

const colorSpec = readSpec('color.md');
const containerSpec = readSpec('ContainerSpec.md');
const spaceSpec = readSpec('Space.md');
const typographySpec = readSpec('Typography.md');
const layoutSpec = readSpec('Layout.md');
const imageRatioSpec = readSpec('ImageRatio.md');

const brandEntries = matchAll(colorSpec, /\|\s*Brand\s+(\d+)\s*\|\s*`(#[0-9a-fA-F]{6})`/g, (m) => [
  Number(m[1]),
  m[2].toUpperCase(),
]);

const functionalHex = matchAll(
  extractSection(colorSpec, 'Functional'),
  /`(#[0-9a-fA-F]{6})`/g,
  (m) => m[1].toUpperCase(),
);
const dataColors = matchAll(extractSection(colorSpec, 'Data'), /`(rgba\([^)]+\))`/g, (m) => m[1]);
const gradientColors = matchAll(
  extractSection(colorSpec, 'Gradient'),
  /`(linear-gradient\([^)]+\))`/g,
  (m) => m[1],
);

const boxShadows = matchAll(containerSpec, /box-shadow:\s*([^;]+);/g, (m) => m[1].trim());
const radii = unique(
  matchAll(containerSpec, /border-radius:\s*(\d+)px/g, (m) => Number(m[1])),
).sort((a, b) => a - b);
const spaceValues = unique(
  matchAll(extractSection(spaceSpec, 'Spacing'), /`(\d+)px`/g, (m) => Number(m[1])),
).sort((a, b) => a - b);
const layoutTokens = Object.fromEntries(
  matchAll(layoutSpec, /\|\s*`(--[a-z0-9-]+)`\s*\|\s*`([^`]+)`/gi, (m) => [m[1], m[2]]),
);
const ratios = unique(
  matchAll(imageRatioSpec, /aspect-ratio:\s*(\d+\s*\/\s*\d+)/g, (m) => m[1].replace(/\s+/g, ' ')),
);
const fontFamily = typographySpec
  .match(/font-family:\s*([^;]+);/s)?.[1]
  .replace(/\s+/g, ' ')
  .trim();

const tokens = {
  color: {
    brand: Object.fromEntries(brandEntries),
    text: {
      primary: 'rgba(0,0,0,0.85)',
      secondary: 'rgba(0,0,0,0.65)',
      tertiary: 'rgba(0,0,0,0.45)',
      disabled: 'rgba(0,0,0,0.25)',
      inverse: 'rgba(255,255,255,1)',
      inverseSecondary: 'rgba(255,255,255,0.65)',
    },
    border: {
      base: 'rgba(0,0,0,0.15)',
      strong: 'rgba(0,0,0,0.25)',
      subtle: 'rgba(0,0,0,0.12)',
    },
    fill: {
      white: '#FFFFFF',
      background: '#F4F6F8',
      layout: '#E9EBF3',
      tableHeader: '#F1F2F7',
      overlay: 'rgba(0,0,0,0.30)',
      tooltip: 'rgba(0,0,0,0.75)',
    },
    functional: {
      success: functionalHex[0] ?? '#00C078',
      error: functionalHex[1] ?? '#FF4D4F',
      warning: functionalHex[2] ?? '#FFA000',
      info: functionalHex[3] ?? '#1874FF',
    },
    data: dataColors,
    gradient: gradientColors,
  },
  radius: {
    xs: radii[0] ?? 2,
    sm: radii[1] ?? 4,
    md: radii[2] ?? 6,
    lg: radii[3] ?? 8,
    round: radii.at(-1) ?? 100,
  },
  shadow: {
    hover: boxShadows[0] ?? '',
    default: boxShadows[1] ?? '',
    modal: boxShadows[2] ?? '',
    tooltip: boxShadows[3] ?? '',
  },
  space: {
    xxs: spaceValues[0] ?? 4,
    xs: spaceValues[1] ?? 8,
    sm: spaceValues[2] ?? 12,
    md: spaceValues[3] ?? 16,
    lg: spaceValues[4] ?? 20,
    xl: spaceValues[5] ?? 24,
    xxl: spaceValues[6] ?? 32,
    gridGutter: Number(layoutTokens['--layout-content-gutter']) || 20,
  },
  typography: {
    fontFamily:
      fontFamily ??
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
    body: {
      fontSize: 14,
      lineHeight: 22 / 14,
      fontWeight: 400,
    },
    title: {
      fontSize: 20,
      lineHeight: 28 / 20,
      fontWeight: 500,
    },
  },
  layout: {
    headerHeight: Number.parseInt(layoutTokens['--layout-header-height'], 10) || 64,
    siderExpandedWidth: Number.parseInt(layoutTokens['--layout-sider-expanded-width'], 10) || 208,
    siderCollapsedWidth: Number.parseInt(layoutTokens['--layout-sider-collapsed-width'], 10) || 48,
    contentPadding: layoutTokens['--layout-content-padding'] || '20px 16px',
    pageMarginXl: Number.parseInt(layoutTokens['--page-margin-xl'], 10) || 261,
    pageMarginLg: Number.parseInt(layoutTokens['--page-margin-lg'], 10) || 120,
    pageMarginBase: Number.parseInt(layoutTokens['--page-margin-base'], 10) || 24,
    subNavHeight: Number.parseInt(layoutTokens['--sub-nav-bar-height'], 10) || 48,
    tertiaryNavHeight: Number.parseInt(layoutTokens['--tertiary-bar-height'], 10) || 40,
  },
  imageRatio: {
    square: ratios[0] ?? '1 / 1',
    classic: ratios[1] ?? '4 / 3',
    golden: ratios[2] ?? '3 / 2',
    widescreen: ratios[3] ?? '16 / 9',
    ultraWide: ratios[4] ?? '2 / 1',
  },
};

const componentNames = [
  'Button',
  'Form',
  'Table',
  'Input',
  'Select',
  'DatePicker',
  'Modal',
  'Alert',
  'Card',
  'Layout',
];
const lowConfidence = [];

if (brandEntries.length < 10) lowConfidence.push('color.md: expected Brand 1-10 rows.');
if (functionalHex.length < 4) lowConfidence.push('color.md: expected 4 functional colors.');
if (boxShadows.length < 4)
  lowConfidence.push('ContainerSpec.md: expected 4 box-shadow code blocks.');
if (radii.length < 5) lowConfidence.push('ContainerSpec.md: expected 5 radius values.');
if (ratios.length < 5) lowConfidence.push('ImageRatio.md: expected 5 aspect-ratio values.');

const fileHeader = `// This file is generated by pnpm spec:sync. Do not edit manually.\n`;

const toTs = (value) => JSON.stringify(value, null, 2).replace(/"([a-zA-Z_$][\w$]*)":/g, '$1:');

const addFile = (relativePath, content) => {
  generatedFiles.set(path.join(rootDir, relativePath), content);
};

addFile(
  'src/theme/tokens.generated.ts',
  `${fileHeader}export const globalDesignTokens = ${toTs(tokens)} as const;\n\nexport type GlobalDesignTokens = typeof globalDesignTokens;\n`,
);

addFile(
  'src/theme/antd-theme.generated.ts',
  `${fileHeader}import type { ThemeConfig } from 'antd';\nimport type { GlobalDesignTokens } from './tokens.generated';\n\nexport const createGeneratedAntdTheme = (tokens: GlobalDesignTokens): ThemeConfig => ({\n  token: {\n    colorPrimary: tokens.color.brand[7],\n    colorPrimaryHover: tokens.color.brand[6],\n    colorPrimaryActive: tokens.color.brand[8],\n    colorInfo: tokens.color.functional.info,\n    colorLink: tokens.color.functional.info,\n    colorSuccess: tokens.color.functional.success,\n    colorWarning: tokens.color.functional.warning,\n    colorError: tokens.color.functional.error,\n    colorText: tokens.color.text.primary,\n    colorTextSecondary: tokens.color.text.secondary,\n    colorTextTertiary: tokens.color.text.tertiary,\n    colorTextQuaternary: tokens.color.text.disabled,\n    colorBorder: tokens.color.border.base,\n    colorBorderSecondary: tokens.color.border.subtle,\n    colorBgContainer: tokens.color.fill.white,\n    colorBgElevated: tokens.color.fill.white,\n    colorBgLayout: tokens.color.fill.layout,\n    colorFillSecondary: tokens.color.fill.background,\n    borderRadius: tokens.radius.sm,\n    borderRadiusXS: tokens.radius.xs,\n    borderRadiusSM: tokens.radius.sm,\n    borderRadiusLG: tokens.radius.lg,\n    fontFamily: tokens.typography.fontFamily,\n    fontSize: tokens.typography.body.fontSize,\n    fontSizeLG: 16,\n    fontSizeXL: tokens.typography.title.fontSize,\n    lineHeight: tokens.typography.body.lineHeight,\n    controlHeight: 32,\n    paddingXXS: tokens.space.xxs,\n    paddingXS: tokens.space.xs,\n    paddingSM: tokens.space.sm,\n    paddingMD: tokens.space.md,\n    paddingLG: tokens.space.lg,\n    paddingXL: tokens.space.xl,\n    marginXXS: tokens.space.xxs,\n    marginXS: tokens.space.xs,\n    marginSM: tokens.space.sm,\n    marginMD: tokens.space.md,\n    marginLG: tokens.space.lg,\n    marginXL: tokens.space.xl,\n    marginXXL: tokens.space.xxl,\n    boxShadow: tokens.shadow.default,\n    boxShadowSecondary: tokens.shadow.hover,\n    boxShadowTertiary: tokens.shadow.tooltip,\n  },\n  components: {\n    Button: {\n      borderRadius: tokens.radius.sm,\n      controlHeight: 32,\n      primaryShadow: 'none',\n    },\n    Table: {\n      headerBg: tokens.color.fill.tableHeader,\n      headerColor: tokens.color.text.primary,\n      borderColor: tokens.color.border.base,\n      rowHoverBg: tokens.color.fill.background,\n    },\n    Form: {\n      itemMarginBottom: tokens.space.lg,\n    },\n    Card: {\n      borderRadiusLG: tokens.radius.md,\n      boxShadow: tokens.shadow.default,\n    },\n    Modal: {\n      borderRadiusLG: tokens.radius.lg,\n      boxShadow: tokens.shadow.modal,\n    },\n    Tooltip: {\n      colorBgSpotlight: tokens.color.fill.tooltip,\n      boxShadowSecondary: tokens.shadow.tooltip,\n    },\n    Layout: {\n      headerBg: '#090a15',\n      headerHeight: tokens.layout.headerHeight,\n      siderBg: tokens.color.fill.white,\n      triggerBg: tokens.color.fill.white,\n      triggerColor: tokens.color.text.secondary,\n    },\n  },\n});\n`,
);

const cssVars = [
  ['--wrap-color-brand-1', tokens.color.brand[1]],
  ['--wrap-color-brand-6', tokens.color.brand[6]],
  ['--wrap-color-brand-7', tokens.color.brand[7]],
  ['--wrap-color-brand-8', tokens.color.brand[8]],
  ['--wrap-color-link', tokens.color.functional.info],
  ['--wrap-color-success', tokens.color.functional.success],
  ['--wrap-color-warning', tokens.color.functional.warning],
  ['--wrap-color-error', tokens.color.functional.error],
  ['--wrap-color-bg-page', tokens.color.fill.layout],
  ['--wrap-color-bg-container', tokens.color.fill.white],
  ['--wrap-color-bg-muted', tokens.color.fill.background],
  ['--wrap-color-border', tokens.color.border.base],
  ['--wrap-radius-xs', `${tokens.radius.xs}px`],
  ['--wrap-radius-sm', `${tokens.radius.sm}px`],
  ['--wrap-radius-md', `${tokens.radius.md}px`],
  ['--wrap-radius-lg', `${tokens.radius.lg}px`],
  ['--wrap-space-xs', `${tokens.space.xs}px`],
  ['--wrap-space-sm', `${tokens.space.sm}px`],
  ['--wrap-space-md', `${tokens.space.md}px`],
  ['--wrap-space-lg', `${tokens.space.lg}px`],
  ['--wrap-space-xl', `${tokens.space.xl}px`],
  ['--wrap-layout-header-height', `${tokens.layout.headerHeight}px`],
  ['--wrap-layout-sider-expanded-width', `${tokens.layout.siderExpandedWidth}px`],
  ['--wrap-layout-sider-collapsed-width', `${tokens.layout.siderCollapsedWidth}px`],
  ['--wrap-layout-content-padding', tokens.layout.contentPadding],
  ['--wrap-image-ratio-square', tokens.imageRatio.square],
  ['--wrap-image-ratio-classic', tokens.imageRatio.classic],
  ['--wrap-image-ratio-golden', tokens.imageRatio.golden],
  ['--wrap-image-ratio-widescreen', tokens.imageRatio.widescreen],
  ['--wrap-image-ratio-ultra-wide', tokens.imageRatio.ultraWide],
];

addFile(
  'src/theme/css-vars.generated.css',
  `/* This file is generated by pnpm spec:sync. Do not edit manually. */\n:root {\n${cssVars
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n')}\n}\n`,
);

addFile(
  'src/components/generated/index.ts',
  `${fileHeader}export { ${componentNames.join(', ')} } from 'antd';\nexport type { ButtonProps, FormProps, TableProps, InputProps, SelectProps, DatePickerProps, ModalProps, AlertProps, CardProps } from 'antd';\n`,
);

addFile(
  'docs/generated/design-tokens.md',
  `---\ntitle: 设计 Token\norder: 100\n---\n\n# 设计 Token\n\n本页由 \`pnpm spec:sync\` 根据 \`ui-spec/\` 自动生成。\n\n## 品牌色\n\n| Token | Value |\n| --- | --- |\n${Object.entries(
    tokens.color.brand,
  )
    .map(([key, value]) => `| Brand ${key} | \`${value}\` |`)
    .join('\n')}\n\n## 功能色\n\n| Token | Value |\n| --- | --- |\n${Object.entries(
    tokens.color.functional,
  )
    .map(([key, value]) => `| ${key} | \`${value}\` |`)
    .join('\n')}\n\n## 圆角\n\n| Token | Value |\n| --- | --- |\n${Object.entries(tokens.radius)
    .map(([key, value]) => `| ${key} | \`${value}px\` |`)
    .join('\n')}\n\n## 图片比例\n\n| Token | Value |\n| --- | --- |\n${Object.entries(
    tokens.imageRatio,
  )
    .map(([key, value]) => `| ${key} | \`${value}\` |`)
    .join('\n')}\n`,
);

addFile(
  'docs/generated/components.md',
  `---\ntitle: 自动生成组件\norder: 110\n---\n\n# 自动生成组件\n\n以下组件由 \`ui-spec/\` 的高频 antd 组件名单生成导出，API 与 antd 保持一致，并通过 \`ConfigProvider\` 接收企业主题。\n\n| 组件 | 用法 |\n| --- | --- |\n${componentNames.map((name) => `| ${name} | \`import { ${name} } from 'wrap-antd'\` |`).join('\n')}\n`,
);

addFile(
  'docs/generated/spec-report.md',
  `---\ntitle: 规范解析报告\norder: 120\n---\n\n# 规范解析报告\n\n本页由 \`pnpm spec:sync\` 自动生成，用于检查宽松 Markdown 解析结果。\n\n## 已识别\n\n- 品牌色：${brandEntries.length} 项\n- 功能色：${functionalHex.length} 项\n- 数据色：${dataColors.length} 项\n- 阴影：${boxShadows.length} 项\n- 圆角：${radii.length} 项\n- 图片比例：${ratios.length} 项\n\n## 低置信度项\n\n${lowConfidence.length ? lowConfidence.map((item) => `- ${item}`).join('\n') : '- 无'}\n`,
);

const writeOrCheck = () => {
  let hasDiff = false;

  for (const [file, content] of generatedFiles) {
    const current = existsSync(file) ? readFileSync(file, 'utf8') : null;

    if (current !== content) {
      hasDiff = true;
      if (isCheck) {
        console.error(`Generated file is out of date: ${path.relative(rootDir, file)}`);
      } else {
        mkdirSync(path.dirname(file), { recursive: true });
        writeFileSync(file, content);
      }
    }
  }

  if (isCheck && hasDiff) {
    process.exitCode = 1;
    return;
  }

  console.log(
    isCheck ? 'ui-spec generated files are up to date.' : 'ui-spec generated files synced.',
  );
};

writeOrCheck();
