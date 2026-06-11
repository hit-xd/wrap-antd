---
title: Feedback 反馈
order: 50
---

# Feedback 反馈

反馈类组件用于表达结果、风险和确认动作。功能色来自 `global-spec/color.md`。

## Alert 与 Modal

```tsx
import { Alert, Button, ConfigProvider, Modal, Space } from 'wrap-antd';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <ConfigProvider>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert type="success" message="保存成功" showIcon />
        <Alert type="warning" message="当前配置将在下次发布后生效" showIcon />
        <Button type="primary" onClick={() => setOpen(true)}>
          打开确认弹窗
        </Button>
        <Modal
          title="确认发布"
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
        >
          发布后配置将同步到生产环境。
        </Modal>
      </Space>
    </ConfigProvider>
  );
};
```

## 使用建议

普通提示使用 `Alert`，阻断式确认使用 `Modal`。高风险操作必须给出明确后果说明。
