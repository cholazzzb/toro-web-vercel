import { useRef } from 'react';

import {
  Move,
  PlayerIdx,
  Square,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';

type Result = {
  winner: Square | undefined;
  notations: Partial<Record<PlayerIdx, Array<Move>>>;
};
export type GameResult = ReturnType<typeof useGameResult>;

export function useGameResult() {
  const current = useRef<Result>({
    winner: undefined,
    notations: {
      1: [],
      2: [],
    },
  }).current;

  const appendMove = (move: Move, playerIdx: PlayerIdx) => {
    current.notations[playerIdx]?.push(move);
  };

  const saveWinner = (winner: Square | undefined) => {
    current.winner = winner;
  };

  return { current, appendMove, saveWinner };
}
