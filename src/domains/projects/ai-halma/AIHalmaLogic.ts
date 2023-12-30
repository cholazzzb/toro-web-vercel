import {
  Board,
  BoardSize,
  Move,
  MoveQueue,
  Moves,
  MoveType,
  PlayerIdx,
  Position,
  Square,
} from './AIHalmaEntity';
import {
  getPositionDistance,
  multipleDirection,
  sumPosition,
} from './AIHalmaUtil';
import {
  boardSize,
  Direction,
  directions,
  targetPosition,
} from './gameSetting';

const isInsideBoard = (position: Position, boardSize: BoardSize) =>
  position.x >= 0 &&
  position.y >= 0 &&
  position.x < boardSize &&
  position.y < boardSize;

const isEmptySquare = (board: Board, position: Position) =>
  board[position.y][position.x] === Square.Empty;

export const getAllPiecesPosition = (
  board: Board,
  playerIdx: PlayerIdx,
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

export function notOnDestinationPieces(params: {
  piecesPosition: Array<Position>;
  playerIdx: PlayerIdx;
}): Array<Position> {
  const piecesPositionSet = new Set(
    params.piecesPosition.map((pos) => `${pos.x}-${pos.y}`),
  );
  for (const pos of targetPosition[params.playerIdx]) {
    const key = `${pos.x}-${pos.y}`;
    if (piecesPositionSet.has(key)) {
      piecesPositionSet.delete(key);
    } else {
      break;
    }
  }

  const out = Array.from(piecesPositionSet.values()).map((key) => {
    const [x, y] = key.split('-');
    return {
      x: Number(x),
      y: Number(y),
    };
  });

  return out;
}

export const getLegalStepMoves = (
  board: Board,
  playerIdx: PlayerIdx,
  position: Position,
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
  direction: Direction,
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
  position: Position,
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
    const sequence = sequences.shift()!;

    for (const direction of directions) {
      const newSequence = [...sequence];
      const lastPosition = newSequence[newSequence.length - 1];
      if (isPossibleJumpToDir(markedBoard, lastPosition, direction)) {
        const newPosition = sumPosition(
          lastPosition,
          multipleDirection(direction, 2),
        );
        newSequence.push(newPosition);
        markedBoard[newPosition.y][newPosition.x] = playerIdx;
        sequences.push(newSequence);
      }
    }

    moves.push({
      playerIdx,
      startPosition: position,
      endPosition: sequence[sequence.length - 1],
      type: MoveType.JUMP,
      sequence,
    });
  }

  return moves;
};

export function convertMoveToMovesQueue(move: Move): Array<MoveQueue> {
  const moveQueue: Array<MoveQueue> = [
    {
      startPos: move.startPosition,
      endPos: move.sequence[0],
    },
  ];
  for (let idx = 1; idx < move.sequence.length; idx++) {
    moveQueue.push({
      startPos: move.sequence[idx - 1],
      endPos: move.sequence[idx],
    });
  }
  return moveQueue;
}

export function checkWinningCondition(board: Board): Square | undefined {
  const winners = Object.values(targetPosition).map((tp, idx) => {
    const playerIdx = (idx + 1) as PlayerIdx;
    return tp.every((pos) => board[pos.y][pos.x] === playerIdx);
  });

  const draw = winners.filter((isWin) => isWin).length > 1;
  if (draw) return Square.Empty;

  const winner = winners.findIndex((isWin) => isWin) + 1;
  if (winner < 1) return undefined;

  return winner as Square;
}

// AI Bot
export const getMostGreedyMove = (
  moves: Moves,
  curTargetPosition: Position,
): Move => {
  if (moves.length === 1) {
    return moves[0];
  }
  const movesWeight = moves
    .filter((move) => !!move)
    .map((move) => {
      const sequenceLength = move.sequence.length;
      const endPosDistance = getPositionDistance(
        move.endPosition,
        curTargetPosition,
      );
      const startPosDistance = getPositionDistance(
        move.startPosition,
        curTargetPosition,
      );
      const deltaDistance =
        startPosDistance.x +
        startPosDistance.y -
        endPosDistance.x -
        endPosDistance.y;
      return 0.3 * sequenceLength + deltaDistance;
    });

  let maxWeightIdx = 0;
  let maxWeight = movesWeight[0];
  movesWeight.forEach((weight, idx) => {
    if (weight > maxWeight) {
      maxWeight = weight;
      maxWeightIdx = idx;
    } else if (weight === maxWeight) {
      const random = Math.random() > 0.5;
      if (random) {
        maxWeight = weight;
        maxWeightIdx = idx;
      }
    }
  });

  return moves[maxWeightIdx];
};

export const getBestMove = (board: Board, playerIdx: PlayerIdx) => {
  const curTargetPosition =
    targetPosition[playerIdx].find((tp) => {
      return board[tp.y][tp.x] !== playerIdx;
    }) ?? targetPosition[playerIdx][0];

  const positions = getAllPiecesPosition(board, playerIdx);
  const filtered = notOnDestinationPieces({
    piecesPosition: positions,
    playerIdx,
  });

  const piecesBestMove = filtered
    .map((position) => {
      const jumpMoves = getLegalJumpMoves(board, playerIdx, position);
      const stepMoves = getLegalStepMoves(board, playerIdx, position);
      const allMoves= [...jumpMoves, ...stepMoves];
      if (allMoves.length > 0) {
        return getMostGreedyMove(allMoves, curTargetPosition);
      }
      return undefined;
    })
    .filter((pbm) =>!!pbm) as Array<Move>;
  return getMostGreedyMove(piecesBestMove, curTargetPosition);
};
