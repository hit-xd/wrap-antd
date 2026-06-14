# PrivateTable

**中文名称：** 高级表格
**英文名称：** PrivateTable
**所属分类：** 表格
**一句话简介：** 核心表格组件，封装 Ant Design Table 并集成 PrivatePagination，支持单行表格、双行表格、固定列、粘性表头等特性。

---

## 组件用法

**核心功能：** 提供私行系统统一表格渲染方案，支持 `singleLine` / `doubleLine` / `compactSingleLine` / `compactDoubleLine` 行模式、`compact` / `standard` 密度、粘性表头、固定首尾列、编辑态和嵌套表格。

**基础用法示例：**
```tsx
<PrivateTable
  columns={[
    { title: '客户名称', dataIndex: 'name', key: 'name' },
    { title: '手机号', dataIndex: 'phone', key: 'phone' },
  ]}
  dataSource={data}
  rowKey="id"
  density="compact"
  rowMode="singleLine"
  pagination={{ current: 1, pageSize: 10, total: 100 }}
/>
```

**交互说明：**
- `pagination` 传入 `false` 时隐藏分页
- `rowMode="compactSingleLine"` 表示单行表格，表头高度 34px、行高 34px
- `rowMode="compactDoubleLine"` 表示双行表格，表头高度 34px、行高 54px
- `fixedActionColumn` 自动将 key 为 `action` 的列固定在右侧
- 首列固定可在 columns 中配置 `fixed: 'left'`
- `stickyHeader` 开启表头吸顶
- `wide` 模式开启 `x: 'max-content'` 横向滚动

## 字体说明

- 表头、表体、分页以及表格语义单元格统一使用 14px。
- 单行表格：表头高度 34px，行高 34px；双行表格：表头高度 34px，行高 54px。
- 状态、金额、评分、排名等表格单元格通过颜色、字重和图标区分信息，不通过缩小字号压缩信息密度。

---

## 使用场景

**适用场景：**
- 查询列表页的标准表格
- 需要分页、行模式切换的列表展示

**不适用场景：**
- 简单卡片式展示（使用 List 或 Card）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| columns | ColumnsType<RecordType> | 必填 | 列配置 |
| dataSource | RecordType[] | 必填 | 数据源 |
| rowKey | string \| function | — | 行 key |
| loading | boolean | — | 加载中 |
| density | 'compact' \| 'standard' | 'compact' | 表格密度 |
| rowMode | PrivateTableRowMode | 'singleLine' | 行模式 |
| wide | boolean | — | 是否横向滚动 |
| stickyHeader | boolean | — | 粘性表头 |
| fixedActionColumn | boolean | — | 固定操作列 |
| ellipsis | boolean | — | 文字溢出省略 |
| editable | boolean | — | 可编辑态 |
| nested | boolean | — | 嵌套表格模式 |
| emptyText | ReactNode | '暂无数据' | 空状态文案 |
| pagination | PrivateTablePagination | — | 分页配置或 false |
| rowSelection | TableProps['rowSelection'] | — | 行选择 |
| expandable | TableProps['expandable'] | — | 展开行 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | TableProps['onChange'] | 表格变化回调 |
