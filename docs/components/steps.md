---
title: Steps 步骤条
order: 139
---

# Steps 步骤条

用于展示任务流程、当前进度和状态。

`Steps` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`导航组件/steps-Style-Spec.md`。

## 组件类型

- 水平步骤
- 竖向步骤
- 小尺寸
- 状态步骤

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Steps, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Steps
      current={1}
      items={[{ title: '填写资料' }, { title: '风险评估' }, { title: '提交审批' }]}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Steps, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Steps
      direction="vertical"
      size="small"
      current={1}
      items={[
        { title: '申请已提交', description: '2026-06-12 09:00' },
        { title: '审批处理中', description: '等待负责人审批' },
        { title: '审批完成' },
      ]}
    />
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Steps, Space, Card, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Steps
          current={1}
          items={[{ title: '填写资料' }, { title: '风险评估' }, { title: '提交审批' }]}
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
import { ConfigProvider, Steps, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Steps
        direction="vertical"
        size="small"
        current={1}
        items={[
          { title: '申请已提交', description: '2026-06-12 09:00' },
          { title: '审批处理中', description: '等待负责人审批' },
          { title: '审批完成' },
        ]}
      />
    </Card>
  </ConfigProvider>
);
```

## 页面导航区

放入页面顶部或内容导航区域，验证导航组件在业务页面中的层级。

```tsx
import { ConfigProvider, Steps, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="页面导航" style={{ maxWidth: 640 }}>
      <Steps
        current={1}
        items={[{ title: '填写资料' }, { title: '风险评估' }, { title: '提交审批' }]}
      />
    </Card>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { StepsProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { StepsProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
