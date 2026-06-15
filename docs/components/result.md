---
title: Result 结果
order: 133
---

# Result 结果

用于展示任务完成后的明确结果。

`Result` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdResult.md`。

## 组件类型

- 成功
- 错误
- 警告
- 信息
- 自定义状态

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Result, Button } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Result
      status="success"
      title="审批提交成功"
      subTitle="审批编号：AP-20260001"
      extra={<Button type="primary">返回列表</Button>}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Result, Button } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Result status="warning" title="当前操作需要进一步确认" extra={<Button>重新检查</Button>} />
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Result, Button, Card, Space, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Result
          status="success"
          title="审批提交成功"
          subTitle="审批编号：AP-20260001"
          extra={<Button type="primary">返回列表</Button>}
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
import { ConfigProvider, Result, Button, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Result status="warning" title="当前操作需要进一步确认" extra={<Button>重新检查</Button>} />
    </Card>
  </ConfigProvider>
);
```

## 流程反馈区

放入审批、提交、加载等流程反馈页面，验证信息层级。

```tsx
import { ConfigProvider, Result, Button, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="流程处理结果" style={{ maxWidth: 560 }}>
      <Result
        status="success"
        title="审批提交成功"
        subTitle="审批编号：AP-20260001"
        extra={<Button type="primary">返回列表</Button>}
      />
    </Card>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { ResultProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { ResultProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
