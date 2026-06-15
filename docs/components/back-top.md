---
title: BackTop 回到顶部
order: 142
---

# BackTop 回到顶部

用于长页面快速返回顶部。

`BackTop` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/backtop-Style-Spec.md`。

## 组件类型

- 基础回顶
- 自定义可见高度
- 自定义位置

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, FloatButton } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <div style={{ height: 120, overflow: 'auto' }}>
      <div style={{ height: 360 }}>滚动区域示例</div>
      <FloatButton.BackTop />
    </div>
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, FloatButton } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <FloatButton.BackTop visibilityHeight={100} />
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, FloatButton, Card, Space, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <div style={{ height: 120, overflow: 'auto' }}>
          <div style={{ height: 360 }}>滚动区域示例</div>
          <FloatButton.BackTop />
        </div>
        <Typography.Text type="secondary">用于承载客户、审批、资产等业务信息。</Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 紧凑布局

在较窄容器内使用组件，验证密集页面和弹窗内容区的表现。

```tsx
import { ConfigProvider, FloatButton, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <FloatButton.BackTop visibilityHeight={100} />
    </Card>
  </ConfigProvider>
);
```

## 页面导航区

放入页面顶部或内容导航区域，验证导航组件在业务页面中的层级。

```tsx
import { ConfigProvider, FloatButton, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="页面导航" style={{ maxWidth: 640 }}>
      <div style={{ height: 120, overflow: 'auto' }}>
        <div style={{ height: 360 }}>滚动区域示例</div>
        <FloatButton.BackTop />
      </div>
    </Card>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { FloatButtonProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { FloatButtonProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
