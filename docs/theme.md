---
title: 主题定制
order: 2
---

# 主题定制

`wrap-antd` 通过 `enterpriseTheme` 统一维护企业 token，并在包装版 `ConfigProvider` 中默认合并。

当前主题已从 `ui-spec/` 提取以下设计规范：

| 规范文件           | 落地方式                        |
| ------------------ | ------------------------------- |
| `color.md`         | 品牌金、中性色、功能色、数据色  |
| `ContainerSpec.md` | 圆角、阴影、容器边框与背景      |
| `Space.md`         | 4px 间距体系、20px 栅格 gutter  |
| `Typography.md`    | 字体族、正文字号、行高、字重    |
| `Layout.md`        | Header、Sider、内容区尺寸 token |
| `ImageRatio.md`    | 常用图片比例 token 与 CSS 变量  |

## 内置 token

```tsx
import { Button, ConfigProvider, globalDesignTokens } from 'wrap-antd';

export default () => (
  <ConfigProvider>
    <Button type="primary">{globalDesignTokens.color.brand[7]}</Button>
  </ConfigProvider>
);
```

## 覆盖主题

```tsx
import { Button, ConfigProvider, createEnterpriseTheme } from 'wrap-antd';

const theme = createEnterpriseTheme({
  primaryColor: '#0052d9',
  borderRadius: 6,
});

export default () => (
  <ConfigProvider theme={theme}>
    <Button type="primary">企业主按钮</Button>
  </ConfigProvider>
);
```

后续新增品牌色、表格密度、表单间距等规范时，优先沉淀在 `src/theme/`，避免业务项目分散覆盖。

## CSS 变量

引入 `wrap-antd/reset.css` 后可使用基础 CSS 变量：

```css
.page {
  background: var(--wrap-color-bg-page);
  padding: var(--wrap-layout-content-padding);
}

.cover {
  aspect-ratio: var(--wrap-image-ratio-widescreen);
  border-radius: var(--wrap-radius-md);
}
```
