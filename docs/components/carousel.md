---
title: Carousel 走马灯
order: 118
---

# Carousel 走马灯

用于轮播展示同级内容。

`Carousel` API 与 Ant Design v5 保持兼容，企业主题统一应用品牌色、文字层级、圆角和交互状态。规范来源：`样式规范/Carousel  走马灯样式.md`。

## 组件类型

- 基础轮播
- 自动播放
- 切换箭头
- 指示器位置

## 基础用法

最小可用示例，适合快速确认组件默认样式和主题效果。

```tsx
import { ConfigProvider, Carousel, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Carousel style={{ width: 420 }}>
      <div>
        <h3 style={{ padding: 48, background: '#f4f6f8' }}>资产配置</h3>
      </div>
      <div>
        <h3 style={{ padding: 48, background: '#edf4ff' }}>市场观点</h3>
      </div>
    </Carousel>
  </ConfigProvider>
);
```

## 常用类型与状态

展示业务里最常见的类型、状态或组合形态。

```tsx
import { ConfigProvider, Carousel, Space } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Carousel autoplay dotPosition="bottom" style={{ width: 420 }}>
      <div>
        <h3 style={{ padding: 48, background: '#fffcf0' }}>重点产品</h3>
      </div>
      <div>
        <h3 style={{ padding: 48, background: '#ebfaf5' }}>客户活动</h3>
      </div>
    </Carousel>
  </ConfigProvider>
);
```

## 业务卡片场景

放入企业后台常见的信息卡片，检查与周边内容的间距和层级。

```tsx
import { ConfigProvider, Carousel, Space, Card, Typography } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card title="客户经营概览" style={{ maxWidth: 520 }}>
      <Space direction="vertical" size={16} style={{ width: '100%' }}>
        <Carousel style={{ width: 420 }}>
          <div>
            <h3 style={{ padding: 48, background: '#f4f6f8' }}>资产配置</h3>
          </div>
          <div>
            <h3 style={{ padding: 48, background: '#edf4ff' }}>市场观点</h3>
          </div>
        </Carousel>
        <Typography.Text type="secondary">用于承载客户、审批、资产等业务信息。</Typography.Text>
      </Space>
    </Card>
  </ConfigProvider>
);
```

## 紧凑布局

在较窄容器内使用组件，验证密集页面和弹窗内容区的表现。

```tsx
import { ConfigProvider, Carousel, Space, Card } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <Card size="small" title="紧凑信息区" style={{ width: 360 }}>
      <Carousel autoplay dotPosition="bottom" style={{ width: 420 }}>
        <div>
          <h3 style={{ padding: 48, background: '#fffcf0' }}>重点产品</h3>
        </div>
        <div>
          <h3 style={{ padding: 48, background: '#ebfaf5' }}>客户活动</h3>
        </div>
      </Carousel>
    </Card>
  </ConfigProvider>
);
```

## 列表内容区

在列表或详情内容区中使用组件，适合检查只读信息展示场景。

```tsx
import { ConfigProvider, Carousel, Space, List } from 'privatebank-design';

export default () => (
  <ConfigProvider>
    <List
      bordered
      dataSource={['客户信息', '资产信息']}
      renderItem={(item) => (
        <List.Item>
          <Space direction="vertical" style={{ width: '100%' }}>
            <strong>{item}</strong>
            <Carousel style={{ width: 420 }}>
              <div>
                <h3 style={{ padding: 48, background: '#f4f6f8' }}>资产配置</h3>
              </div>
              <div>
                <h3 style={{ padding: 48, background: '#edf4ff' }}>市场观点</h3>
              </div>
            </Carousel>
          </Space>
        </List.Item>
      )}
    />
  </ConfigProvider>
);
```

## 类型导入

组件 Props 类型可直接从包入口导入，方便业务代码保持 antd 兼容写法。

```tsx | pure
import type { CarouselProps } from 'privatebank-design';
```

## API 与类型

组件 Props 完全继承 antd，可直接从 `privatebank-design` 导入：

```tsx | pure
import type { CarouselProps } from 'privatebank-design';
```

详细 API 以 Ant Design v5 对应组件为准。业务代码应优先使用公开 Props，不依赖内部 DOM 结构。
