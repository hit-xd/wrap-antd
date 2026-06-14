---
title: Table 表格
order: 102
---

# Table 表格

表格继承 antd `Table` 能力，并应用企业规范中的表头背景、边框色和 hover 背景。

`Table` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Table 表格样式.md`。

## 组件类型

- 基础表格
- 状态列
- 分页表格
- 行选择
- 操作列

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Table, Tag } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Table
      columns={[
        { title: '名称', dataIndex: 'name' },
        { title: '负责人', dataIndex: 'owner' },
        {
          title: '状态',
          dataIndex: 'status',
          render: (status) => (
            <Tag color={status === 'online' ? 'success' : 'default'}>{status}</Tag>
          ),
        },
      ]}
      dataSource={[
        { key: '1', name: '客户中心', owner: 'Alice', status: 'online' },
        { key: '2', name: '报表平台', owner: 'Bob', status: 'offline' },
      ]}
      pagination={false}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Table, Tag } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Table
      rowSelection={{}}
      columns={[
        { title: '客户名称', dataIndex: 'name' },
        { title: '资产规模', dataIndex: 'amount' },
        { title: '操作', dataIndex: 'action', render: () => <a>查看</a> },
      ]}
      dataSource={[
        { key: '1', name: '上海分行重点客户', amount: '￥12,800,000' },
        { key: '2', name: '北京分行机构客户', amount: '￥8,600,000' },
      ]}
      pagination={{ pageSize: 5 }}
    />
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Table, Tag, Card, Space, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Table
          columns={[
            { title: '名称', dataIndex: 'name' },
            { title: '负责人', dataIndex: 'owner' },
            {
              title: '状态',
              dataIndex: 'status',
              render: (status) => (
                <Tag color={status === 'online' ? 'success' : 'default'}>{status}</Tag>
              ),
            },
          ]}
          dataSource={[
            { key: '1', name: '客户中心', owner: 'Alice', status: 'online' },
            { key: '2', name: '报表平台', owner: 'Bob', status: 'offline' },
          ]}
          pagination={false}
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
import { ConfigProvider, Table, Tag, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Table
        rowSelection={{}}
        columns={[
          { title: '客户名称', dataIndex: 'name' },
          { title: '资产规模', dataIndex: 'amount' },
          { title: '操作', dataIndex: 'action', render: () => <a>查看</a> },
        ]}
        dataSource={[
          { key: '1', name: '上海分行重点客户', amount: '￥12,800,000' },
          { key: '2', name: '北京分行机构客户', amount: '￥8,600,000' },
        ]}
        pagination={{ pageSize: 5 }}
      />
    </Card>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { TableProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { TableProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
