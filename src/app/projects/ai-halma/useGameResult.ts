import { useState } from 'react';

type Result = {};
export type GameResult = ReturnType<typeof useGameResult>

export function useGameResult() {
  const [current, setGameResult] = useState<Result>();

  const saveResult = (gameResult: Result) => {
    setGameResult(gameResult);
  };

  return { current, saveResult };
}
