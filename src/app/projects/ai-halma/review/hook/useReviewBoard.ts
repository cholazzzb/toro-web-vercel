import { useRef, useState } from 'react';

import {
  Board,
  Move,
  PlayerIdx,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { initialBoard } from 'src/domains/projects/ai-halma/gameSetting';
import { Notations } from '../../hook/useGameResult';

type CurrentMove = {
  moveNumber: number;
  playerIdx: PlayerIdx;
};

const initCurrentMove: CurrentMove = {
  moveNumber: 0,
  playerIdx: 2,
};

export function useReviewBoard(params: { notations: Notations }) {
  const [reviewBoard, setReviewBoard] = useState(initialBoard.twoPlayer);

  const [currentMove, setCurrentMove] = useState(initCurrentMove);
  const updateCurrentMove = (curMove: CurrentMove) => {
    setCurrentMove(curMove);
  };

  const moveBoardMap = useRef<Record<MovePieceKey, Board>>({}).current;

  const onClickNextMove = () => {
    const nextCurrentMove: CurrentMove = {
      moveNumber:
        currentMove.playerIdx === 1
          ? currentMove.moveNumber
          : currentMove.moveNumber + 1,
      playerIdx: currentMove.playerIdx === 1 ? 2 : 1,
    };
    const key = createMovePieceKey({
      moveNumber: nextCurrentMove.moveNumber,
      playerIdx: nextCurrentMove.playerIdx,
    });

    const nextBoard = moveBoardMap[key];

    if (nextBoard) {
      setReviewBoard(nextBoard);
    } else {
      const nextBoard = getBoardAfterMove({
        board: reviewBoard,
        move: params.notations[nextCurrentMove.moveNumber - 1][
          nextCurrentMove.playerIdx
        ]!,
      });
      moveBoardMap[key] = nextBoard;
      setReviewBoard(nextBoard);
    }

    setCurrentMove(nextCurrentMove);
  };

  const onClickLastMove = () => {};

  const onClickPrevMove = () => {
    const prevCurrentMove: CurrentMove = {
      moveNumber:
        currentMove.playerIdx === 2
          ? currentMove.moveNumber
          : currentMove.moveNumber - 1,
      playerIdx: currentMove.playerIdx === 1 ? 2 : 1,
    };
    const key = createMovePieceKey({
      moveNumber: prevCurrentMove.moveNumber,
      playerIdx: prevCurrentMove.playerIdx,
    });
    const nextBoard = moveBoardMap[key];
    if (nextBoard) {
      setReviewBoard(nextBoard);
    } else {
      setReviewBoard(initialBoard.twoPlayer);
    }
    setCurrentMove(prevCurrentMove);
  };

  const onClickFirstMove = () => {
    setReviewBoard(initialBoard.twoPlayer);
    updateCurrentMove(initCurrentMove);
  };

  return {
    board: reviewBoard,
    currentMove,
    updateCurrentMove,
    handler: {
      onClickNextMove,
      onClickLastMove,
      onClickPrevMove,
      onClickFirstMove,
    },
  };
}

type MovePieceKey = string; // "moveNumber-playerIdx"
function createMovePieceKey(params: { moveNumber: number; playerIdx: number }) {
  return `${params.moveNumber}-${params.playerIdx}`;
}

function getBoardAfterMove(params: { board: Board; move: Move }) {
  const { board, move } = params;
  const newBoard = board.map((rows) => rows.map((col) => col));
  const piece = newBoard[move.startPosition.y][move.startPosition.x];
  newBoard[move.endPosition.y][move.endPosition.x] = piece;
  newBoard[move.startPosition.y][move.startPosition.x] = 0;
  return newBoard;
}
