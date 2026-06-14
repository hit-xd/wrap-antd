# Upload

**中文名称：** 上传
**英文名称：** Upload
**所属分类：** 数据录入
**一句话简介：** 文件选择上传和拖拽上传控件。

---

## 组件用法

**核心功能：** 文件上传组件，支持点击上传、拖拽上传、多文件上传、图片预览和自定义上传。

**基础用法示例：**
```tsx
<Upload action="/upload" listType="text">
  <Button icon={<UploadOutlined />}>上传文件</Button>
</Upload>
<Upload.Dragger action="/upload">
  <p>拖拽文件到此区域上传</p>
</Upload.Dragger>
<Upload listType="picture-card">
  <div><PlusOutlined /><br />上传图片</div>
</Upload>
```

**交互说明：**
- `listType` 控制文件列表展示样式
- `beforeUpload` 上传前校验
- 支持拖拽上传区域


## 字体说明

- 字段标签、输入值、下拉选项、日期值、单选/多选项与操作按钮默认使用 14px。
- 占位提示、校验反馈或补充说明如有单独字号要求，按 Typography 规范执行。

---

## 使用场景

**适用场景：**
- 资料上传、证件影像上传
- 图片附件上传

**不适用场景：**
- 仅展示文件列表（使用 List）

---

## API 文档

### Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| action | string | — | 上传地址 |
| accept | string | — | 接受文件类型 |
| multiple | boolean | false | 多文件上传 |
| listType | 'text' \| 'picture' \| 'picture-card' | 'text' | 列表样式 |
| maxCount | number | — | 最大文件数 |
| disabled | boolean | false | 禁用 |

### Events

| 事件名 | 回调参数 | 触发时机 |
|--------|----------|----------|
| onChange | (info) => void | 上传状态变化时触发 |
| onRemove | (file) => boolean | 移除文件时触发 |
