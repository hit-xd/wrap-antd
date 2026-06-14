# Empty

**中文名称：** 空状态
**英文名称：** Empty
**所属分类：** 数据展示
**一句话简介：** 空状态时的占位提示。

---

## 组件用法

**核心功能：** 空状态组件，当无数据时展示占位提示，支持自定义图片、文案和操作按钮。

**基础用法示例：**
```tsx
<Empty description="暂无客户数据" />
<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
<Empty description="暂无待办任务">
  <Button type="primary">前往处理</Button>
</Empty>
```

**交互说明：**
- `image` 自定义空状态图片
- 通过 children 传入操作按钮


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 表格无数据时的空态提示
- 查询结果为空时的反馈

**不适用场景：**
- 当前页面为空状态（使用 EmptyStateCard）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| description | ReactNode | — | 空状态文案 |
| image | ReactNode | Empty.PRESENTED_IMAGE_DEFAULT | 空状态图片 |
| imageStyle | CSSProperties | — | 图片样式 |

### Events

该组件为纯展示型组件，无事件回调。
