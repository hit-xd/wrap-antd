---
title: InputNumber 数字输入框
order: 104
---

# InputNumber 数字输入框

用于录入金额、数量、比例等具有明确数值范围的数据。

`InputNumber` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/InputNumber.dev.md`。

## 组件类型

- 基础数值
- 范围限制
- 步进值
- 前后缀
- 禁用与校验状态

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, InputNumber, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <InputNumber min={0} max={100} defaultValue={20} />
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, InputNumber, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space>
      <InputNumber min={0} max={100} addonAfter="%" defaultValue={36} />
      <InputNumber status="warning" placeholder="请输入额度" />
      <InputNumber disabled defaultValue={1000} />
    </Space>
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, InputNumber, Space, Card, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <InputNumber min={0} max={100} defaultValue={20} />
        <Typography.Text type="secondary">用于承载客户、审批、资产等业务信息。</Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 紧凑布局

在较窄容器内使用组件，验证密集页面和弹窗内容区的表现。

```tsx
import { ConfigProvider, InputNumber, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Space>
        <InputNumber min={0} max={100} addonAfter="%" defaultValue={36} />
        <InputNumber status="warning" placeholder="请输入额度" />
        <InputNumber disabled defaultValue={1000} />
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 筛选表单

放入查询条件区域，体现与表单标签、按钮的组合方式。

```tsx
import { ConfigProvider, InputNumber, Space, Button, Form } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件">
        <InputNumber min={0} max={100} defaultValue={20} />
      </Form.Item>
      <Form.Item>
        <Button type="primary">查询</Button>
      </Form.Item>
    </Form>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { InputNumberProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { InputNumberProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
