# AutoComplete

**中文名称：** 自动完成
**英文名称：** AutoComplete
**所属分类：** 数据录入
**一句话简介：** 输入框自动完成功能。

---

## 何时使用

- 需要一个输入框而不是选择器。
- 需要输入建议/辅助提示。

和 Select 的区别是：

- AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助**输入**。
- Select 是在限定的可选项中进行选择，关键词是**选择**。

---

## 代码演示

### 基本使用

通过 `options` 配置建议列表，输入时自动匹配。

```tsx
<AutoComplete
  style={{ width: 280 }}
  options={[
    { value: '朱女士' },
    { value: '朱依' },
    { value: '朱女士-深圳福田' },
  ]}
  placeholder="搜索客户"
/>
```

### 自定义输入框

可搭配 `Input.Search` 形成搜索建议场景。

```tsx
<AutoComplete
  options={[
    { value: '资产配置' },
    { value: '资产回流' },
    { value: '资产检视' },
  ]}
>
  <Input.Search style={{ width: 320 }} placeholder="输入经营主题" />
</AutoComplete>
```

### 分组候选项

适合将客户、机构、经理等结果分类呈现。

```tsx
<AutoComplete
  style={{ width: 320 }}
  placeholder="搜索协同对象"
  options={[
    {
      label: '客户经理',
      options: [{ value: '仲维鲁' }, { value: '陈晨' }],
    },
    {
      label: '财富顾问',
      options: [{ value: '李雯' }],
    },
  ]}
/>
```

---

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean \| { clearIcon?: ReactNode } | false | 5.8.0: 支持对象形式 |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | boolean | false |  |
| children | 自定义输入框 | HTMLInputElement \| HTMLTextAreaElement \| React.ReactElement\<InputProps\> | \<Input /\> |  |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | true |  |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - |  |
| defaultValue | 指定默认选中的条目 | string | - |  |
| disabled | 是否禁用 | boolean | false |  |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上 | function(triggerNode) | () => document.body |  |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | - |  |
| open | 是否展开下拉菜单 | boolean | - |  |
| options | 数据化配置选项内容 | { label, value }[] | - |  |
| placeholder | 输入框提示 | string | - |  |
| popupMatchSelectWidth | 下拉菜单和选择器同宽 | boolean \| number | true |  |
| popupRender | 自定义下拉框内容 | (originNode: ReactNode) => ReactNode | - |  |
| showSearch | 搜索配置 | true \| Object | true |  |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| size | 控件大小 | 'large' \| 'medium' \| 'small' | - |  |
| value | 指定当前选中的条目 | string | - |  |
| variant | 形态变体 | 'outlined' \| 'borderless' \| 'filled' \| 'underlined' | 'outlined' | 5.13.0 |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | 4.1.0 |
| onBlur | 失去焦点时的回调 | function() | - |  |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | - |  |
| onClear | 清除内容时的回调 | function | - | 4.6.0 |
| onFocus | 获得焦点时的回调 | function() | - |  |
| onInputKeyDown | 按键按下时回调 | (event: KeyboardEvent) => void | - |  |
| onOpenChange | 展开下拉菜单的回调 | (open: boolean) => void | - |  |
| onPopupScroll | 下拉列表滚动时的回调 | (event: UIEvent) => void | - |  |
| onSearch | 搜索补全项的时候调用 | function(value) | - |  |
| onSelect | 被选中时调用，参数为选中项的 value 值 | function(value, option) | - |  |

---

## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。
