import { ReactNode } from "react";
import styles from "./Card.module.css";

type CardProps = {
  width?: number;
  children?: ReactNode;
};
export const Card = ({ width = 300, children }: CardProps) => {
  return (
    <div style={{ width: width }} className={styles.card}>
      {children}
    </div>
  );
};

type CardHeadProps = {
  children?: ReactNode;
  justify?: "justifyCenter" | "justifyBetween";
};
export const CardHead = ({
  children,
  justify = "justifyCenter",
}: CardHeadProps) => {
  return (
    <div className={`${styles.cardHead} ${styles[justify]}`}>{children}</div>
  );
};

export const CardBody = ({ children }: CardProps) => {
  return <div className={styles.cardBody}>{children}</div>;
};

type RowCardProps = {
  children?: ReactNode;
};
export const RowCard = ({ children }: RowCardProps) => {
  return <div className={styles.rowCard}>{children}</div>;
};

type ColCardProps = {
  padding?: "small" | "medium" | "large";
  children?: ReactNode;
};
export const ColCard = ({ padding = "small", children }: ColCardProps) => {
  return (
    <div className={`${styles.colCard} ${styles[padding]}`}>{children}</div>
  );
};
