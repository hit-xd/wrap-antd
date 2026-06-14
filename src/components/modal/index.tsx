import './styles.css';

import { Modal as AntdModal } from 'antd';
import type { ModalProps as AntdModalProps } from 'antd';

export type ModalProps = AntdModalProps;

export const Modal = Object.assign(
  function Modal({ centered = true, ...props }: ModalProps) {
    return <AntdModal centered={centered} {...props} />;
  },
  {
    ...AntdModal,
    confirm: AntdModal.confirm,
    error: AntdModal.error,
    info: AntdModal.info,
    success: AntdModal.success,
    warning: AntdModal.warning,
    useModal: AntdModal.useModal,
    destroyAll: AntdModal.destroyAll,
    config: AntdModal.config,
  },
);
