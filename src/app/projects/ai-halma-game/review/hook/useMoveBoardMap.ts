import { useRef } from 'react';

import { Board, Move } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { initialBoard } from 'src/domains/projects/ai-halma/gameSetting';
import { Option } from 'src/utils/fp';
import {
  Notation,
  NotationKey,
  createNotationKey,
  firstNotation,
  getLastNotation,
  getNextNotationKey,
  getPrevNotation,
  isNotationExist,
  notationKeyToNotation,
} from '../../domain/notation';
import { ResultNotations, getMoveByNotation } from '../../hook/useGameResult';

export function useMoveBoardMap(params: { resultNotation: ResultNotations }) {
  /**
   * @description Map of board resulting after a Move
   */
  const moveBoardMap = useRef<Record<NotationKey, Option<Board>>>({}).current;

  const getBoardByNotation = (notation: Notation): Option<Board> => {
    const notationKey = createNotationKey(notation);
    return moveBoardMap[notationKey];
  };

  const saveBoardByNotation = (notation: Notation, board: Board) => {
    const notationKey = createNotationKey(notation);
    moveBoardMap[notationKey] = board;
  };

  const calculateLastBoard = (): Board => {
    const lastNotation = getLastNotation(params.resultNotation);

    const sorted = Object.keys(moveBoardMap).sort((a, b) => a.localeCompare(b));

    for (
      let currentKey: NotationKey =
        sorted[sorted.length - 1] ?? createNotationKey(firstNotation);
      isNotationExist(currentKey, params.resultNotation);
      currentKey = getNextNotationKey(currentKey)!
    ) {
      const notation = notationKeyToNotation(currentKey)!;
      const move = getMoveByNotation(params.resultNotation, notation)!;
      const prevNotation = getPrevNotation(notation);
      const board = getBoardByNotation(prevNotation) ?? initialBoard.twoPlayer;
      const nextBoard = getBoardAfterMove({ board, move });
   
      saveBoardByNotation(notation, nextBoard);
    }

    return getBoardByNotation(lastNotation)!;
  };

  return { getBoardByNotation, saveBoardByNotation, calculateLastBoard };
}

export function getBoardAfterMove(params: { board: Board; move: Move }) {
  const { board, move } = params;
  const newBoard = board.map((rows) => rows.map((col) => col));
  const piece = newBoard[move.startPosition.y][move.startPosition.x];
  newBoard[move.endPosition.y][move.endPosition.x] = piece;
  newBoard[move.startPosition.y][move.startPosition.x] = 0;
  return newBoard;
}
