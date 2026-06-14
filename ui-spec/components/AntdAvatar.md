# Avatar

**中文名称：** 头像
**英文名称：** Avatar
**所属分类：** 数据展示
**一句话简介：** 用来代表用户或事物，支持图片、图标或字符展示。

---

## 组件用法

**核心功能：** 头像组件，展示用户头像或品牌标识，支持图片、图标和文字三种类型。

**基础用法示例：**
```tsx
<Avatar src="https://example.com/avatar.png" />
<Avatar icon={<UserOutlined />} />
<Avatar size="large">朱</Avatar>
<Avatar.Group maxCount={3}>
  <Avatar>张</Avatar>
  <Avatar>李</Avatar>
  <Avatar>王</Avatar>
  <Avatar>赵</Avatar>
</Avatar.Group>
```

**交互说明：**
- `size` 支持预设值（large / default / small）和自定义像素值
- Avatar.Group 支持数量溢出折叠


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 用户头像展示
- 客户经理信息展示

**不适用场景：**
- 纯图标展示（使用 Icon）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | string | — | 图片地址 |
| icon | ReactNode | — | 图标 |
| size | 'large' \| 'default' \| 'small' \| number | 'default' | 头像尺寸 |
| shape | 'circle' \| 'square' | 'circle' | 头像形状 |
| alt | string | — | 图片 alt 文本 |

### Events

该组件为纯展示型组件，无事件回调。
