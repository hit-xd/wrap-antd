# Segmented

**中文名称：** 分段控制器
**英文名称：** Segmented
**所属分类：** 数据展示
**一句话简介：** 分段控制器，展示多个选项并允许用户选择一项。

---

## 组件用法

**核心功能：** 分段控制器组件，类似 Radio.Button 组合，提供一组互斥的选项切换。

**基础用法示例：**
```tsx
<Segmented options={['日', '周', '月', '年']} onChange={(value) => console.log(value)} />
<Segmented options={[
  { label: '待处理', value: 'pending' },
  { label: '已处理', value: 'done' },
  { label: '全部', value: 'all' },
]} />
```

**交互说明：**
- 支持字符串和对象配置选项
- `block` 自适应宽度


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 时间段切换、视图切换
- 筛选条件的快速切换

**不适用场景：**
- 页面级标签导航（使用 Tabs）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| options | (string \| SegmentedOption)[] | [] | 选项列表 |
| value | string \| number | — | 当前值 |
| block | boolean | false | 自适应宽度 |
| disabled | boolean | false | 禁用 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (value) => void | 选项变化时触发 |
