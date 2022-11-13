import Square from "./Square";

import styles from "./Board.module.css";
import { Board } from "src/domains/projects/ai-halma/AIHalmaEntity";

type BoardGameProps = {
  boardData: Board;
};

const BoardGame = ({ boardData }: BoardGameProps) => {
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

export default BoardGame;
