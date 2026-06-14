# Cascader

**中文名称：** 级联选择
**英文名称：** Cascader
**所属分类：** 数据录入
**一句话简介：** 级联选择框，常用于机构、区域、层级关系选择。

---

## 组件用法

**核心功能：** 级联选择组件，适用于多层级数据结构的选择，如区域选择、机构层级等。

**基础用法示例：**
```tsx
<Cascader
  options={[
    { value: 'guangdong', label: '广东分行', children: [
      { value: 'shenzhen', label: '深圳分行', children: [
        { value: 'futian', label: '福田私行中心' },
      ]},
    ]},
  ]}
  placeholder="请选择机构"
/>
```

**交互说明：**
- 支持异步加载子级（loadData）
- 支持搜索过滤


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 机构树/组织架构选择
- 地区层级选择

**不适用场景：**
- 简单下拉选择（使用 Select）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| options | Option[] | [] | 级联数据选项 |
| placeholder | string | — | 占位符 |
| allowClear | boolean | true | 允许清除 |
| changeOnSelect | boolean | false | 选择时触发变化 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (value, options) => void | 选项变化时触发 |
