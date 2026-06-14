# Tooltip

**中文名称：** 文字提示
**英文名称：** Tooltip
**所属分类：** 数据展示
**一句话简介：** 简单的文字提示气泡。

---

## 组件用法

**核心功能：** 文字提示组件，鼠标悬停时弹出简洁的文字说明，用于补充解释或信息提示。

**基础用法示例：**
```tsx
<Tooltip title="查看更多客户详情">
  <Button>查看</Button>
</Tooltip>
<Tooltip title="AUM：86.42 亿" placement="right">
  <span>AUM</span>
</Tooltip>
```

**交互说明：**
- `placement` 控制提示方向
- `color` 自定义提示背景色


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 图标按钮的功能说明
- 截断文本的完整内容展示

**不适用场景：**
- 富文本内容展示（使用 Popover）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| title | ReactNode | — | 提示文字 |
| placement | Placement | 'top' | 提示位置 |
| color | string | — | 背景色 |
| trigger | 'hover' \| 'click' \| 'focus' | 'hover' | 触发方式 |

### Events

该组件为纯展示型组件，无事件回调。
