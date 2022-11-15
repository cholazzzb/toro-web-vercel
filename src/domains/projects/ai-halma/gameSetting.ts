import { Board, PlayerIdx, Position, Square } from './AIHalmaEntity';

export const boardSize = 10;

export type Direction = {
  x: -1 | 0 | 1;
  y: -1 | 0 | 1;
};
export const directions: Array<Direction> = [
  {
    x: -1,
    y: -1,
  },
  {
    x: 0,
    y: -1,
  },
  {
    x: 1,
    y: -1,
  },
  {
    x: -1,
    y: 0,
  },
  {
    x: 1,
    y: 0,
  },
  {
    x: -1,
    y: 1,
  },
  {
    x: 0,
    y: 1,
  },
  {
    x: 1,
    y: 1,
  },
];

export type InitialBoard = {
  twoPlayer: Board;
  fourPlayer: Board;
};
export const initialBoard = {
  twoPlayer: [
    [
      0,
      0,
      0,
      0,
      0,
      Square.Player2,
      Square.Player2,
      Square.Player2,
      Square.Player2,
      Square.Player2,
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      Square.Player2,
      Square.Player2,
      Square.Player2,
      Square.Player2,
    ],
    [0, 0, 0, 0, 0, 0, 0, Square.Player2, Square.Player2, Square.Player2],
    [0, 0, 0, 0, 0, 0, 0, 0, Square.Player2, Square.Player2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, Square.Player2],
    [Square.Player1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [Square.Player1, Square.Player1, 0, 0, 0, 0, 0, 0, 0, 0],
    [Square.Player1, Square.Player1, Square.Player1, 0, 0, 0, 0, 0, 0, 0],
    [
      Square.Player1,
      Square.Player1,
      Square.Player1,
      Square.Player1,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      Square.Player1,
      Square.Player1,
      Square.Player1,
      Square.Player1,
      Square.Player1,
      0,
      0,
      0,
      0,
      0,
    ],
  ],
};

export const targetPosition: Record<PlayerIdx, Position> = {
  [Square.Player1]: { x: 9, y: 0 },
  [Square.Player2]: { x: 0, y: 9 },
  [Square.Player3]: { x: 0, y: 0 },
  [Square.Player4]: { x: 9, y: 9 },
};
