export const EEmptyBoard: number[][] = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

interface IPosition {
  1: number[][];
  2: number[][];
  3: number[][];
  4: number[][];
}

export const EStartPosition: IPosition = {
  1: [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [3, 0],
  ],
  2: [
    [9, 9],
    [9, 8],
    [9, 7],
    [9, 6],
    [8, 9],
    [8, 8],
    [8, 7],
    [7, 9],
    [7, 8],
    [6, 9],
  ],
  3: [
    [0, 9],
    [0, 8],
    [0, 7],
    [0, 6],
    [1, 9],
    [1, 8],
    [1, 7],
    [2, 9],
    [2, 8],
    [3, 9],
  ],
  4: [
    [9, 0],
    [9, 1],
    [9, 2],
    [9, 3],
    [8, 0],
    [8, 1],
    [8, 2],
    [7, 0],
    [7, 1],
    [6, 0],
  ],
};

export const EEndPosition: IPosition = {
  1: EStartPosition[2],
  2: EStartPosition[1],
  3: EStartPosition[4],
  4: EStartPosition[3],
};

export const initBoard2Players = (): number[][] => {
  const board = EEmptyBoard.map((row) => [...row]);
  EStartPosition[1].forEach((position) => {
    board[position[0]][position[1]] = 1;
  });
  EStartPosition[2].forEach((position) => {
    board[position[0]][position[1]] = 2;
  });
  return board;
};

export const initBoard4Players = (): number[][] => {
  const board = EEmptyBoard.map((row) => [...row]);
  EStartPosition[1].forEach((position) => {
    board[position[0]][position[1]] = 1;
  });
  EStartPosition[2].forEach((position) => {
    board[position[0]][position[1]] = 2;
  });
  EStartPosition[3].forEach((position) => {
    board[position[0]][position[1]] = 3;
  });
  EStartPosition[4].forEach((position) => {
    board[position[0]][position[1]] = 4;
  });
  return board;
};

export enum EGameState {
  PLAYING = "PLAYING",
  PAUSE = "PAUSE",
}
