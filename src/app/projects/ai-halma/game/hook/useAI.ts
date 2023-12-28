import { Board, PlayerIdx } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import {
  convertMoveToMovesQueue,
  getBestMove,
} from 'src/domains/projects/ai-halma/AIHalmaLogic';

export function useAI() {
  const getMovesQueue = (board: Board, turn: PlayerIdx) => {
    const bestMove = getBestMove(board, turn);
    return convertMoveToMovesQueue(bestMove);
  };

  return { getMovesQueue };
}
