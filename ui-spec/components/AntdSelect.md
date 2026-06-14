# Select

**中文名称：** 选择器
**英文名称：** Select
**所属分类：** 数据录入
**一句话简介：** 下拉选择器，从选项列表中选择值。

---

## 组件用法

**核心功能：** 下拉选择组件，支持单选、多选、搜索过滤、分组选项和自定义模板。

**基础用法示例：**
```tsx
<Select placeholder="请选择客户等级">
  <Select.Option value="private">私行客户</Select.Option>
  <Select.Option value="diamond">钻石客户</Select.Option>
  <Select.Option value="gold">金葵花客户</Select.Option>
</Select>
<Select mode="multiple" placeholder="多选" />
<Select showSearch placeholder="搜索选择" />
```

**交互说明：**
- `showSearch` 启用搜索过滤
- `mode="multiple"` 多选模式
- `mode="tags"` 标签输入模式


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 表单选择、筛选条件
- 需要搜索过滤的选项选择

**不适用场景：**
- 级联选择（使用 Cascader）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | any | — | 选中值 |
| placeholder | string | — | 占位符 |
| mode | 'multiple' \| 'tags' | — | 选择模式 |
| showSearch | boolean | false | 启用搜索 |
| allowClear | boolean | false | 允许清除 |
| disabled | boolean | false | 禁用状态 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (value, option) => void | 选项变化时触发 |
| onSearch | (value) => void | 搜索值变化时触发 |
