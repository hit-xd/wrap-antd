---
title: ConfigProvider
order: 1
---

# ConfigProvider

包装 Ant Design v5 的 ConfigProvider，默认注入企业级主题 token，其他能力与 antd 保持兼容。

## 组件类型

- 默认企业主题
- 覆盖主题 token
- 组件级主题
- 表单文案
- 类型导入

## 基础用法

```tsx
import { ConfigProvider, Button } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Button type="primary">提交</Button>
  </ConfigProvider>
);
```

## 覆盖主题

```tsx
import { ConfigProvider, Button } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <ConfigProvider theme={{ token: { colorPrimary: '#0052d9' } }}>
      <Button type="primary">品牌按钮</Button>
    </ConfigProvider>
  </ConfigProvider>
);
```

## 组件级主题

```tsx
import { ConfigProvider, Button, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <ConfigProvider theme={{ components: { Button: { borderRadius: 8 } } }}>
      <Space>
        <Button type="primary">主按钮</Button>
        <Button>默认按钮</Button>
      </Space>
    </ConfigProvider>
  </ConfigProvider>
);
```

## 表单文案

```tsx
import { ConfigProvider, Button, Form, Input } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <ConfigProvider form={{ validateMessages: { required: '请填写${label}' } }}>
      <Form layout="inline">
        <Form.Item label="客户名称" name="name" rules={[{ required: true }]}>
          <Input placeholder="请输入" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form>
    </ConfigProvider>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入。

```tsx | pure
import type { ConfigProviderProps } from 'privatebank-design';
```

## API 与类型

组件 Props 可直接从 `privatebank-design` 导入：

```tsx | pure
import type { ConfigProviderProps } from 'privatebank-design';
```

业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
