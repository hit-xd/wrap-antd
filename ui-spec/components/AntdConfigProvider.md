# ConfigProvider

**中文名称：** 全局化配置
**英文名称：** ConfigProvider
**所属分类：** 反馈
**一句话简介：** 为组件提供全局化配置能力。

---

## 组件用法

**核心功能：** 全局配置组件，为应用的 antd 组件统一配置主题、语言、尺寸、渲染容器等全局属性。

**基础用法示例：**
```tsx
<ConfigProvider
  theme={{ token: { colorPrimary: '#C5A267' } }}
  locale={zhCN}
  componentSize="middle"
>
  <App>
    <YourApp />
  </App>
</ConfigProvider>
```

> 注意：在 W+ 组件库中，WplusProvider 已封装 ConfigProvider 的配置。一般场景无需直接使用 ConfigProvider，直接使用 WplusProvider 即可。


## 字体说明

- 反馈正文、确认说明和按钮文字默认使用 14px。
- 结果标题、弹窗标题或状态标题按组件语义单独定义字号。

---

## 使用场景

**适用场景：**
- 自定义 antd 全局主题
- 设置全局语言包

**不适用场景：**
- 使用 W+ 主题时（使用 WplusProvider）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| theme | ThemeConfig | — | 主题配置 |
| locale | Locale | — | 语言包 |
| componentSize | 'small' \| 'middle' \| 'large' | 'middle' | 组件尺寸 |
| space | SpaceConfig | — | 全局间距配置 |
| variant | 'outlined' \| 'borderless' \| 'filled' | 'outlined' | 组件变体 |

### Events

该组件为纯展示型组件，无事件回调。
