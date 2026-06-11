# Repository Guidelines

## 项目结构与模块组织

本项目是一个 pnpm 管理的 TypeScript 组件库，基于 Ant Design v5 做企业级 UI 二次封装。目标是让业务项目从 `import * from 'antd'` 平滑切换到 `import * from 'wrap-antd'`。

- `src/index.ts` 是包入口，默认透传 antd 导出，并暴露企业封装能力。
- `src/theme/` 存放企业主题 token、主题工厂和组件级样式配置。
- `src/components/` 存放对 antd 的包装组件，例如企业版 `ConfigProvider`。
- `src/business/` 用于沉淀可复用业务组件。
- `docs/` 和组件旁的 `index.md` 用于 dumi 文档站，风格参考 antd 官网。
- 测试文件与源码同目录放置，命名为 `*.test.ts` 或 `*.test.tsx`。

## 构建、测试与开发命令

统一使用 pnpm：

- `pnpm install` 安装依赖。
- `pnpm dev` 以 watch 模式构建库代码。
- `pnpm docs:dev` 启动本地文档站。
- `pnpm docs:build` 构建静态文档到 `docs-dist/`。
- `pnpm build` 输出 ESM、CJS 和类型声明到 `dist/`。
- `pnpm typecheck` 执行 TypeScript 类型检查。
- `pnpm test` 运行 Vitest。
- `pnpm lint` 执行 ESLint。
- `pnpm format:check` 校验 Prettier 格式。
- `pnpm fix` 自动执行 ESLint fix 和 Prettier 格式化。
- `pnpm check` 串联规范生成一致性、格式、lint、类型检查和测试。
- `pnpm run ci` 运行完整 CI 校验，包括库构建和文档构建。

发布或提交 PR 前至少运行 `pnpm build`、`pnpm typecheck`、`pnpm test`。

## 编码风格与命名规范

项目使用 TypeScript、React JSX、ESLint 和 Prettier。缩进为 2 个空格，使用单引号和分号。变量与函数使用 `camelCase`，组件和导出类型使用 `PascalCase`，非组件目录和文件优先使用 `kebab-case`。

新增包装组件时应尽量保持 antd 原有 props 与行为兼容；企业定制优先通过主题 token、包装组件或业务组件沉淀，不要破坏 antd 的命名导出。

## 测试规范

组件测试使用 Vitest 和 Testing Library。测试应关注渲染结果、公开 props 和用户行为，不依赖内部实现细节。示例：`src/components/config-provider/index.test.tsx`。

新增主题合并逻辑、包装组件行为或业务组件时，需要补充对应测试。

## 文档规范

文档使用 dumi。全局指南放在 `docs/`，组件文档优先放在组件目录下的 `index.md`。组件文档应包含用途说明、基础示例、可配置示例和 API 说明。示例代码应使用 `wrap-antd` 导入，体现业务项目真实用法。

## Commit 与 Pull Request 规范

当前目录没有可参考的 Git 历史。提交信息使用清晰的祈使句，例如 `Add enterprise table styles` 或 `Fix ConfigProvider theme merge`。

PR 应包含变更摘要、关联需求或 issue、测试结果；涉及 UI 或文档站变更时附截图或录屏。保持 PR 聚焦单一功能或修复。
