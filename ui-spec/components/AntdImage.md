# Image

**中文名称：** 图片
**英文名称：** Image
**所属分类：** 数据展示
**一句话简介：** 图片组件，支持预览和加载状态。

---

## 组件用法

**核心功能：** 图片组件，支持图片加载、预览大图、多图预览和加载占位。

**基础用法示例：**
```tsx
<Image src="https://example.com/photo.png" alt="客户证件" />
<Image.PreviewGroup items={[src1, src2, src3]} />
<Image src={src} fallback="data:image/png;base64,..." />
```

**交互说明：**
- 点击图片可放大预览
- PreviewGroup 支持多图切换预览


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 客户证件照、影像资料展示
- 产品图片、图表展示

**不适用场景：**
- 小图标展示（使用 Icon）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| src | string | — | 图片地址 |
| alt | string | — | 替代文本 |
| width | number \| string | — | 宽度 |
| height | number \| string | — | 高度 |
| fallback | string | — | 加载失败占位图 |
| preview | boolean \| PreviewConfig | true | 预览配置 |

### Events

该组件为纯展示型组件，无事件回调。
