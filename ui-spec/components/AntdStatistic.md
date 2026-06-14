# Statistic

**中文名称：** 统计数值
**英文名称：** Statistic
**所属分类：** 数据展示
**一句话简介：** 展示统计数值和指标。

---

## 组件用法

**核心功能：** 统计数值组件，用于展示关键业务指标的数字、标题和单位，支持精度格式和计数动画。

**基础用法示例：**
```tsx
<Statistic title="AUM" value={86.42} suffix="亿" />
<Statistic title="管户客户数" value={1286} prefix={<TeamOutlined />} />
<Statistic title="增长率" value={5.2} precision={1} suffix="%" />
<Statistic.Countdown title="倒计时" value={Date.now() + 1000 * 60 * 60} />
```

**交互说明：**
- `prefix` / `suffix` 前后缀
- `precision` 小数精度


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 仪表盘关键指标
- 数据汇总卡片

**不适用场景：**
- 标签式展示（使用 Tag）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| title | ReactNode | — | 标题 |
| value | number \| string | — | 数值 |
| precision | number | — | 小数精度 |
| prefix | ReactNode | — | 前缀 |
| suffix | ReactNode | — | 后缀 |
| loading | boolean | false | 加载中 |

### Events

该组件为纯展示型组件，无事件回调。
