---
title: Modal 对话框
order: 129
---

# Modal 对话框

用于需要用户确认或集中处理的阻断式任务。

`Modal` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`反馈/AntdModal.md`。

## 组件类型

- 基础对话框
- 确认对话框
- 异步关闭
- 自定义底部

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Modal, Button } from 'privatebank-design';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    {(() => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button type="primary" onClick={() => setOpen(true)}>
            打开对话框
          </Button>
          <Modal
            title="确认提交"
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
          >
            提交后将进入审批流程。
          </Modal>
        </>
      );
    })()}
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Modal, Button } from 'privatebank-design';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    <Button
      onClick={() => Modal.confirm({ title: '确认删除客户记录？', content: '删除后无法恢复。' })}
    >
      确认对话框
    </Button>
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Modal, Button, Card, Typography } from 'privatebank-design';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        {(() => {
          const [open, setOpen] = useState(false);
          return (
            <>
              <Button type="primary" onClick={() => setOpen(true)}>
                打开对话框
              </Button>
              <Modal
                title="确认提交"
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
              >
                提交后将进入审批流程。
              </Modal>
            </>
          );
        })()}
        <Typography.Text type="secondary">用于承载客户、审批、资产等业务信息。</Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 紧凑布局

在较窄容器内使用组件，验证密集页面和弹窗内容区的表现。

```tsx
import { ConfigProvider, Modal, Button, Card } from 'privatebank-design';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Button
        onClick={() => Modal.confirm({ title: '确认删除客户记录？', content: '删除后无法恢复。' })}
      >
        确认对话框
      </Button>
    </Card>
  </ConfigProvider>
);
```

## 流程反馈区

放入审批、提交、加载等流程反馈页面，验证信息层级。

```tsx
import { ConfigProvider, Modal, Button, Card } from 'privatebank-design';
import { useState } from 'react';

export default () => (
  <ConfigProvider>
    <Card title="流程处理结果" style={{ maxWidth: 560 }}>
      {(() => {
        const [open, setOpen] = useState(false);
        return (
          <>
            <Button type="primary" onClick={() => setOpen(true)}>
              打开对话框
            </Button>
            <Modal
              title="确认提交"
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
            >
              提交后将进入审批流程。
            </Modal>
          </>
        );
      })()}
    </Card>
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { ModalProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { ModalProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
