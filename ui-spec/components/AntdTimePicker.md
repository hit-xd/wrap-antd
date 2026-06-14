# TimePicker

**中文名称：** 时间选择框
**英文名称：** TimePicker
**所属分类：** 数据录入
**一句话简介：** 输入或选择时间的控件。

---

## 组件用法

**核心功能：** 时间选择控件，支持时:分:秒选择、12/24 小时制和禁用时间段。

**基础用法示例：**
```tsx
<TimePicker onChange={(time, timeStr) => console.log(timeStr)} />
<TimePicker format="HH:mm" />
<TimePicker.RangePicker />
```

**交互说明：**
- `format` 控制时间格式
- `use12Hours` 切换12小时制


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 表单中的时间输入
- 时间段范围选择

**不适用场景：**
- 日期选择（使用 DatePicker）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | dayjs | — | 时间值 |
| format | string | 'HH:mm:ss' | 时间格式 |
| minuteStep | number | 1 | 分钟步进 |
| use12Hours | boolean | false | 12小时制 |
| disabled | boolean | false | 禁用 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (time, timeStr) => void | 时间变化时触发 |
