import { useState } from 'react';

import { Board, Position } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { initialBoard } from 'src/domains/projects/ai-halma/gameSetting';

export function useBoard() {
  const [board, setBoard] = useState<Board>(initialBoard.twoPlayer);

  const movePiece = (params: {
    board: Board;
    initPos: Position;
    newPos: Position;
  }) => {
    const { board, initPos, newPos } = params;
    const newBoard = board.map((rows) => rows.map((col) => col));
    const piece = newBoard[initPos.y][initPos.x];
    newBoard[newPos.y][newPos.x] = piece;
    newBoard[initPos.y][initPos.x] = 0;
    setBoard(newBoard);
    return newBoard;
  };

  return { board, movePiece };
}
