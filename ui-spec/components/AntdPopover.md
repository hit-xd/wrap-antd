# Popover

**中文名称：** 气泡卡片
**英文名称：** Popover
**所属分类：** 数据展示
**一句话简介：** 点击或悬停元素时弹出气泡卡片。

---

## 组件用法

**核心功能：** 气泡卡片组件，在目标元素上弹出浮层展示更多内容，支持自定义内容和标题。

**基础用法示例：**
```tsx
<Popover content={<p>客户等级：私行客户</p>} title="客户详情">
  <Button>查看详情</Button>
</Popover>
<Popover content={content} trigger="click" placement="right" />
```

**交互说明：**
- `trigger` 控制触发方式（hover / click / focus）
- `placement` 控制弹出位置


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 鼠标悬停展示更多信息
- 点击弹出操作面板

**不适用场景：**
- 文字提示（使用 Tooltip）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| content | ReactNode | — | 卡片内容 |
| title | ReactNode | — | 卡片标题 |
| trigger | 'hover' \| 'click' \| 'focus' | 'hover' | 触发方式 |
| placement | Placement | 'top' | 弹出位置 |
| open | boolean | — | 受控显隐 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onOpenChange | (open) => void | 显隐状态变化时触发 |
