# Switch

**中文名称：** 开关
**英文名称：** Switch
**所属分类：** 数据录入
**一句话简介：** 开关选择器，表示开启/关闭状态。

---

## 组件用法

**核心功能：** 开关组件，用于切换开启/关闭两种状态，常用于表单中的开关控制。

**基础用法示例：**
```tsx
<Switch defaultChecked />
<Switch checkedChildren="开" unCheckedChildren="关" />
<Switch loading />
<Switch disabled />
```

**交互说明：**
- `checkedChildren` / `unCheckedChildren` 自定义开关文字
- `loading` 加载中状态


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 表单中的开关控制
- 启停状态的切换

**不适用场景：**
- 需要明确选中值的场景（使用 Checkbox）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| checked | boolean | false | 开关状态 |
| defaultChecked | boolean | false | 默认状态 |
| disabled | boolean | false | 禁用状态 |
| loading | boolean | false | 加载中 |
| size | 'default' \| 'small' | 'default' | 尺寸 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (checked) => void | 开关状态变化时触发 |
