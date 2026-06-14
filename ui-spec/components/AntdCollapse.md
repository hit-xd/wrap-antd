# Collapse

**中文名称：** 折叠面板
**英文名称：** Collapse
**所属分类：** 数据展示
**一句话简介：** 可以折叠/展开的内容区域。

---

## 组件用法

**核心功能：** 折叠面板组件，将内容分组折叠，支持手风琴模式和默认展开项。

**基础用法示例：**
```tsx
<Collapse defaultActiveKey={['1']} items={[
  { key: '1', label: '基本信息', children: <p>客户基本信息内容</p> },
  { key: '2', label: '资产信息', children: <p>客户资产信息内容</p> },
  { key: '3', label: '联系记录', children: <p>客户联系记录</p> },
]} />
<Collapse accordion items={items} />
```

**交互说明：**
- `accordion` 手风琴模式（只展开一项）
- `items` 配置面板项


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 信息分类展示
- 配置项分组

**不适场景：**
- 单一块内容（直接展示即可）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| items | CollapseItem[] | [] | 面板项列表 |
| defaultActiveKey | string[] | — | 默认展开项 |
| accordion | boolean | false | 手风琴模式 |
| collapsible | 'header' \| 'icon' \| 'disabled' | — | 触发区域 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (key) => void | 展开项变化时触发 |
