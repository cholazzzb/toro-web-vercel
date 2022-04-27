import { CHeading } from "../constants";
import { isInsideBoard } from "../logic";

export const getAllPiecePos = (
  board: IBoard,
  playerId: IPlayerID,
  numOfPiece: number
): IPosition[] => {
  let foundedPieces = 0;
  const allPiecePos: IPosition[] = [];

  let row = 0;
  let col = 0;

  while (foundedPieces < numOfPiece) {
    if (board[row][col] === playerId) {
      allPiecePos.push([row, col]);
      foundedPieces++;
    }
    if (col === 9) {
      col = 0;
      row++;
    } else {
      col++;
    }
  }

  return allPiecePos;
};

// Move for 1 Piece
export const getLegalStepMoves = (
  board: IBoard,
  initPos: IPosition
): Array<IAIOutput> => {
  const legalStepMoves: Array<IAIOutput> = [];
  for (let heading of Object.values(CHeading)) {
    const position: IPosition = [
      initPos[0] + heading[0],
      initPos[1] + heading[1],
    ];
    if (
      isInsideBoard(position, board.length) &&
      board[position[0]][position[1]] === 0
    ) {
      legalStepMoves.push({
        moves: [[initPos[0] + heading[0], initPos[1] + heading[1]]],
        initPos,
      });
    }
  }
  return legalStepMoves;
};

// Move for 1 Piece
export const getLegalJumpMoves = (
  board: IBoard,
  initPos: IPosition,
  playerId: IPlayerID
): Array<IAIOutput> => {
  return [{ moves: [], initPos: [1, 2] }];
};

export const getLegalPieceMoves = (
  board: IBoard,
  initPos: IPosition
): IAIOutput[] => {
  return [{ moves: [], initPos: [1, 2] }];
};

export const getMoveWHighestChebyDis = (moves: IAIOutput[]): IAIOutput => {
  return { moves: [], initPos: [1, 2] };
};

export const getMoveWHigherChebyDis = (
  move1: IAIOutput,
  move2: IAIOutput
): IAIOutput => {
  return { moves: [], initPos: [1, 2] };
};

const halmiezzz = (board: IBoard, playerId: IPlayerID): IAIOutput => {
  const allPiecePos = getAllPiecePos(board, playerId, 10);
  const allPieceMoveWHighestChebyDevDis: IAIOutput[] = allPiecePos.map(
    (piecePos) => {
      const legalPieceMoves = getLegalPieceMoves(board, piecePos);
      return getMoveWHighestChebyDis(legalPieceMoves);
    }
  );

  let bestMove = allPieceMoveWHighestChebyDevDis[0];
  for (
    let moveIdx = 1;
    moveIdx < allPieceMoveWHighestChebyDevDis.length;
    moveIdx++
  ) {
    bestMove = getMoveWHigherChebyDis(
      bestMove,
      allPieceMoveWHighestChebyDevDis[moveIdx]
    );
  }

  return bestMove;
};
export default halmiezzz;
