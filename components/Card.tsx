import { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  children?: ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};

export const CardHead = ({ children }: CardProps) => {
  return <div className={styles.cardHead}>{children}</div>;
};

export const CardBody = ({ children }: CardProps) => {
  return <div className={styles.cardBody}>{children}</div>;
};
