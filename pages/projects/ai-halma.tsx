import { Layout } from "components/Layout";
import Board from "components/projects/ai-halma/Board";
import { useState } from "react";

const initialBoard: number[][] = [
  [1, 1, 1, 1, 0, 0, 3, 3, 3, 3],
  [1, 1, 1, 0, 0, 0, 0, 3, 3, 3],
  [1, 1, 0, 0, 0, 0, 0, 0, 3, 3],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [4, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [4, 4, 0, 0, 0, 0, 0, 0, 2, 2],
  [4, 4, 4, 0, 0, 0, 0, 2, 2, 2],
  [4, 4, 4, 4, 0, 0, 2, 2, 2, 2],
];

const AIHalma = () => {
  const [board, setBoard] = useState<number[][]>(initialBoard);

  const movePiece = (initPos: number[], newPos: number[]) => {
    setBoard((board) => {
      const newBoard = [...board];
      const piece = newBoard[initPos[0]][initPos[1]];
      newBoard[newPos[0]][newPos[1]] = piece;
      newBoard[initPos[0]][initPos[1]] = 0;
      return newBoard;
    });
  };

  return (
    <Layout>
      <Board boardData={board}></Board>
      <button
        onClick={() => {
          movePiece([0, 0], [5, 5]);
        }}
      >MOVE</button>
    </Layout>
  );
};

export default AIHalma;
