# List

**中文名称：** 列表
**英文名称：** List
**所属分类：** 数据展示
**一句话简介：** 通用列表组件，用于展示垂直排列的数据项。

---

## 组件用法

**核心功能：** 通用列表组件，支持列表项渲染、分页、加载更多和栅格布局。

**基础用法示例：**
```tsx
<List
  dataSource={[
    { key: '1', name: '朱女士', phone: '138****6688' },
    { key: '2', name: '黄先生', phone: '139****5522' },
  ]}
  renderItem={(item) => (
    <List.Item>{item.name} - {item.phone}</List.Item>
  )}
/>
<List itemLayout="vertical" size="large" pagination={{ pageSize: 5 }} />
```

**交互说明：**
- `pagination` 开启列表分页
- `grid` 栅格列表模式


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 通知列表、消息列表
- 简单数据项展示

**不适用场景：**
- 表格数据展示（使用 Table）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| dataSource | any[] | [] | 数据源 |
| renderItem | (item) => ReactNode | — | 渲染函数 |
| pagination | boolean \| PaginationConfig | false | 分页 |
| grid | GridConfig | — | 栅格配置 |
| size | 'default' \| 'large' \| 'small' | 'default' | 尺寸 |

### Events

该组件为纯展示型组件，无事件回调。
