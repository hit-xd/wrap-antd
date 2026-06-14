// CSS 入口 — reset.css → css-variables.css，tsup 自动内联到 dist/index.css
import './reset.css';

// antd 全部导出（Typography, Row, Col, Flex, App, Grid 等）
export * from 'antd';

// B 类 wrapper 覆盖（附带组件级 CSS）
export { Modal } from './components/modal';
export type { ModalProps } from './components/modal';
export { Drawer } from './components/drawer';
export type { DrawerProps } from './components/drawer';
export { Table } from './components/table';
export type { TableProps } from './components/table';
export { Menu } from './components/menu';
export type { MenuProps } from './components/menu';
export { Tabs } from './components/tabs';
export type { TabsProps } from './components/tabs';
export { Alert } from './components/alert';
export type { AlertProps } from './components/alert';
export { Pagination } from './components/pagination';
export type { PaginationProps } from './components/pagination';
export { Popover } from './components/popover';
export type { PopoverProps } from './components/popover';
export { Collapse } from './components/collapse';
export type { CollapseProps } from './components/collapse';
export { Descriptions } from './components/descriptions';
export type { DescriptionsProps } from './components/descriptions';
export { Upload } from './components/upload';
export type { UploadProps } from './components/upload';
export { Breadcrumb } from './components/breadcrumb';
export type { BreadcrumbProps } from './components/breadcrumb';

// ConfigProvider
export { ConfigProvider } from './components/config-provider';
export type { ConfigProviderProps } from './components/config-provider';

// 业务组件
export * from './business';
