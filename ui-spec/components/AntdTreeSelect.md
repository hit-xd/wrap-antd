# TreeSelect

**中文名称：** 树选择
**英文名称：** TreeSelect
**所属分类：** 数据录入
**一句话简介：** 树形结构的选择控件。

---

## 组件用法

**核心功能：** 树形选择组件，适用于树形数据的下拉选择，支持单选、多选和搜索过滤。

**基础用法示例：**
```tsx
<TreeSelect
  treeData={[
    { title: '华南', value: 'south', children: [
      { title: '深圳分行', value: 'sz' },
      { title: '广州分行', value: 'gz' },
    ]},
  ]}
  placeholder="请选择机构"
/>
<TreeSelect treeCheckable placeholder="多选" />
```

**交互说明：**
- `treeCheckable` 启用多选
- `showSearch` 启用搜索过滤


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 机构树、组织架构选择
- 树形分类的多选

**不适用场景：**
- 非树形结构选择（使用 Select）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | any | — | 选中值 |
| treeData | TreeNode[] | [] | 树形数据 |
| treeCheckable | boolean | false | 多选模式 |
| showSearch | boolean | false | 启搜索 |
| placeholder | string | — | 占位符 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (value) => void | 选项变化时触发 |
