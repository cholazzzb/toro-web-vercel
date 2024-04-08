import { useRef } from 'react';

import {
  Move,
  PlayerIdx,
  Square,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { Option } from 'src/utils/fp';
import { Notation } from '../domain/notation';

type ResultNotation = Partial<Record<PlayerIdx, Move>>;
export type ResultNotations = Array<ResultNotation>;

export type GameResult = ReturnType<typeof useGameResult>;

type Result = {
  winner: Square | undefined;
  notations: ResultNotations;
};
export function useGameResult() {
  const current = useRef<Result>({
    winner: undefined,
    notations: [{}],
  }).current;

  const appendMove = (move: Move, playerIdx: PlayerIdx) => {
    const len = current.notations.length;
    const lastMove = current.notations[len - 1];

    if (lastMove?.[playerIdx]) {
      current.notations.push({ [playerIdx]: move });
    } else {
      current.notations[len - 1][playerIdx] = move;
    }
  };

  const saveWinner = (winner: Square | undefined) => {
    current.winner = winner;
  };

  return { current, appendMove, saveWinner };
}

export function getMoveByNotation(
  resultNotations: ResultNotations,
  notation: Notation,
): Option<Move> {
  return resultNotations[notation.moveNumber - 1][notation.playerIdx];
}
