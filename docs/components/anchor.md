---
title: Anchor 锚点
order: 141
---

# Anchor 锚点

用于长页面内快速定位不同内容区块。

`Anchor` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/anchor-Style-Spec.md`。

## 组件类型

- 基础锚点
- 水平锚点
- 滚动容器
- 自定义高亮

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Anchor, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Anchor
      items={[
        { key: 'basic', href: '#basic', title: '基本信息' },
        { key: 'asset', href: '#asset', title: '资产信息' },
        { key: 'risk', href: '#risk', title: '风险信息' },
      ]}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Anchor, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Anchor
      direction="horizontal"
      items={[
        { key: 'overview', href: '#overview', title: '概览' },
        { key: 'detail', href: '#detail', title: '详情' },
      ]}
    />
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Anchor, Space, Card, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Anchor
          items={[
            { key: 'basic', href: '#basic', title: '基本信息' },
            { key: 'asset', href: '#asset', title: '资产信息' },
            { key: 'risk', href: '#risk', title: '风险信息' },
          ]}
        />
        <Typography.Text type="secondary">用于承载客户、审批、资产等业务信息。</Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 紧凑布局

在较窄容器内使用组件，验证密集页面和弹窗内容区的表现。

```tsx
import { ConfigProvider, Anchor, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Anchor
        direction="horizontal"
        items={[
          { key: 'overview', href: '#overview', title: '概览' },
          { key: 'detail', href: '#detail', title: '详情' },
        ]}
      />
    </Card>
  </ConfigProvider>
);
```

## 页面导航区

放入页面顶部或内容导航区域，验证导航组件在业务页面中的层级。

```tsx
import { ConfigProvider, Anchor, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="页面导航" style={{ maxWidth: 640 }}>
      <Anchor
        items={[
          { key: 'basic', href: '#basic', title: '基本信息' },
          { key: 'asset', href: '#asset', title: '资产信息' },
          { key: 'risk', href: '#risk', title: '风险信息' },
        ]}
      />
    </Card>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { AnchorProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { AnchorProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
