import { useState } from 'react';

import { initialBoard } from 'src/domains/projects/ai-halma/gameSetting';
import {
  Notation,
  getLastNotation,
  getNextNotation,
  getPrevNotation,
  initNotation,
} from '../../domain/notation';
import { ResultNotations, getMoveByNotation } from '../../hook/useGameResult';
import { getBoardAfterMove, useMoveBoardMap } from './useMoveBoardMap';
import { match } from 'src/utils/fp';

export function useReviewBoard(params: { resultNotation: ResultNotations }) {
  const [reviewBoard, setReviewBoard] = useState(initialBoard.twoPlayer);

  const [notation, setNotation] = useState(initNotation);
  const updateNotation = (notation: Notation) => {
    setNotation(notation);
  };

  const { getBoardByNotation, saveBoardByNotation, calculateLastBoard } =
    useMoveBoardMap(params);

  const onClickNotation = (notation: Notation) => {
    const board = getBoardByNotation(notation);

    match(board, {
      Some(val) {
        setReviewBoard(val);
      },
      None() {
        calculateLastBoard();
        const board = getBoardByNotation(notation)!;
        setReviewBoard(board);
      },
    });

    updateNotation(notation);
  };

  const onClickNextMove = () => {
    const nextNotation = getNextNotation(notation);

    const move = getMoveByNotation(params.resultNotation, nextNotation);
    if (!move) {
      return;
    }

    const nextBoard = getBoardByNotation(nextNotation);
    if (nextBoard) {
      setReviewBoard(nextBoard);
    } else {
      const nextBoard = getBoardAfterMove({
        board: reviewBoard,
        move: move,
      });
      saveBoardByNotation(nextNotation, nextBoard);
      setReviewBoard(nextBoard);
    }

    updateNotation(nextNotation);
  };

  const onClickLastMove = () => {
    const lastNotation = getLastNotation(params.resultNotation);

    const nextBoard = getBoardByNotation(lastNotation);
    if (nextBoard) {
      setReviewBoard(nextBoard);
    } else {
      const board = calculateLastBoard();
      setReviewBoard(board);
    }

    updateNotation(lastNotation);
  };

  const onClickPrevMove = () => {
    const prevNotation = getPrevNotation(notation);

    const nextBoard = getBoardByNotation(prevNotation);
    if (nextBoard) {
      setReviewBoard(nextBoard);
    } else {
      setReviewBoard(initialBoard.twoPlayer);
    }

    updateNotation(prevNotation);
  };

  const onClickFirstMove = () => {
    setReviewBoard(initialBoard.twoPlayer);
    updateNotation(initNotation);
  };

  return {
    board: reviewBoard,
    notation,
    handler: {
      onClickNotation,
      onClickNextMove,
      onClickLastMove,
      onClickPrevMove,
      onClickFirstMove,
    },
  };
}
