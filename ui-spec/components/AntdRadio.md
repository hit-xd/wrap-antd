# Radio

**中文名称：** 单选框
**英文名称：** Radio
**所属分类：** 数据录入
**一句话简介：** 同一组内互斥选择，用户只能选择一个选项，选中后无法取消。

---

## 何时使用

- 需要在**互斥**的选项中选择一个值时。
- 表单中的单项选择，如性别、优先级、联系方式。
- 与 Checkbox 的区别：Radio 组内只能选中 1 项且不可取消（只能切换到其他选项），Checkbox 支持多选和取消。

---

## 组件规范

### 基础尺寸与配色

| 属性 | 规范值 |
|------|--------|
| 控件尺寸 | 20×20px（圆形，与 Checkbox 方形尺寸保持一致） |
| 品牌选中色 | #C5A267（招行品牌金色，用于选中填充和悬停描边） |
| 未选中背景 | #FFFFFF（白色） |
| 未选中描边 | #D1D5DB（浅灰色） |
| 失效色 | #D1D5DB（浅灰色，含背景/描边/文本） |
| 文本间距 | 控件与右侧文本间距 8px（遵循 4px 基数规范） |
| 对齐规则 | 控件与文本水平居中对齐，同一组选项控件保持垂直线对齐 |

### 状态对照表

| 状态类型 | 视觉特征 | 交互/适用规则 |
|----------|----------|--------------|
| **未选中项** | 白色背景，浅灰色描边的空心圆，无填充、无图标 | 可点击，点击后切换为选中状态 |
| **未选悬停项** | 白色背景，招行品牌金色描边的空心圆，无填充 | 仅鼠标悬浮时触发，非失效状态支持 |
| **未选失效项** | 浅灰色背景+浅灰色描边的空心圆，整体降低透明度 | 不可点击，无交互反馈，文本同步置灰 |
| **选中项** | 招行品牌金色填充+同色描边的实心圆，无额外图标 | 组内唯一选中状态，不可取消，只能切换到其他选项 |
| **选中失效项** | 浅灰色填充+浅灰色描边的实心圆，整体降低透明度 | 已选中但不可交互，文本同步置灰 |

---

## 组件用法

**核心功能：** 单选框组件，用于在一组互斥选项中选择一个值，支持 Radio.Group 组合。

**基础用法示例：**
```tsx
<Radio>选项</Radio>
<Radio.Group defaultValue="a">
  <Radio value="a">私行客户</Radio>
  <Radio value="b">钻石客户</Radio>
  <Radio value="c">金葵花客户</Radio>
</Radio.Group>
<Radio.Group optionType="button">
  <Radio value="a">日</Radio>
  <Radio value="b">周</Radio>
  <Radio value="c">月</Radio>
</Radio.Group>
```

**交互说明：**
- Radio.Group 自动管理选中态
- `optionType="button"` 切换为按钮样式
- 同一组内只能选中 1 项，选中后无法取消，只能切换到其他选项
- 选中态为金色实心圆 #C5A267
- 失效状态下控件与文本同步降低透明度

---

## 使用场景

**适用场景：**
- 表单中的单项选择
- 筛选条件的互斥切换
- 优先级、等级、联系方式等二选一/多选一场景

**不适用场景：**
- 多项选择（使用 Checkbox）

---

## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## API 文档

### Radio Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| checked | boolean | false | 指定当前是否选中 |
| defaultChecked | boolean | false | 初始是否选中 |
| disabled | boolean | false | 禁用状态 |
| value | any | — | 选项值（Group 内使用） |
| autoFocus | boolean | false | 自动获取焦点 |
| onChange | (e: RadioChangeEvent) => void | — | 选中状态变化时触发 |

### Radio.Group Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| options | string[] \| Option[] | [] | 以配置形式设置子元素 |
| optionType | 'default' \| 'button' | 'default' | 样式类型 |
| buttonStyle | 'outline' \| 'solid' | 'outline' | RadioButton 的风格样式 |
| value | any | — | 用于设置当前选中的值 |
| defaultValue | any | — | 默认选中的值 |
| disabled | boolean | false | 禁用全部选项 |
| size | 'large' \| 'medium' \| 'small' | — | 控件大小 |
| onChange | (e: RadioChangeEvent) => void | — | 选中状态变化时触发 |
