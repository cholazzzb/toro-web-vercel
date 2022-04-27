export const CEmptyBoard: IBoard = [
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

/**
 * 1 -> Red (Top Left)
 * 2 -> Yellow (Bottom Right)
 * 3 -> Greeen (Top Right)
 * 4 -> Blue (Bottom Left)
 */
export const CStartPosition: IPiecesPosition = {
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

export const CEndPosition: IPiecesPosition = {
  1: CStartPosition[2],
  2: CStartPosition[1],
  3: CStartPosition[4],
  4: CStartPosition[3],
};

export const CInitBoard2Players = (): IBoard => {
  const board: IBoard = CEmptyBoard.map((row) => [...row]);
  CStartPosition[1].forEach((position) => {
    board[position[0]][position[1]] = 1;
  });
  CStartPosition[2].forEach((position) => {
    board[position[0]][position[1]] = 2;
  });
  return board;
};

export const CInitBoard4Players = (): IBoard => {
  const board: IBoard = CEmptyBoard.map((row) => [...row]);
  CStartPosition[1].forEach((position) => {
    board[position[0]][position[1]] = 1;
  });
  CStartPosition[2].forEach((position) => {
    board[position[0]][position[1]] = 2;
  });
  CStartPosition[3].forEach((position) => {
    board[position[0]][position[1]] = 3;
  });
  CStartPosition[4].forEach((position) => {
    board[position[0]][position[1]] = 4;
  });
  return board;
};

export const CHeading: ICHeading = {
  up: [-1, 0],
  down: [1, 0],
  left: [0, -1],
  right: [0, 1],
  upLeft: [-1, -1],
  upRight: [-1, 1],
  downLeft: [1, -1],
  downRight: [1, 1],
};
