---
title: Status 状态点
order: 201
---

# Status 状态点

用于在表格、详情页和流程节点中展示轻量状态，保持颜色和文案结构一致。

## 组件类型

- 成功
- 处理中
- 警告
- 错误
- 默认状态
- 表格状态列

## 基础状态

展示业务中常见的状态类型。

```tsx
import { ConfigProvider, Space, Status } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space>
      <Status type="success" text="已生效" />
      <Status type="processing" text="处理中" />
      <Status type="warning" text="待确认" />
      <Status type="error" text="已驳回" />
      <Status text="未开始" />
    </Space>
  </ConfigProvider>
);
```

## 表格状态列

在列表中保持状态点和状态文案的统一展示。

```tsx
import { ConfigProvider, Status, Table } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Table
      pagination={false}
      columns={[
        { title: '任务', dataIndex: 'name' },
        {
          title: '状态',
          dataIndex: 'status',
          render: (status) => <Status type={status} text={status} />,
        },
      ]}
      dataSource={[
        { key: '1', name: '风险复核', status: 'processing' },
        { key: '2', name: '资料补充', status: 'warning' },
      ]}
    />
  </ConfigProvider>
);
```

## 详情字段

用于详情页字段中，避免只用颜色表达状态。

```tsx
import { ConfigProvider, Descriptions, Status } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Descriptions
      bordered
      column={2}
      items={[
        { key: 'owner', label: '负责人', children: '张三' },
        { key: 'status', label: '当前状态', children: <Status type="processing" text="审批中" /> },
      ]}
    />
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入。

```tsx | pure
import type { StatusProps } from 'privatebank-design';
```

## API 与类型

组件 Props 可直接从 `privatebank-design` 导入：

```tsx | pure
import type { StatusProps } from 'privatebank-design';
```

业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
