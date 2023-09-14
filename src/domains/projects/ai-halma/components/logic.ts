import { EMoveType } from './@enum';
import { CEndPosition } from './constants';

export const calcDisVec = (pos1: IPosition, pos2: IPosition): IPosition => {
  return [Math.abs(pos1[0] - pos2[0]), Math.abs(pos1[1] - pos2[1])];
};

export const isInsideBoard = (pos: IPosition, boardSize: number): boolean => {
  const [y, x] = pos;
  return x >= 0 && x < boardSize - 1 && y >= 0 && y < boardSize - 1;
};

export const isSquareEmpty = (board: IBoard, pos: IPosition): boolean => {
  return board[pos[0]][pos[1]] === 0;
};

export const isValidMove = (board: IBoard, move: IPieceMove): boolean => {
  const { moves, initPos, moveType } = move;

  switch (moveType) {
    case EMoveType.STEP:
      const disVec = calcDisVec(moves[0], initPos);

      return (
        (disVec[0] === 1 || disVec[0] === 0) &&
        (disVec[1] === 1 || disVec[1] === 0) &&
        isInsideBoard(moves[0], 10) &&
        !isSquareEmpty(board, initPos) &&
        isSquareEmpty(board, moves[0])
      );

    case EMoveType.JUMP:
      let moveIdx = 0;
      let startPos = initPos;

      while (moveIdx < moves.length) {
        const disVec = calcDisVec(moves[moveIdx], startPos);
        if (
          (disVec[0] === 2 || disVec[0] === 0) &&
          (disVec[1] === 2 || disVec[1] === 0) &&
          isInsideBoard(moves[moveIdx], 10) &&
          !isSquareEmpty(board, startPos) &&
          isSquareEmpty(board, moves[moveIdx])
        ) {
          startPos = moves[moveIdx];
          moveIdx++;
        } else {
          moveIdx = moves.length + 1;
        }
      }

      return moveIdx === moves.length;

    default:
      return false;
  }
};

export const movePiece = (
  board: IBoard,
  move: IMove,
  initPos: IPosition,
): IBoard => {
  const newBoard = board.map((row) => [...row]);
  [newBoard[initPos[0]][initPos[1]], newBoard[move[0]][move[1]]] = [
    newBoard[move[0]][move[1]],
    newBoard[initPos[0]][initPos[1]],
  ];

  return newBoard;
};

export const isFinished = (board: IBoard, playerId: IPlayerID): boolean => {
  let endPosIdx = 0;
  while (endPosIdx < CEndPosition[playerId].length) {
    const endPos = CEndPosition[playerId][endPosIdx];
    if (board[endPos[0]][endPos[1]] === playerId) {
      endPosIdx++;
    } else {
      endPosIdx = CEndPosition[playerId].length + 1;
    }
  }

  return endPosIdx === CEndPosition[playerId].length;
};
