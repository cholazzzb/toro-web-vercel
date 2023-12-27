import {
    Board,
    MoveQueue,
    PlayerIdx,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { getBestMove } from 'src/domains/projects/ai-halma/AIHalmaLogic';

export function useAI() {
  const getMovesQueue = (board: Board, turn: PlayerIdx) => {
    const bestMove = getBestMove(board, turn);
    const moveQueue: Array<MoveQueue> = [
      {
        startPos: bestMove.startPosition,
        endPos: bestMove.sequence[0],
      },
    ];
    for (let idx = 1; idx < bestMove.sequence.length; idx++) {
      moveQueue.push({
        startPos: bestMove.sequence[idx - 1],
        endPos: bestMove.sequence[idx],
      });
    }
    return moveQueue;
  };
  
  return { getMovesQueue };
}
