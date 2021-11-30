import { memo } from "react";
import styles from "./Square.module.css";

type SquareProps = {
  piece: number;
};

const Square = memo(({ piece }: SquareProps) => {
  const squareStyles = [
    styles.empty,
    styles.red,
    styles.yellow,
    styles.green,
    styles.blue,
  ];

  return (
    <div className={styles.square}>
      <span className={`${styles.piece} ${squareStyles[piece]}`}></span>
    </div>
  );
});

Square.displayName = "Square";

export default Square;
