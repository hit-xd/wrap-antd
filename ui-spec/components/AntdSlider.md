# Slider

**中文名称：** 滑动输入条
**英文名称：** Slider
**所属分类：** 数据录入
**一句话简介：** 滑动型输入器，展示当前值和可选范围。

---

## 组件用法

**核心功能：** 滑动输入组件，通过拖动滑块在指定范围内选择值，支持单滑块和范围双滑块。

**基础用法示例：**
```tsx
<Slider defaultValue={50} min={0} max={100} />
<Slider range defaultValue={[20, 60]} />
<Slider marks={{ 0: '低', 50: '中', 100: '高' }} />
<Slider step={10} defaultValue={30} />
```

**交互说明：**
- `marks` 显示刻度标记
- `range` 启用双滑块范围选择


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 数值范围的直观调节
- 配置项中的连续值选择

**不适用场景：**
- 精确数值输入（使用 InputNumber）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| value | number \| [number, number] | — | 当前值 |
| min | number | 0 | 最小值 |
| max | number | 100 | 最大值 |
| step | number | 1 | 步进值 |
| marks | Record<num, ReactNode> | — | 刻度标记 |
| range | boolean | false | 双滑块模式 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (value) => void | 值变化时触发 |
| onAfterChange | (value) => void | 滑动结束后触发 |
