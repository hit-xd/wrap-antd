---
title: DetailPageHeader 详情页头
order: 202
---

# DetailPageHeader 详情页头

用于详情页顶部区域，统一面包屑、标题、副标题、操作按钮和关键字段的排布。

## 组件类型

- 基础页头
- 带面包屑
- 带操作区
- 带描述字段
- 审批详情

## 基础页头

```tsx
import { ConfigProvider, DetailPageHeader } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <DetailPageHeader title="企业门户改版需求" subtitle="REQ-20260612-001" />
  </ConfigProvider>
);
```

## 带操作按钮

```tsx
import { ConfigProvider, DetailPageHeader } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <DetailPageHeader
      title="采购合同审批"
      subtitle="合同编号 CT-2026-0612"
      actions={[
        { key: 'download', label: '下载' },
        { key: 'reject', label: '驳回', danger: true },
        { key: 'approve', label: '通过', type: 'primary' },
      ]}
    />
  </ConfigProvider>
);
```

## 完整详情页头

```tsx
import { ConfigProvider, DetailPageHeader, Status } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <DetailPageHeader
      breadcrumb={[{ title: '项目管理' }, { title: '需求详情' }]}
      title="企业门户改版需求"
      subtitle="REQ-20260612-001"
      actions={[
        { key: 'cancel', label: '取消' },
        { key: 'submit', label: '提交审批', type: 'primary' },
      ]}
      descriptions={[
        { key: 'owner', label: '负责人', value: '张三' },
        { key: 'amount', label: '合同金额', value: '￥230,000' },
        { key: 'status', label: '当前状态', value: <Status type="processing" text="审批中" /> },
        { key: 'updatedAt', label: '更新时间', value: '2026-06-12 10:30' },
      ]}
    />
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入。

```tsx | pure
import type { DetailPageHeaderProps } from 'privatebank-design';
```

## API 与类型

组件 Props 可直接从 `privatebank-design` 导入：

```tsx | pure
import type { DetailPageHeaderProps } from 'privatebank-design';
```

业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
