import { Board, PieceNumber, PiecePosition, Player } from './entity';

// Board and Pieces
export const boardSize = 10;

const emptyBoard: Board = Array(boardSize)
  .fill(null)
  .map((_) => Array(boardSize).fill(null));

export const initialPlayerPiecesPosition: Record<
  Player,
  Record<PieceNumber, PiecePosition>
> = {
  [Player.First]: {
    1: { x: 0, y: 9 },
    2: { x: 1, y: 9 },
    3: { x: 2, y: 9 },
    4: { x: 3, y: 9 },
    5: { x: 0, y: 8 },
    6: { x: 1, y: 8 },
    7: { x: 2, y: 8 },
    8: { x: 0, y: 7 },
    9: { x: 1, y: 7 },
    10: { x: 0, y: 6 },
  },
  [Player.Second]: {
    1: { x: 9, y: 0 },
    2: { x: 8, y: 0 },
    3: { x: 7, y: 0 },
    4: { x: 6, y: 0 },
    5: { x: 9, y: 1 },
    6: { x: 8, y: 1 },
    7: { x: 7, y: 1 },
    8: { x: 9, y: 2 },
    9: { x: 8, y: 2 },
    10: { x: 9, y: 3 },
  },
  [Player.Third]: {
    1: { x: 0, y: 0 },
    2: { x: 1, y: 0 },
    3: { x: 2, y: 0 },
    4: { x: 3, y: 0 },
    5: { x: 0, y: 1 },
    6: { x: 1, y: 1 },
    7: { x: 2, y: 1 },
    8: { x: 0, y: 2 },
    9: { x: 1, y: 2 },
    10: { x: 0, y: 3 },
  },
  [Player.Fourth]: {
    1: { x: 9, y: 9 },
    2: { x: 8, y: 9 },
    3: { x: 7, y: 9 },
    4: { x: 6, y: 9 },
    5: { x: 9, y: 8 },
    6: { x: 8, y: 8 },
    7: { x: 7, y: 8 },
    8: { x: 9, y: 7 },
    9: { x: 8, y: 7 },
    10: { x: 9, y: 6 },
  },
};

export function createInitialBoard(numOfPlayer: 2 | 4) {
  const board = structuredClone(emptyBoard);

  const boardFillerByPlayer = (player: Player) => (pn: string) => {
    const pnNumber = Number(pn) as PieceNumber;
    const pos = initialPlayerPiecesPosition.First[pnNumber];
    board[pos.y][pos.x] = { player, number: pnNumber };
  };
  Object.keys(initialPlayerPiecesPosition.First).forEach(
    boardFillerByPlayer(Player.First),
  );
  Object.keys(initialPlayerPiecesPosition.Second).forEach(
    boardFillerByPlayer(Player.Second),
  );
  if (numOfPlayer === 4) {
    Object.keys(initialPlayerPiecesPosition.Third).forEach(
      boardFillerByPlayer(Player.Third),
    );
    Object.keys(initialPlayerPiecesPosition.Fourth).forEach(
      boardFillerByPlayer(Player.Fourth),
    );
  }
  return board;
}

// Move
