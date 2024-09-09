import { boardSize } from './config';
import {
  Board,
  directions,
  Move,
  MoveKind,
  Piece,
  PiecePosition,
  PositionHash,
  posToHash,
  RawPosition,
  Sequence,
} from './entity';
import { playerPiecesPosition } from './state';

function sumPosition(pos: PiecePosition, dir: RawPosition) {
  return {
    x: pos.x + dir.x,
    y: pos.y + dir.y,
  };
}

function timesPosition(pos: RawPosition, times: number) {
  return {
    x: pos.x * times,
    y: pos.y * times,
  };
}

function isSquareEmpty(board: Board, pos: PiecePosition) {
  return board[pos.y][pos.x] === null;
}

function validatePosition(position: RawPosition) {
  if (
    position.x < 0 ||
    position.x >= boardSize ||
    position.y < 0 ||
    position.y >= boardSize
  ) {
    return undefined;
  }
  return position as PiecePosition;
}

function canJump(board: Board, startPos: PiecePosition, dir: RawPosition) {
  const rawEndPos = sumPosition(startPos, timesPosition(dir, 2));
  const endPos = validatePosition(rawEndPos);
  if (!endPos) return undefined;
  const otherPiecePos = validatePosition(
    sumPosition(startPos, dir),
  ) as PiecePosition;

  if (!isSquareEmpty(board, otherPiecePos) && isSquareEmpty(board, endPos)) {
    return endPos;
  }
  return undefined;
}

export function movePieceFromBoard(
  brd: Board,
  startPos: PiecePosition,
  endPos: PiecePosition,
) {
  [brd[endPos.y][endPos.x], brd[startPos.y][startPos.x]] = [
    brd[startPos.y][startPos.x],
    brd[endPos.y][endPos.x],
  ];
}

function findAllStepLegalMoves(board: Board, piece: Piece) {
  const out: Array<Move> = [];
  const startPos = playerPiecesPosition[piece.player][piece.number];
  for (const dir of directions) {
    const rawEndPos = sumPosition(startPos, dir);
    const endPos = validatePosition(rawEndPos);
    if (!endPos) continue;
    if (!isSquareEmpty(board, endPos)) continue;
    out.push({
      kind: MoveKind.step,
      startPos,
      endPos,
      sequences: [{ startPos, endPos }],
    });
  }

  return out;
}
export function findAllJumpLegalMoves(board: Board, piece: Piece) {
  const out: Array<Move> = [];
  const startPos = playerPiecesPosition[piece.player][piece.number];

  function rec(
    brd: Board,
    srtPos: PiecePosition,
    visitMap: Set<PositionHash>,
    sequences: Array<Sequence>,
  ) {
    const boardCopy = structuredClone(brd);

    for (const dir of directions) {
      const endPos = canJump(boardCopy, srtPos, dir);
      if (!endPos) {
        if (sequences.length === 0) {
          continue;
        }
        out.push({
          kind: MoveKind.jump,
          startPos,
          endPos: srtPos,
          sequences,
        });
        continue;
      }
      const nextSequences = [
        ...sequences,
        {
          startPos: srtPos,
          endPos,
        },
      ];
      if (!visitMap.has(posToHash(endPos))) {
        out.push({
          kind: MoveKind.jump,
          startPos,
          endPos,
          sequences: nextSequences,
        });
      }
      movePieceFromBoard(boardCopy, srtPos, endPos);
      visitMap.add(posToHash(endPos));
      rec(boardCopy, endPos, visitMap, nextSequences);
    }

    return;
  }

  rec(board, startPos, new Set([posToHash(startPos)]), []);

  return out;
}
export function findAllLegalMoves(board: Board, piece: Piece) {}
