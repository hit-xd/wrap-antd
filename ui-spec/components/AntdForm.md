# Form

**中文名称：** 表单
**英文名称：** Form
**所属分类：** 数据录入
**一句话简介：** 高性能表单控件，自带数据域管理。

---

## 组件用法

**核心功能：** 表单组件，提供表单数据管理、校验、提交等能力，支持布局模式和响应式。

**基础用法示例：**
```tsx
<Form onFinish={(values) => console.log(values)}>
  <Form.Item label="客户姓名" name="customerName" rules={[{ required: true }]}>
    <Input placeholder="请输入" />
  </Form.Item>
  <Form.Item label="手机号" name="phone" rules={[{ pattern: /^1\d{10}$/ }]}>
    <Input placeholder="请输入手机号" />
  </Form.Item>
  <Button type="primary" htmlType="submit">提交</Button>
</Form>
```

**交互说明：**
- `layout` 控制表单布局（horizontal / vertical / inline）
- `rules` 定义字段校验规则
- 支持表单联动和动态增减表单项


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 业务数据录入表单
- 客户信息、产品配置等复杂表单

**不适用场景：**
- 简单搜索条件（使用 PrivateSearchForm）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| form | FormInstance | — | 表单实例 |
| layout | 'horizontal' \| 'vertical' \| 'inline' | 'horizontal' | 表单布局 |
| labelCol | ColConfig | — | 标签列布局 |
| wrapperCol | ColConfig | — | 输入控件列布局 |
| initialValues | object | — | 初始值 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onFinish | (values) => void | 提交成功时触发 |
| onFinishFailed | ({ values, errorFields }) => void | 提交校验失败时触发 |
