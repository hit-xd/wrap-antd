# Carousel

**中文名称：** 走马灯
**英文名称：** Carousel
**所属分类：** 数据展示
**一句话简介：** 一组轮播的区域，用于展示轮播图片或内容。

---

## 组件用法

**核心功能：** 走马灯/轮播组件，循环展示多张图片或内容块，支持自动播放和导航控制。

**基础用法示例：**
```tsx
<Carousel autoplay>
  <div><img src="banner1.png" alt="banner1" /></div>
  <div><img src="banner2.png" alt="banner2" /></div>
  <div><img src="banner3.png" alt="banner3" /></div>
</Carousel>
```

**交互说明：**
- `autoplay` 自动轮播
- `dots` 控制指示点显示


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 首页 Banner 轮播
- 产品展示轮播

**不适用场景：**
- 静态图片展示

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| autoplay | boolean | false | 自动切换 |
| dots | boolean | true | 是否显示指示点 |
| effect | 'scrollx' \| 'fade' | 'scrollx' | 切换效果 |
| speed | number | 500 | 切换速度(ms) |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| afterChange | (current) => void | 切换后触发 |
