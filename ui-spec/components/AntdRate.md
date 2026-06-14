# Rate

**中文名称：** 评分
**英文名称：** Rate
**所属分类：** 数据录入
**一句话简介：** 评分组件，用于评价和打分。

---

## 组件用法

**核心功能：** 评分组件，支持星级评分、半星、自定义字符和只读模式。

**基础用法示例：**
```tsx
<Rate defaultValue={3} />
<Rate allowHalf defaultValue={3.5} />
<Rate disabled value={4} />
<Rate character={<HeartOutlined />} />
```

**交互说明：**
- `allowHalf` 允许半星
- `disabled` 只读展示模式


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 客户评价、服务评分
- 产品满意度反馈

**不适用场景：**
- 数值等级展示（使用 Tag 或 Badge）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | number | — | 当前星数 |
| count | number | 5 | 星星总数 |
| allowHalf | boolean | false | 允许半星 |
| disabled | boolean | false | 只读模式 |
| character | ReactNode | `<StarFilled />` | 自定义字符 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (value) => void | 评分变化时触发 |
