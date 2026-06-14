# InputNumber

**中文名称：** 数字输入框
**英文名称：** InputNumber
**所属分类：** 数据录入
**一句话简介：** 通过鼠标或键盘输入数值。

---

## 组件用法

**核心功能：** 数字输入控件，支持数值范围、步进、精度控制和前缀后缀。

**基础用法示例：**
```tsx
<InputNumber min={0} max={100} defaultValue={50} />
<InputNumber precision={2} step={0.01} prefix="¥" />
<InputNumber<string> stringMode value="123456789.12" />
```

**交互说明：**
- `min` / `max` 限制输入范围
- `precision` 控制小数精度
- `stringMode` 解决高精度丢失问题


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 金额输入、数量输入
- 需要数值范围和精度控制的场景

**不适用场景：**
- 普通文本输入（使用 Input）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | number \| string | — | 当前值 |
| min | number | — | 最小值 |
| max | number | — | 最大值 |
| step | number | 1 | 步进值 |
| precision | number | — | 小数精度 |
| disabled | boolean | false | 禁用状态 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (value) => void | 数值变化时触发 |
