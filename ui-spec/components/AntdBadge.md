# Badge

**中文名称：** 徽标数
**英文名称：** Badge
**所属分类：** 数据展示
**一句话简介：** 图标右上角的圆形徽标数字，用于提示未读数量。

---

## 组件用法

**核心功能：** 徽标组件，在元素右上角显示数字、红点或自定义内容，常用于未读消息、待办提醒。

**基础用法示例：**
```tsx
<Badge count={5}>
  <Avatar shape="square" icon={<NotificationOutlined />} />
</Badge>
<Badge count={99} overflowCount={99} />
<Badge dot>通知</Badge>
<Badge status="success" text="已达标" />
```

**交互说明：**
- `count` 显示数字，超出 overflowCount 显示为 N+
- `dot` 仅显示红点
- `status` 使用状态色圆点


## 字体说明

- 正文说明、标签、操作按钮和常规辅助信息默认使用 14px。
- 核心数字、统计值和标题按组件语义单独定义字号，不与正文混用。

---

## 使用场景

**适用场景：**
- 未读消息、待办任务的数量提示
- 状态标识（在线/离线/达标）

**不适用场景：**
- 数值指标展示（使用 Statistic）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| count | number \| ReactNode | — | 展示的数字 |
| overflowCount | number | 99 | 封顶数值 |
| dot | boolean | false | 红点模式 |
| status | 'success' \| 'error' \| 'default' \| 'processing' \| 'warning' | — | 状态点 |
| text | ReactNode | — | 状态文案 |
| size | 'default' \| 'small' | 'default' | 尺寸 |

### Events

该组件为纯展示型组件，无事件回调。
