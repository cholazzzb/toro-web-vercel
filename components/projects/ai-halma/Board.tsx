import Square from "./Square";

import styles from "./Board.module.css";

type BoardProps = {
  boardData: number[][];
};

const Board = ({ boardData }: BoardProps) => {
  return (
    <div className={styles.board}>
      {boardData.map((row, rowIdx) => (
        <div className={styles.row} key={rowIdx}>
          {row.map((col, colIdx) => (
            <div key={colIdx}>
              <Square piece={col}></Square>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
