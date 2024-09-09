// Board, Piece, and Player
export enum Player {
  First = 'First',
  Second = 'Second',
  Third = 'Third',
  Fourth = 'Fourth',
}

export type PieceNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type BoardPosition = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type Piece = {
  player: Player;
  number: PieceNumber;
};

export type PiecePosition = {
  x: BoardPosition;
  y: BoardPosition;
};

/**
 * @description
 * string format: '${PiecePosition.y}:${PiecePosition.x}'
 */
export type PositionHash = `${PiecePosition['y']}:${PiecePosition['x']}`;

export function posToHash(pos: PiecePosition): PositionHash {
  return `${pos.y}:${pos.x}`;
}
export function hashToPos(hash: PositionHash): PiecePosition {
  const [y, x] = hash.split(':').map((el) => Number(el));
  return { y, x } as PiecePosition;
}

export type Board = Array<Array<null | Piece>>;

// Move
export enum MoveKind {
  jump = 'jump',
  step = 'step',
}
export type Sequence = {
  startPos: PiecePosition;
  endPos: PiecePosition;
};
export type Move = {
  kind: MoveKind;
  startPos: PiecePosition;
  endPos: PiecePosition;
  sequences: Array<Sequence>;
};

export const directions = [
  { y: 1, x: 0 }, // Bottom
  { y: -1, x: -1 },
  { y: 0, x: -1 },
  { y: 1, x: -1 },
  { y: -1, x: 0 },
  { y: -1, x: 1 },
  { y: 0, x: 1 },
  { y: 1, x: 1 },
];
export type RawPosition = typeof directions[number];
