---
title: 规范解析报告
order: 120
---

# 规范解析报告

本页由 `pnpm spec:sync` 自动生成，用于检查新版 Markdown 规范解析结果。

## 已识别

- 规范文件：80 个
- 品牌色：0 项
- 数据色：0 项
- 渐变色：0 项
- 投影：0 项
- 圆角：0 项
- 间距：0 项
- 字体层级：0 项
- 图片比例：0 项
- 自动导出组件：42 个
- 独立组件文档：47 个
- CSS 覆盖：Modal、Drawer、Alert、Popconfirm、Popover、Collapse、Descriptions、Tabs、Pagination、Upload 等
- 业务组件：ErrorBlock、Status、DetailPageHeader、ApprovalProgressSteps

## 低置信度项

- 全局规范/color: 未找到新版规范文件。
- 全局规范/container: 未找到新版规范文件。
- 全局规范/space: 未找到新版规范文件。
- 全局规范/typography: 未找到新版规范文件。
- 全局规范/layout: 未找到新版规范文件。
- 全局规范/imageRatio: 未找到新版规范文件。
- 全局规范/button: 未找到新版规范文件。
- Color.style.md: 品牌色少于 10 项。
- Color.style.md: 数据色少于 10 项。
- Color.style.md: 渐变色少于 3 项。
- Container.style.md: 投影少于 4 项。
- Container.style.md: 圆角少于 5 项。
- AntdSpace.md: 间距体系少于 7 项。
- ImageRatio.style.md: 图片比例少于 5 项。
- Typography.style.md: 未识别字号/行高映射。

## 处理原则

- 能稳定映射到 Ant Design v5 token 的规则进入 `ThemeConfig`。
- antd token 无法表达的 DOM 级细节进入生成 CSS 覆盖。
- 非 antd 直接导出的业务规范通过业务组件承载。
