import { CEndPosition } from "./constants";

const calcDisVec = (pos1: IPosition, pos2: IPosition): IPosition => {
  return [Math.abs(pos1[0] - pos2[0]), Math.abs(pos1[1] - pos2[1])];
};

const isInsideBoard = (pos: IPosition, boardSize: number): boolean => {
  const [y, x] = pos;
  return x >= 0 && x < boardSize - 1 && y >= 0 && y < boardSize - 1;
};

const isSquareEmpty = (board: IBoard, pos: IPosition): boolean => {
  return board[pos[0]][pos[1]] === 0;
};

export const isValidMove = (board: IBoard, move: IPieceMove): boolean => {
  const { moves, initPos, moveType } = move;

  switch (moveType) {
    case EMoveType.STEP:
      const disVec = calcDisVec(moves[0], initPos);

      (disVec[0] === 1 || disVec[0] === 0) &&
      (disVec[1] === 1 || disVec[1] === 0) &&
      isInsideBoard(moves[0], 10) &&
      isSquareEmpty(board, moves[0])
        ? true
        : false;

    case EMoveType.JUMP:
      let moveIdx = 0;
      let startPos = initPos;

      while (moveIdx < moves.length) {
        const disVec = calcDisVec(moves[moveIdx], startPos);
        
        if (
          (disVec[0] === 2 || disVec[0] === 0) &&
          (disVec[1] === 2 || disVec[1] === 0) &&
          isInsideBoard(moves[moveIdx], 10) &&
          !isSquareEmpty(board, [
            startPos[0] + disVec[0],
            startPos[1] + disVec[1],
          ]) &&
          isSquareEmpty(board, moves[moveIdx])
        ) {
          startPos = moves[moveIdx];
          moveIdx++;
        } else {
          moveIdx = moves.length + 1;
        }

      }

      moveIdx === moves.length && true;

    default:
      return false;
  }
};

export const movePiece = (board: IBoard, move: IPieceMove): IBoard => {
  const { moves, initPos } = move;

  const newBoard = board.map((row) => [...row]);

  const pieceIdx = newBoard[initPos[0]][initPos[1]];
  newBoard[initPos[0]][initPos[1]] = 0;

  moves.forEach((move) => {
    const [x, y] = move;
    newBoard[x][y] = pieceIdx;
  });

  return newBoard;
};

export const isFinished = (board: IBoard, playerId: IPlayerID): boolean => {
  CEndPosition[playerId].forEach((endPosition) => {
    if (board[endPosition[0]][endPosition[1]] !== playerId) {
      return false;
    }
  });

  return true;
};
