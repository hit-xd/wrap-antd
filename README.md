# privatebank-design

`privatebank-design` 是基于 Ant Design v5 的企业级 UI 封装组件库，以金色（`#C5A267`）为主色调的 W+ 设计体系。
目标是让业务项目从：

```ts
import * as antd from 'antd';
```

平滑切换到：

```ts
import * as antd from 'privatebank-design';
```

包入口默认透传 Ant Design 的全部导出，并在此基础上提供企业主题、包装组件和可复用业务组件。

## 特性

- 全量透传 Ant Design v5 组件（`export * from 'antd'`），可直接替换导入来源。
- 12 个 B 类包装组件（Modal / Drawer / Table / Menu / Tabs 等），通过 Token + CSS 精准覆盖设计规范。
- 内置企业主题 `wplusTheme`，由 `ui-spec/` 规范同步生成，注入 `ConfigProvider`。
- CSS 变量体系 `--wplus-*`，统一管理颜色、圆角、间距、阴影、字体等设计 Token。
- 4 个业务组件：`ApprovalProgressSteps`、`DetailPageHeader`、`ErrorBlock`、`Status`。
- 使用 dumi 维护文档站，文档风格参考 Ant Design 官网。

## 安装

```bash
pnpm add privatebank-design antd react react-dom
```

`antd`、`react` 和 `react-dom` 是 peer dependencies，业务项目需要显式安装。

## 快速使用

```tsx
import { Button, ConfigProvider } from 'privatebank-design';
import 'privatebank-design/reset.css';

export function App() {
  return (
    <ConfigProvider>
      <Button type="primary">提交</Button>
    </ConfigProvider>
  );
}
```

`import 'privatebank-design/reset.css'` 会加载完整的 W+ 设计体系：
- antd 基础 reset 样式
- `:root` CSS 变量定义（`--wplus-*`）
- 所有 B 类组件的样式覆盖

## 从 antd 迁移

大多数 Ant Design 组件可以直接从 `privatebank-design` 导入：

```tsx
import { Button, DatePicker, Form, Table } from 'privatebank-design';
```

如果项目中原来使用命名空间导入，也可以保持相同调用方式：

```tsx
import * as antd from 'privatebank-design';

export function Example() {
  return <antd.Button type="primary">提交</antd.Button>;
}
```

迁移时建议先替换导入来源，再逐步接入企业版 `ConfigProvider` 和业务组件。

## 组件架构

组件按定制方式分为两类：

| 类别 | 说明 | 数量 |
|------|------|------|
| A 类（纯 Token 驱动） | 直接透传 antd，样式由 `ConfigProvider` 的 design token 控制 | 30+ |
| B 类（Token + CSS） | 独立 wrapper，通过组件级 `styles.css` 覆盖 token 无法描述的结构/布局 | 12 |

B 类组件列表：

| 组件 | CSS 覆盖要点 |
|------|-------------|
| Modal | Header 56px / Body 30px 内边距 / Footer 52px + 分隔线 |
| Drawer | Header 56px / Body 24px / Footer 16px + 分隔线 |
| Table | 表头背景、紧凑模式行高、行 hover 背景 |
| Menu | 深色顶部导航、侧边导航选中指示线 |
| Tabs | 导航底线色、ink bar 主色 |
| Alert | 四态背景/边框精调 |
| Pagination | 激活态主色边框 |
| Popover | 标题分隔线、容器圆角与阴影 |
| Collapse | 边框色与圆角 |
| Descriptions | 标签与内容文字色 |
| Upload | 拖拽区边框与背景 |
| Breadcrumb | 分隔符间距与链接色 |

每个 B 类组件目录结构：

```
src/components/modal/
  ├── index.tsx       # wrapper 组件，透传 antd 并加载 CSS
  └── styles.css      # 组件级样式覆盖（仅 token 无法描述的部分）
```

## 主题

主题 Token 组织在 `src/theme/tokens/` 下，不可手动修改（由 `pnpm spec:sync` 从 `ui-spec/` 自动生成）：

```
src/theme/tokens/
  ├── primitive-tokens.ts      # 原子 Token（品牌色阶、功能色等）
  ├── semantic-tokens.ts       # 语义 Token
  ├── antd-tokens.ts           # ConfigProvider 全局 Token
  ├── antd-component-tokens.ts # antd 组件级 Token
  └── wplus-component-tokens.ts # W+ 自定义组件 Token
```

主入口导出企业主题：

```ts
import { wplusTheme } from 'privatebank-design';
```

也可以从主题子入口导入：

```ts
import { wplusTheme } from 'privatebank-design/theme';
```

`ConfigProvider` 会默认使用 `wplusTheme`，并合并业务侧传入的 antd `theme`：

```tsx
import { ConfigProvider } from 'privatebank-design';

export function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#8A642D',
        },
      }}
    >
      {/* app */}
    </ConfigProvider>
  );
}
```

### CSS 变量

所有设计 Token 同时以 CSS 自定义属性的形式输出，定义在 `:root` 中：

```css
--wplus-color-brand-7: #b0915c;      /* 品牌主色 */
--wplus-radius-xs: 2px;              /* 小圆角 */
--wplus-radius-sm: 4px;              /* 默认圆角 */
--wplus-space-lg: 16px;              /* 大间距 */
--wplus-shadow-modal: ...;           /* 弹窗投影 */
--wplus-font-size-base: 14px;        /* 基础字号 */
```

CSS 变量与组件样式打包在同一个 `dist/index.css` 中，消费者只需引入一次。

## 业务组件

业务组件可从主入口导入：

```tsx
import { ApprovalProgressSteps, DetailPageHeader, ErrorBlock, Status } from 'privatebank-design';
```

也可以从业务组件子入口导入：

```tsx
import { Status } from 'privatebank-design/business';
```

当前包含：

- `ApprovalProgressSteps`：审批进度步骤。
- `DetailPageHeader`：详情页头部。
- `ErrorBlock`：错误、空状态或异常提示。
- `Status`：业务状态标识。

## 导出入口

| 入口 | 说明 |
|------|------|
| `privatebank-design` | 主入口，透传 antd 全部导出 + W+ 包装组件 + 业务组件 + 主题 |
| `privatebank-design/theme` | `wplusTheme` 企业主题配置 |
| `privatebank-design/business` | 可复用业务组件 |
| `privatebank-design/reset.css` | 完整 W+ 样式（antd reset + CSS 变量 + 组件覆盖） |

## 本地开发

统一使用 pnpm：

```bash
pnpm install
pnpm dev
```

常用命令：

```bash
pnpm docs:dev       # 启动 dumi 文档站
pnpm docs:build     # 构建静态文档
pnpm build          # 输出 ESM + CJS + DTS 到 dist/
pnpm typecheck      # TypeScript 类型检查
pnpm test           # 运行 Vitest
pnpm lint           # ESLint 检查
pnpm spec:sync      # 从 ui-spec/ 同步生成主题 Token
pnpm check          # 串联规范同步、格式、lint、类型检查和测试
pnpm run ci         # 完整 CI（check + build + package-check + docs:build）
```

发布或提交 PR 前至少运行：

```bash
pnpm build
pnpm typecheck
pnpm test
```

完整校验建议运行：

```bash
pnpm run ci
```

## 贡献约定

- 新增包装组件时，尽量保持 antd 原有 props 与行为兼容。
- 企业定制优先通过 Token（`src/theme/tokens/`）实现；Token 无法覆盖的结构/布局样式才写入组件 `styles.css`。
- CSS 属性使用 `--wplus-*` 变量，避免硬编码色值、圆角、间距。
- 公共 CSS 变量在 `src/styles/css-variables.css` 统一定义，新增变量时同步更新。
- 新增组件需在 `src/components/index.ts` 中导出。
- 测试文件与源码同目录放置，命名为 `*.test.ts` 或 `*.test.tsx`。
