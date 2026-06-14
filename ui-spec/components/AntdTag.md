# Tag

**中文名称：** 标签
**英文名称：** Tag
**所属分类：** 数据展示
**一句话简介：** 用于标签分类和状态标识。

---

## 组件用法

**核心功能：** 标签组件，用于标记分类和状态，支持多种颜色、可关闭和预设状态色。

**基础用法示例：**
```tsx
<Tag>默认标签</Tag>
<Tag color="gold">私行客户</Tag>
<Tag color="blue">钻石客户</Tag>
<Tag color="green">已达标</Tag>
<Tag closable onClose={() => console.log('close')}>可关闭</Tag>
<Tag.CheckableTag checked onChange={(c) => console.log(c)}>可选中</Tag.CheckableTag>
```

**交互说明：**
- `color` 使用预设色或自定义色值
- `closable` 可关闭标签


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 客户等级、业务分类标识
- 状态标签、标签筛选

**不适用场景：**
- 数值指标展示（使用 Statistic）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| color | string | — | 标签颜色 |
| closable | boolean | false | 是否可关闭 |
| closeIcon | ReactNode | — | 自定义关闭图标 |
| bordered | boolean | true | 边框模式 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onClose | (e) => void | 关闭标签时触发 |
