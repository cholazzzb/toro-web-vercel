/**
 * This module directly mutate the state that used in the game
 */

import { createInitialBoard } from './config';
import { Move, PieceNumber, Player } from './entity';
import { board, playerPiecesPosition } from './state';

export function reset() {
  return {
    board: createInitialBoard(2),
  };
}

export function movePiece({
  start,
  end,
}: {
  start: { player: Player; pieceNumber: PieceNumber };
  end: { player: Player; pieceNumber: PieceNumber };
}) {
  const startPos = playerPiecesPosition[start.player][start.pieceNumber];
  const endPos = playerPiecesPosition[end.player][end.pieceNumber];

  [board[endPos.y][endPos.x], board[startPos.y][startPos.x]] = [
    board[startPos.y][startPos.x],
    board[endPos.y][endPos.x],
  ];
}

///----///
function isEligibleMove(moves: Array<Move>) {
  const simBoard = structuredClone(board);
}
