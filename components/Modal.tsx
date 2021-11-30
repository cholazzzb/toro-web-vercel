import { ReactNode } from "react";
import { IconButton } from "./Button";
import styles from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
};
export const Modal = ({ children }: ModalProps) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

type ModalHeaderProps = {
  children: ReactNode;
  onClose: () => void;
};
export const ModalHeader = ({ children, onClose }: ModalHeaderProps) => {
  return (
    <div className={styles.modalHeader}>
      {children}
      <IconButton onClick={onClose} iconSrc="/icons/close.svg" />
    </div>
  );
};

type ModalBodyProps = {
  children: ReactNode;
};
export const ModalBody = ({ children }: ModalBodyProps) => {
  return <div className={styles.modalBody}>{children}</div>;
};
