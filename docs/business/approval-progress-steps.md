---
title: ApprovalProgressSteps 审批进度
order: 203
---

# ApprovalProgressSteps 审批进度

用于展示审批流程节点、审批意见、驳回原因和附件信息。

## 组件类型

- 基础流程
- 处理中
- 驳回节点
- 退回节点
- 附件信息

## 基础流程

```tsx
import { ConfigProvider, ApprovalProgressSteps } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <ApprovalProgressSteps
      steps={[
        {
          key: 'submit',
          title: '提交申请',
          description: '张三 2026-06-12 09:00',
          status: 'finished',
        },
        { key: 'review', title: '部门复核', description: '李四处理中', status: 'processing' },
        { key: 'done', title: '审批完成', status: 'waiting' },
      ]}
    />
  </ConfigProvider>
);
```

## 审批意见

```tsx
import { ConfigProvider, ApprovalProgressSteps } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <ApprovalProgressSteps
      steps={[
        {
          key: 'submit',
          title: '提交申请',
          description: '张三',
          status: 'finished',
          opinion: '资料完整，提交部门负责人复核。',
        },
        {
          key: 'review',
          title: '部门复核',
          description: '李四',
          status: 'processing',
          opinion: '正在核对合同金额和审批权限。',
        },
      ]}
    />
  </ConfigProvider>
);
```

## 驳回与附件

```tsx
import { ConfigProvider, ApprovalProgressSteps } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <ApprovalProgressSteps
      steps={[
        { key: 'submit', title: '提交申请', status: 'finished' },
        {
          key: 'reject',
          title: '风控复核',
          status: 'rejected',
          reason: '合同附件缺少盖章页，请补充后重新提交。',
          attachments: ['合同扫描件.pdf', '客户授权书.pdf'],
        },
      ]}
    />
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入。

```tsx | pure
import type { ApprovalProgressStepsProps } from 'privatebank-design';
```

## API 与类型

组件 Props 可直接从 `privatebank-design` 导入：

```tsx | pure
import type { ApprovalProgressStepsProps } from 'privatebank-design';
```

业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
