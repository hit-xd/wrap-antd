---
title: Form 表单
order: 101
---

# Form 表单

用于承载查询、编辑、审批等业务录入任务，API 与 Ant Design v5 保持兼容。

`Form` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`数据录入/Form.dev.md`。

## 组件类型

- 基础表单
- 行内查询
- 表单校验
- 禁用状态
- 表单布局

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Button, Form, Input, Select, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Form layout="vertical" style={{ maxWidth: 420 }}>
      <Form.Item label="客户名称" name="name" rules={[{ required: true }]}>
        <Input placeholder="请输入客户名称" />
      </Form.Item>
      <Form.Item label="客户类型" name="type">
        <Select
          options={[
            { label: '个人客户', value: 'personal' },
            { label: '机构客户', value: 'org' },
          ]}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form>
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Button, Form, Input, Select, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Form layout="inline">
      <Form.Item label="客户名称">
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="状态">
        <Select
          style={{ width: 160 }}
          options={[
            { label: '全部', value: 'all' },
            { label: '处理中', value: 'processing' },
          ]}
        />
      </Form.Item>
      <Space>
        <Button type="primary">查询</Button>
        <Button>重置</Button>
      </Space>
    </Form>
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import {
  ConfigProvider,
  Button,
  Form,
  Input,
  Select,
  Space,
  Card,
  Typography,
} from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Form layout="vertical" style={{ maxWidth: 420 }}>
          <Form.Item label="客户名称" name="name" rules={[{ required: true }]}>
            <Input placeholder="请输入客户名称" />
          </Form.Item>
          <Form.Item label="客户类型" name="type">
            <Select
              options={[
                { label: '个人客户', value: 'personal' },
                { label: '机构客户', value: 'org' },
              ]}
            />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form>
        <Typography.Text type="secondary">用于承载客户、审批、资产等业务信息。</Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 紧凑布局

在较窄容器内使用组件，验证密集页面和弹窗内容区的表现。

```tsx
import { ConfigProvider, Button, Form, Input, Select, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Form layout="inline">
        <Form.Item label="客户名称">
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item label="状态">
          <Select
            style={{ width: 160 }}
            options={[
              { label: '全部', value: 'all' },
              { label: '处理中', value: 'processing' },
            ]}
          />
        </Form.Item>
        <Space>
          <Button type="primary">查询</Button>
          <Button>重置</Button>
        </Space>
      </Form>
    </Card>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { FormProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { FormProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
