import {
    Board,
    BoardSize,
    Move,
    Moves,
    MoveType,
    PlayerIdx,
    Position,
    Square
} from "./AIHalmaEntity";
import {
    getPositionDistance,
    multipleDirection,
    sumPosition
} from "./AIHalmaUtil";
import {
    boardSize,
    Direction,
    directions,
    targetPosition
} from "./gameSetting";

const isInsideBoard = (position: Position, boardSize: BoardSize) =>
  position.x >= 0 &&
  position.y >= 0 &&
  position.x < boardSize &&
  position.y < boardSize;

const isEmptySquare = (board: Board, position: Position) =>
  board[position.y][position.x] === Square.Empty;

export const getAllPiecesPosition = (
  board: Board,
  playerIdx: PlayerIdx
): Array<Position> => {
  const positions: Array<Position> = [];
  board.forEach((rows, y) => {
    rows.forEach((square, x) => {
      if (square === playerIdx) {
        positions.push({ y, x });
      }
    });
  });

  return positions;
};

export const getLegalStepMoves = (
  board: Board,
  playerIdx: PlayerIdx,
  position: Position
): Moves => {
  const moves: Moves = [];
  if (board[position.y][position.x] !== playerIdx) return moves;

  for (const direction of directions) {
    const newPosition = sumPosition(position, direction);
    if (
      isInsideBoard(newPosition, boardSize) &&
      isEmptySquare(board, newPosition)
    ) {
      moves.push({
        playerIdx,
        startPosition: position,
        endPosition: newPosition,
        type: MoveType.STEP,
        sequence: [newPosition],
      });
    }
  }

  return moves;
};

const isPossibleJumpToDir = (
  board: Board,
  position: Position,
  direction: Direction
) => {
  const dis1 = sumPosition(position, direction);
  const dis2 = sumPosition(position, multipleDirection(direction, 2));
  return (
    isInsideBoard(dis1, boardSize) &&
    !isEmptySquare(board, dis1) &&
    isInsideBoard(dis2, boardSize) &&
    isEmptySquare(board, dis2)
  );
};

export const getLegalJumpMoves = (
  board: Board,
  playerIdx: PlayerIdx,
  position: Position
): Moves => {
  const moves: Moves = [];
  if (board[position.y][position.x] !== playerIdx) return moves;

  const markedBoard = board.map((rows) => rows.map((col) => col));

  const sequences: Array<Array<Position>> = [];

  directions.forEach((dir) => {
    if (isPossibleJumpToDir(markedBoard, position, dir)) {
      const dis2 = multipleDirection(dir, 2);
      const newPosition = sumPosition(position, dis2);
      sequences.push([newPosition]);
      markedBoard[newPosition.y][newPosition.x] = playerIdx;
    }
  });

  while (sequences.length > 0) {
    const sequence = sequences.shift();
    if (!sequence) break;
    let variant = 0;

    for (const direction of directions) {
      const newSequence = [...sequence];
      const lastPosition = newSequence[newSequence.length - 1];
      if (isPossibleJumpToDir(markedBoard, lastPosition, direction)) {
        const newPosition = sumPosition(
          lastPosition,
          multipleDirection(direction, 2)
        );
        newSequence.push(newPosition);
        markedBoard[newPosition.y][newPosition.x] = playerIdx;
        sequences.push(newSequence);
        variant++;
      }
    }

    if (variant === 0) {
      moves.push({
        playerIdx,
        startPosition: position,
        endPosition: sequence[sequence.length - 1],
        type: MoveType.JUMP,
        sequence,
      });
    }
  }

  return moves;
};

export const getMostGreedyMove = (moves: Moves, playerIdx: PlayerIdx): Move => {
  if (moves.length === 1) {
    return moves[0];
  }
  const movesWeight = moves
    .filter((move) => !!move)
    .map((move) => {
      const sequenceLength = move.sequence.length;
      const endPosDistance = getPositionDistance(
        move.endPosition,
        targetPosition[playerIdx]
      );
      const startPosDistance = getPositionDistance(
        move.startPosition,
        targetPosition[playerIdx]
      )
      const deltaDistance = startPosDistance.x + startPosDistance.y - endPosDistance.x - endPosDistance.y
      return sequenceLength + deltaDistance;
    });

  let maxWeightIdx = 0;
  let maxWeight = movesWeight[0];
  movesWeight.forEach((weight, idx) => {
    if (weight > maxWeight) {
      maxWeight = weight;
      maxWeightIdx = idx;
    }
  });

  return moves[maxWeightIdx];
};

export const getBestMove = (board: Board, playerIdx: PlayerIdx) => {
  const positions = getAllPiecesPosition(board, playerIdx);
  const piecesBestMove = positions.map((position) => {
    const jumpMoves = getLegalJumpMoves(board, playerIdx, position);
    const stepMoves = getLegalStepMoves(board, playerIdx, position);
    return getMostGreedyMove([...jumpMoves, ...stepMoves], playerIdx);
  });
  return getMostGreedyMove(piecesBestMove, playerIdx);
};
