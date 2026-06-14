# Descriptions

**中文名称：** 描述列表
**英文名称：** Descriptions
**所属分类：** 数据展示
**一句话简介：** 成组展示多个只读字段。

---

## 组件用法

**核心功能：** 描述列表组件，将多个只读字段以表格形式展示，支持列数控制和标签值布局。

**基础用法示例：**
```tsx
<Descriptions title="客户信息" column={2} items={[
  { key: 'name', label: '客户姓名', children: '朱女士' },
  { key: 'phone', label: '手机号', children: '138****6688' },
  { key: 'level', label: '客户等级', children: '私行客户' },
  { key: 'manager', label: '客户经理', children: '仲维鲁' },
]} />
```

**交互说明：**
- `column` 控制每行展示字段数
- `layout="vertical"` 垂直布局


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 详情页的信息展示
- 客户资料、产品参数展示

**不适用场景：**
- 可编辑字段（使用 Form）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| title | ReactNode | — | 标题 |
| items | DescriptionsItem[] | [] | 描述项 |
| column | number | 3 | 每行列数 |
| layout | 'horizontal' \| 'vertical' | 'horizontal' | 布局方向 |
| bordered | boolean | false | 边框模式 |

### Events

该组件为纯展示型组件，无事件回调。
