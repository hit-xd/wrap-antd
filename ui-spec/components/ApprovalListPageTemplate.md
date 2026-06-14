# ApprovalListPageTemplate

**中文名称：** 审批任务列表模板
**英文名称：** ApprovalListPageTemplate
**所属分类：** 典型页面
**一句话简介：** 审批任务列表模板，展示待处理/已处理/已退回的审批任务管理。

---

## 组件用法

**核心功能：** 审批任务列表页面，包含 BusinessPageLayout 骨架、一级业务 Tabs、审批态四级分段 Tabs、PrivateSearchForm 筛选区、PrivateTable 审批列表和 PrivatePagination 分页。

**交互说明：**
- 审批态“待处理 / 已处理”统一使用不带 icon 的 PrivateSegmentTabs
- 筛选区支持按客户姓名、机构、经理、日期范围搜索
- `controlMode="integrated"` 时，标签页、筛选区和表格必须落在同一个内容容器中，仅通过分割线隔开筛选区与表格


## 字体说明

- 页面中的筛选、工具栏、表格、分页、标签和辅助文案默认使用 14px。
- 页面级标题、统计数字和反馈标题按语义单独定义字号。

---

## 使用场景

**适用场景：**
- 审批任务列表页面
- 需要状态标签+筛选+表格的审批管理

---

## API 文档

### Props

常用页面级能力如下：

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| controlMode | 'separate' \| 'integrated' | 'integrated' | 控制区分离或一体化 |
| layoutDensity | 'default' \| 'compact' | — | 页面整体密度 |
| primaryTabs / secondaryTabs / tertiaryTabs / segmentTabs | PrivateTabItem[] | — | 列表页多层标签配置；审批态“待处理 / 已处理”应传入 segmentTabs |
| searchFields | PrivateSearchField[] | — | 查询字段配置 |
| searchPreset | PrivateSearchPreset | — | 查询区预设 |
| searchFieldWidth | 'sm' \| 'md' \| 'lg' \| 'xl' | — | 查询字段控件宽度 |
| searchLabelWidth | number | — | 查询标签宽度 |
| searchColumnGap | number | — | 查询字段列间距，透传给控制区和 SearchForm |
| searchGridColumns | 3 \| 4 \| 5 | — | 查询网格列数 |
| searchActionPlacement | 'auto' \| 'same-row-right' \| 'next-row-right' | — | 查询按钮位置策略 |
| columns | ColumnsType<RecordType> | — | 表格列定义 |
| dataSource | RecordType[] | — | 表格数据 |
| tableRowMode | PrivateTableRowMode | — | 表格单行/双行形态 |
| pagination | PrivatePaginationProps \| false | — | 分页配置 |

### Events

常用回调如下：

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onPrimaryTabChange | (key: string) => void | 一级标签切换 |
| onSecondaryTabChange | (key: string) => void | 二级标签切换 |
| onSegmentChange | (key: string) => void | 分段标签切换；审批态待处理/已处理走这一回调 |
| onSearch | (values) => void | 查询提交 |
| onReset | () => void | 查询重置 |
