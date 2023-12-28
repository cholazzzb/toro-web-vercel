import { useRef } from 'react';

import {
  Board,
  EndPositionKey,
  InitialPositionKey,
  Move,
  PlayerIdx,
  Square,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';
import {
  getLegalJumpMoves,
  getLegalStepMoves,
} from 'src/domains/projects/ai-halma/AIHalmaLogic';

export function usePossibleMoveMap(board: Board) {
  const map = useRef<Record<InitialPositionKey, Record<EndPositionKey, Move>>>(
    {},
  );

  const clean = () => {
    map.current = {};
  };

  const calculate = (params: {
    rowIdx: number;
    colIdx: number;
    square: Square;
  }) => {
    const initialPosition: InitialPositionKey = `${params.rowIdx}-${params.colIdx}`;
    if (map.current[initialPosition]) {
      return map.current[initialPosition];
    }

    const jumpMoves = getLegalJumpMoves(board, params.square as PlayerIdx, {
      x: params.rowIdx,
      y: params.colIdx,
    });
    const stepMoves = getLegalStepMoves(board, params.square as PlayerIdx, {
      x: params.rowIdx,
      y: params.colIdx,
    });

    [...jumpMoves, ...stepMoves].forEach((move) => {
      const endPositionKey: EndPositionKey = `${move.endPosition.x}-${move.endPosition.y}`;
      if (!!map.current[initialPosition]) {
        map.current[initialPosition][endPositionKey] = move;
      } else {
        map.current[initialPosition] = {
          [endPositionKey]: move,
        };
      }
    });

    return map.current[initialPosition];
  };
  return { map: map.current, calculate, clean, board };
}
