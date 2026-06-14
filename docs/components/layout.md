---
title: Layout 布局
order: 136
---

# Layout 布局

用于构建企业后台的页面整体骨架。

`Layout` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`全局规范/AntdLayout.md`。

## 组件类型

- 顶部布局
- 侧边布局
- 顶侧布局
- 可折叠侧栏

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Layout, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Layout style={{ minHeight: 180 }}>
      <Layout.Header style={{ color: '#fff' }}>顶部导航</Layout.Header>
      <Layout.Content style={{ padding: 24 }}>内容区</Layout.Content>
    </Layout>
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Layout, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Layout style={{ minHeight: 220 }}>
      <Layout.Sider width={160}>侧边导航</Layout.Sider>
      <Layout>
        <Layout.Header style={{ color: '#fff' }}>顶部导航</Layout.Header>
        <Layout.Content style={{ padding: 24 }}>内容区</Layout.Content>
      </Layout>
    </Layout>
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Layout, Space, Card, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Layout style={{ minHeight: 180 }}>
          <Layout.Header style={{ color: '#fff' }}>顶部导航</Layout.Header>
          <Layout.Content style={{ padding: 24 }}>内容区</Layout.Content>
        </Layout>
        <Typography.Text type="secondary">用于承载客户、审批、资产等业务信息。</Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 紧凑布局

在较窄容器内使用组件，验证密集页面和弹窗内容区的表现。

```tsx
import { ConfigProvider, Layout, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Layout style={{ minHeight: 220 }}>
        <Layout.Sider width={160}>侧边导航</Layout.Sider>
        <Layout>
          <Layout.Header style={{ color: '#fff' }}>顶部导航</Layout.Header>
          <Layout.Content style={{ padding: 24 }}>内容区</Layout.Content>
        </Layout>
      </Layout>
    </Card>
  </ConfigProvider>
);
```

## 页面导航区

放入页面顶部或内容导航区域，验证导航组件在业务页面中的层级。

```tsx
import { ConfigProvider, Layout, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="页面导航" style={{ maxWidth: 640 }}>
      <Layout style={{ minHeight: 180 }}>
        <Layout.Header style={{ color: '#fff' }}>顶部导航</Layout.Header>
        <Layout.Content style={{ padding: 24 }}>内容区</Layout.Content>
      </Layout>
    </Card>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { LayoutProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { LayoutProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
