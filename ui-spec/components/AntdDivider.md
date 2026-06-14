# Divider

**中文名称：** 分割线
**英文名称：** Divider
**所属分类：** 布局
**一句话简介：** 区隔内容的分割线，支持带标题的分割线样式。

---

## 组件用法

**核心功能：** 用于将页面内容分组区隔，支持横向/竖向分割线，可选带标题文字的分割线样式。

**基础用法示例：**
```tsx
<Divider />
<Divider>基本信息</Divider>
<Divider orientation="left">客户信息</Divider>
<Divider type="vertical" />
```

**交互说明：**
- W+ 主题下分割线颜色映射为 COLOR_SPLIT
- 横向分割线默认与上下组件保持 20px 间距
- `orientation` 控制标题文字位置（left / center / right）
- `type="vertical"` 用于行内分割


## 字体说明

- 布局中的正文说明、导航文字和辅助操作默认使用 14px。
- 页面标题、区块标题和面包屑等特殊层级按对应组件说明执行。

---

## 使用场景

**适用场景：**
- 表单分区、详情页信息分组
- 行内操作区竖线分隔

**不适用场景：**
- 页面级卡片分隔（使用卡片容器）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| type | 'horizontal' \| 'vertical' | 'horizontal' | 分割线方向 |
| orientation | 'left' \| 'center' \| 'right' | 'center' | 标题文字位置 |
| dashed | boolean | false | 虚线样式 |
| plain | boolean | false | 文字是否显示为普通正文 |

### Events

该组件为纯展示型组件，无事件回调。
