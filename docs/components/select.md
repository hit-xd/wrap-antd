---
title: Select 选择器
order: 105
---

# Select 选择器

用于从一组明确选项中选择单个或多个值。

`Select` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Select.dev.md`。

## 组件类型

- 单选
- 多选
- 可搜索
- 标签模式
- 禁用与校验状态

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Select, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Select
      style={{ width: 240 }}
      placeholder="请选择业务类型"
      options={[
        { label: '财富管理', value: 'wealth' },
        { label: '资产配置', value: 'asset' },
      ]}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Select, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" style={{ width: 360 }}>
      <Select
        mode="multiple"
        placeholder="请选择标签"
        options={[
          { label: '重点', value: 'important' },
          { label: '跟进中', value: 'following' },
        ]}
      />
      <Select
        showSearch
        status="error"
        placeholder="可搜索的错误状态"
        options={[
          { label: '上海', value: 'shanghai' },
          { label: '北京', value: 'beijing' },
        ]}
      />
    </Space>
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Select, Space, Card, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Select
          style={{ width: 240 }}
          placeholder="请选择业务类型"
          options={[
            { label: '财富管理', value: 'wealth' },
            { label: '资产配置', value: 'asset' },
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
import { ConfigProvider, Select, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Space direction="vertical" style={{ width: 360 }}>
        <Select
          mode="multiple"
          placeholder="请选择标签"
          options={[
            { label: '重点', value: 'important' },
            { label: '跟进中', value: 'following' },
          ]}
        />
        <Select
          showSearch
          status="error"
          placeholder="可搜索的错误状态"
          options={[
            { label: '上海', value: 'shanghai' },
            { label: '北京', value: 'beijing' },
          ]}
        />
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 筛选表单

放入查询条件区域，体现与表单标签、按钮的组合方式。

```tsx
import { ConfigProvider, Select, Space, Button, Form } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件">
        <Select
          style={{ width: 240 }}
          placeholder="请选择业务类型"
          options={[
            { label: '财富管理', value: 'wealth' },
            { label: '资产配置', value: 'asset' },
          ]}
        />
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
import type { SelectProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { SelectProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
