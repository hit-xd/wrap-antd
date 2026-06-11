---
title: Form 表单
order: 20
---

# Form 表单

表单组件保持 antd 原 API。企业主题统一了控件高度、表单项间距、文字层级和边框颜色。

## 基础表单

```tsx
import { Button, ConfigProvider, Form, Input, Select, Space } from 'wrap-antd';

export default () => (
  <ConfigProvider>
    <Form layout="vertical" style={{ maxWidth: 420 }}>
      <Form.Item
        label="应用名称"
        name="name"
        rules={[{ required: true, message: '请输入应用名称' }]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="业务类型" name="type">
        <Select
          placeholder="请选择"
          options={[
            { label: '审批流', value: 'approval' },
            { label: '数据看板', value: 'dashboard' },
          ]}
        />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary">提交</Button>
          <Button>取消</Button>
        </Space>
      </Form.Item>
    </Form>
  </ConfigProvider>
);
```

## 使用建议

复杂表单优先使用 `layout="vertical"` 保持可扫描性。错误提示使用 `rules`，不要在字段旁手写错误文本。
