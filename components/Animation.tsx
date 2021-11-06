import styles from "./Animation.module.css";

type BlinkProps = {
  children: React.ReactNode;
};
export const Blink = ({ children }: BlinkProps) => {
  return <div className={styles.blink}>{children}</div>;
};
