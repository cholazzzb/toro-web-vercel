export type BoardSize = number;

export enum Square {
  Empty,
  Player1,
  Player2,
  Player3,
  Player4,
}
export type Board = Array<Array<Square>>;
export type PlayerIdx =
  | Square.Player1
  | Square.Player2
  | Square.Player3
  | Square.Player4;

export type Position = {
  x: number;
  y: number;
};

export type PositionDistance = Position;

export enum MoveType {
  STEP,
  JUMP,
}

export type Move = {
  playerIdx: PlayerIdx;
  startPosition: Position;
  endPosition: Position;
  type: MoveType;
  sequence: Array<Position>;
};

export type Moves = Array<Move>;

export type MoveQueue = {
  startPos: Position,
  endPos: Position
}
