# IconCatalog

**中文名称：** 图标
**英文名称：** Icon
**所属分类：** 全局样式
**一句话简介：** 将私行 W+ 设计规范中的图标按原分类整理，保留线性、填充、双色等分类。

---

## 组件用法

**核心功能：** 按设计规范目录整理图标资源，分为线性、填充、双色、多色、文件、反馈等类别，提供浏览和引用能力。

**基础用法示例：**
```tsx
import { iconCatalog } from 'wplus-design';

function IconCatalogPreview() {
  return iconCatalog.map((category) => (
    <section key={category.key}>
      <h3>{category.label}</h3>
      {category.items.map((item) => (
        <img key={item.id} src={item.src} alt={item.name} />
      ))}
    </section>
  ));
}
```

**交互说明：**
- 图标支持 SVG 与 PNG 两种格式
- 普通图标保留 SVG；组件集总览图允许使用 PNG


## 字体说明

- 本页中的规范说明、示例标注和参数表默认按 14px 阅读字号展示。
- 字号与行高分开说明；组件说明页只写字号，行高以规范表为准。

---

## 使用场景

**适用场景：**
- 浏览和引用 W+ 设计规范中的图标资源
- 在开发时快速查找适用的图标

**不适用场景：**
- 运行时动态图标选择（使用 @ant-design/icons）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| iconCatalog | IconCatalogCategory[] | 9 categories | 图标目录清单 |
| item.src | string | — | 图标静态资源路径 |
| item.format | 'svg' \| 'png' | 'svg' | 图标资源格式 |
| item.alias | string | — | 设计源文件中的英文别名 |

### Events

该组件为纯展示型组件，无事件回调。
