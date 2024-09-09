import { createInitialBoard, initialPlayerPiecesPosition } from './config';

export const board = createInitialBoard(2);

export const playerPiecesPosition = structuredClone(
  initialPlayerPiecesPosition,
);
