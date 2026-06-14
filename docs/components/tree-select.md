---
title: TreeSelect 树选择
order: 109
---

# TreeSelect 树选择

用于从树形层级数据中选择一个或多个节点。

`TreeSelect` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/TreeSelect.dev.md`。

## 组件类型

- 单选
- 多选
- 可勾选
- 搜索
- 禁用节点

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, TreeSelect, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <TreeSelect
      style={{ width: 280 }}
      placeholder="请选择组织"
      treeData={[
        { title: '总部', value: 'hq', children: [{ title: '财富管理部', value: 'wealth' }] },
      ]}
    />
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, TreeSelect, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <TreeSelect
      treeCheckable
      showCheckedStrategy={TreeSelect.SHOW_PARENT}
      style={{ width: 320 }}
      placeholder="请选择组织"
      treeData={[
        {
          title: '总部',
          value: 'hq',
          children: [
            { title: '财富管理部', value: 'wealth' },
            { title: '运营部', value: 'ops' },
          ],
        },
      ]}
    />
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, TreeSelect, Space, Card, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <TreeSelect
          style={{ width: 280 }}
          placeholder="请选择组织"
          treeData={[
            { title: '总部', value: 'hq', children: [{ title: '财富管理部', value: 'wealth' }] },
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
import { ConfigProvider, TreeSelect, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <TreeSelect
        treeCheckable
        showCheckedStrategy={TreeSelect.SHOW_PARENT}
        style={{ width: 320 }}
        placeholder="请选择组织"
        treeData={[
          {
            title: '总部',
            value: 'hq',
            children: [
              { title: '财富管理部', value: 'wealth' },
              { title: '运营部', value: 'ops' },
            ],
          },
        ]}
      />
    </Card>
  </ConfigProvider>
);
```

## 筛选表单

放入查询条件区域，体现与表单标签、按钮的组合方式。

```tsx
import { ConfigProvider, TreeSelect, Space, Button, Form } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="查询条件">
        <TreeSelect
          style={{ width: 280 }}
          placeholder="请选择组织"
          treeData={[
            { title: '总部', value: 'hq', children: [{ title: '财富管理部', value: 'wealth' }] },
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
import type { TreeSelectProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { TreeSelectProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
