# Dropdown

**中文名称：** 下拉菜单
**英文名称：** Dropdown
**所属分类：** 导航组件
**一句话简介：** 弹出承载更多操作的菜单。

---

## 组件用法

**核心功能：** 当页面上的操作命令过多时，用下拉菜单收纳次要操作，支持点击/悬停触发、级联菜单和弹出位置控制。

**基础用法示例：**
```tsx
<Dropdown
  menu={{
    items: [
      { key: 'edit', label: '编辑' },
      { key: 'copy', label: '复制' },
      { type: 'divider' },
      { key: 'delete', label: '删除', danger: true },
    ],
  }}
>
  <Button>更多操作</Button>
</Dropdown>
```

**交互说明：**
- `trigger` 控制触发方式（click / hover / contextMenu）
- `placement` 控制弹出方向


## 字体说明

- 导航项、页签、路径文字、步骤文案和轻量操作文字默认使用 14px。
- 层级关系通过颜色、字重、缩进和激活态区分，不通过缩小字号区分结构。

---

## 使用场景

**适用场景：**
- 表格操作列的更多操作菜单
- 工具栏的次要操作收纳

**不适用场景：**
- 页面级主导航（使用 Menu）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| menu | MenuConfig | — | 菜单配置 |
| trigger | ('click' \| 'hover' \| 'contextMenu')[] | ['hover'] | 触发方式 |
| placement | Placement | 'bottomLeft' | 弹出位置 |
| disabled | boolean | false | 是否禁用 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onOpenChange | (open) => void | 菜单打开/关闭时触发 |
