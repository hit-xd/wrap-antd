---
title: Table 表格
order: 30
---

# Table 表格

表格继承 antd `Table` 能力，并应用企业规范中的表头背景、边框色和 hover 背景。

## 基础表格

```tsx
import { ConfigProvider, Table, Tag } from 'wrap-antd';

const columns = [
  { title: '名称', dataIndex: 'name' },
  { title: '负责人', dataIndex: 'owner' },
  {
    title: '状态',
    dataIndex: 'status',
    render: (status: string) => (
      <Tag color={status === 'online' ? 'success' : 'default'}>{status}</Tag>
    ),
  },
];

const data = [
  { key: '1', name: '客户中心', owner: 'Alice', status: 'online' },
  { key: '2', name: '报表平台', owner: 'Bob', status: 'offline' },
];

export default () => (
  <ConfigProvider>
    <Table columns={columns} dataSource={data} pagination={false} />
  </ConfigProvider>
);
```

## 使用建议

列表页表格优先提供明确的 `rowKey` 或 `key`。状态、风险、进度等信息使用 `Tag` 或 `Badge`，避免只使用颜色。
