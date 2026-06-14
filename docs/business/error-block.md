---
title: ErrorBlock 空状态
order: 200
---

# ErrorBlock 空状态

用于列表、表格、日历和业务区块的空状态反馈，统一空态图形、文案层级和操作入口。

## 组件类型

- 默认空态
- 表格空态
- 日历空态
- 业务空态
- 自定义操作

## 基础空态

适合列表、详情模块或卡片内容为空时使用。

```tsx
import { ConfigProvider, ErrorBlock } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <ErrorBlock
      title="暂无数据"
      description="当前筛选条件下没有可展示的内容。"
      action={<ErrorBlock.Button type="primary">新建数据</ErrorBlock.Button>}
    />
  </ConfigProvider>
);
```

## 场景类型

通过 variant 区分表格、日历和业务区块的空态语义。

```tsx
import { ConfigProvider, ErrorBlock, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <ErrorBlock variant="table" title="暂无表格数据" description="可以调整筛选条件后重试。" />
      <ErrorBlock variant="calendar" title="暂无日程" description="今天还没有待办安排。" />
      <ErrorBlock variant="business" title="暂无业务内容" description="请先完成上游配置。" />
    </Space>
  </ConfigProvider>
);
```

## 表格空数据

与 Table 的 emptyText 组合，统一表格无数据反馈。

```tsx
import { ConfigProvider, ErrorBlock, Table } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Table
      columns={[{ title: '客户名称', dataIndex: 'name' }]}
      dataSource={[]}
      pagination={false}
      locale={{
        emptyText: (
          <ErrorBlock variant="table" title="暂无客户" description="没有匹配的客户记录。" />
        ),
      }}
    />
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入。

```tsx | pure
import type { ErrorBlockProps } from 'privatebank-design';
```

## API 与类型

组件 Props 可直接从 `privatebank-design` 导入：

```tsx | pure
import type { ErrorBlockProps } from 'privatebank-design';
```

业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
