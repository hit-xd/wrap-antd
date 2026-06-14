# DatePicker

**中文名称：** 日期选择框
**英文名称：** DatePicker
**所属分类：** 数据录入
**一句话简介：** 输入或选择日期的控件。

---

## 组件用法

**核心功能：** 日期选择控件，支持单日选择、日期范围选择、月份选择、周选择等模式。

**基础用法示例：**
```tsx
<DatePicker onChange={(date, dateStr) => console.log(dateStr)} />
<DatePicker.RangePicker onChange={(dates, dateStrs) => console.log(dateStrs)} />
<MonthPicker />
<WeekPicker />
```

**交互说明：**
- 支持 `disabledDate` 禁用指定日期
- RangePicker 选择日期范围


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 表单中的日期输入
- 查询条件中的日期范围

**不适用场景：**
- 时间选择（使用 TimePicker）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | dayjs | — | 日期值 |
| format | string | 'YYYY-MM-DD' | 日期格式 |
| disabledDate | (date) => boolean | — | 禁用日期函数 |
| allowClear | boolean | true | 允许清除 |
| placeholder | string | — | 占位符 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (date, dateStr) => void | 日期变化时触发 |
