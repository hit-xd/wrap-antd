# Input

**中文名称：** 输入框
**英文名称：** Input
**所属分类：** 数据录入
**一句话简介：** 通过鼠标或键盘输入内容，是最基础的表单域。

---

## 组件用法

**核心功能：** 文本输入框组件，支持单行输入、密码、文本域、前缀后缀图标和搜索模式。

**基础用法示例：**
```tsx
<Input placeholder="请输入客户姓名" />
<Input.Password placeholder="请输入密码" />
<Input.TextArea rows={4} placeholder="请输入备注" />
<Input.Search placeholder="搜索" onSearch={(value) => console.log(value)} />
<Input prefix={<UserOutlined />} placeholder="用户名" />
```

**交互说明：**
- Input.Password 支持密码显示/隐藏切换
- Input.TextArea 支持自适应高度
- Input.Search 支持搜索回调


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 表单中的文本输入
- 搜索框、密码输入、备注录入

**不适用场景：**
- 数字输入（使用 InputNumber）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | string | — | 输入框值 |
| placeholder | string | — | 占位符 |
| size | 'large' \| 'middle' \| 'small' | 'middle' | 输入框尺寸 |
| prefix | ReactNode | — | 前缀图标 |
| suffix | ReactNode | — | 后缀图标 |
| disabled | boolean | false | 禁用状态 |
| maxLength | number | — | 最大长度 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (e) => void | 输入内容变化时触发 |
| onPressEnter | (e) => void | 按下回车时触发 |
