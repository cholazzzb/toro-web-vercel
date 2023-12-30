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

export const targetPosition: Record<PlayerIdx, Array<Position>> = {
  [Square.Player1]: [
    { x: 9, y: 0 },
    { x: 9, y: 1 },
    { x: 8, y: 0 },
    { x: 9, y: 2 },
    { x: 8, y: 1 },
    { x: 7, y: 0 },
    { x: 9, y: 3 },
    { x: 8, y: 2 },
    { x: 7, y: 1 },
    { x: 6, y: 0 },
    { x: 9, y: 4 },
    { x: 8, y: 3 },
    { x: 7, y: 2 },
    { x: 6, y: 1 },
    { x: 5, y: 0 },
  ],
  [Square.Player2]: [
    { x: 0, y: 9 },
    { x: 1, y: 9 },
    { x: 0, y: 8 },
    { x: 2, y: 9 },
    { x: 1, y: 8 },
    { x: 0, y: 7 },
    { x: 3, y: 9 },
    { x: 2, y: 8 },
    { x: 1, y: 7 },
    { x: 0, y: 6 },
    { x: 4, y: 9 },
    { x: 3, y: 8 },
    { x: 2, y: 7 },
    { x: 1, y: 6 },
    { x: 0, y: 5 },
  ],
  [Square.Player3]: [{ x: 0, y: 0 }],
  [Square.Player4]: [{ x: 9, y: 9 }],
};
