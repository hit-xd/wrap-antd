# Transfer

**中文名称：** 穿梭框
**英文名称：** Transfer
**所属分类：** 数据录入
**一句话简介：** 双栏穿梭选择框，可将选项从一侧移动到另一侧。

---

## 组件用法

**核心功能：** 穿梭框组件，左右双栏布局，支持将选项列表从源数据移动到目标数据，常用于权限分配和列表管理。

**基础用法示例：**
```tsx
<Transfer
  dataSource={[
    { key: '1', title: '客户群组 1' },
    { key: '2', title: '客户群组 2' },
  ]}
  targetKeys={['2']}
  render={(item) => item.title}
  onChange={(nextTargetKeys) => console.log(nextTargetKeys)}
/>
```

**交互说明：**
- 左栏为源数据，右栏为目标数据
- 支持搜索过滤和全选


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 权限分配、角色配置
- 客户分组管理、批量指派

**不适用场景：**
- 简单选择（使用 Select 或 Checkbox）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| dataSource | TransferItem[] | [] | 源数据 |
| targetKeys | string[] | [] | 目标数据 key 列表 |
| render | (item) => ReactNode | — | 渲染函数 |
| showSearch | boolean | false | 启搜索 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (targetKeys, direction, moveKeys) => void | 选项转移时触发 |
