# Card

**中文名称：** 卡片
**英文名称：** Card
**所属分类：** 数据展示
**一句话简介：** 通用卡片容器，用于承载独立内容区块。

---

## 组件用法

**核心功能：** 通用卡片容器，包含标题、内容和操作区，支持边框模式和无边框模式。

**基础用法示例：**
```tsx
<Card title="客户信息" extra={<a>编辑</a>}>
  <p>卡片内容</p>
</Card>
<Card variant="borderless" style={{ borderRadius: 6 }}>
  <p>无边框卡片</p>
</Card>
<Card.Grid style={{ width: '50%' }}>网格1</Card.Grid>
<Card.Grid style={{ width: '50%' }}>网格2</Card.Grid>
```

**交互说明：**
- W+ 主题下默认 `variant="borderless"` 模式
- Card.Grid 实现卡片内网格布局


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 信息分组展示
- 仪表盘网格布局

**不适场景：**
- 表格数据展示（使用 Table）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| title | ReactNode | — | 卡片标题 |
| extra | ReactNode | — | 右上角操作区 |
| variant | 'borderless' \| 'outlined' | 'outlined' | 卡片变体 |
| size | 'default' \| 'small' | 'default' | 卡片尺寸 |
| loading | boolean | false | 加载中 |

### Events

该组件为纯展示型组件，无事件回调。
