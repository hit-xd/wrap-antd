# Calendar

**中文名称：** 日历
**英文名称：** Calendar
**所属分类：** 数据展示
**一句话简介：** 按照日历形式展示数据的容器。

---

## 组件用法

**核心功能：** 日历组件，按月份展示日期网格，支持选择、自定义单元格和月/年切换。

**基础用法示例：**
```tsx
<Calendar onPanelChange={(date, mode) => console.log(date, mode)} />
<Calendar dateCellRender={(date) => {
  if (date.date() === 15) return <div>结息日</div>;
  return null;
}} />
```

**交互说明：**
- `dateCellRender` 自定义单元格内容
- `onPanelChange` 监听面板切换


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 日期选择与展示
- 业务日历、活动日历

**不适用场景：**
- 简单日期选择（使用 DatePicker）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | dayjs | — | 当前日期 |
| mode | 'month' \| 'year' | 'month' | 面板模式 |
| fullscreen | boolean | true | 全屏展示 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onSelect | (date) => void | 选择日期时触发 |
| onPanelChange | (date, mode) => void | 面板切换时触发 |
