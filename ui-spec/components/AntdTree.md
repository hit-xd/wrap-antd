# Tree

**中文名称：** 树形控件
**英文名称：** Tree
**所属分类：** 数据展示
**一句话简介：** 树形结构的数据展示控件。

---

## 组件用法

**核心功能：** 树形控件，展示层级数据，支持展开/折叠、选中、勾选和异步加载。

**基础用法示例：**
```tsx
<Tree
  treeData={[
    { title: '华南私行中心', key: 'south', children: [
      { title: '深圳福田', key: 'sz-ft' },
      { title: '深圳南山', key: 'sz-ns' },
    ]},
    { title: '华东私行中心', key: 'east', children: [
      { title: '上海陆家嘴', key: 'sh-ljz' },
    ]},
  ]}
  defaultExpandAll
/>
<Tree checkable defaultSelectedKeys={['sz-ft']} />
```

**交互说明：**
- `checkable` 启用复选框多选
- `showLine` 显示连接线


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 机构树、组织架构展示
- 权限树、分类选择

**不适用场景：**
- 下拉树选择（使用 TreeSelect）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| treeData | TreeNode[] | [] | 树形数据 |
| checkable | boolean | false | 启用复选框 |
| defaultExpandAll | boolean | false | 默认展开所有 |
| showLine | boolean | false | 显示连接线 |
| selectedKeys | string[] | — | 选中节点 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onSelect | (keys, info) => void | 选中节点时触发 |
| onCheck | (keys, info) => void | 勾选节点时触发 |
