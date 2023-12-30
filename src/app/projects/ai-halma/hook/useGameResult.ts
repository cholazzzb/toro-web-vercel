import { useRef } from 'react';

import {
  Move,
  PlayerIdx,
  Square,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';

export type Notations = Array<Partial<Record<PlayerIdx, Move>>>;
type Result = {
  winner: Square | undefined;
  notations: Notations;
};
export type GameResult = ReturnType<typeof useGameResult>;

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
