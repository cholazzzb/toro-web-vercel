/**
 * This module provide api to bridge ts module with spline scene
 */

import { Position, SplinePosition } from '../AIHalmaEntity';
import { Piece, PieceNumber, Player } from './entity';

const squareSize = 20;
const shift = -90;

export const toSpline = {
  position: ({ x, y }: Position): SplinePosition => {
    const splinePos: SplinePosition = {
      x: squareSize * x + shift,
      z: squareSize * y + shift,
    };
    return splinePos;
  },
};

export const toTs = {
  position: ({ x, z }: SplinePosition) => {
    const tsPosition: Position = {
      x: (x - shift) / squareSize,
      y: (z - shift) / squareSize,
    };
    return tsPosition;
  },
};

export const splineNameToPieceNameMap: Record<string, Piece> = {};
for (let pieceNumber = 1; pieceNumber <= 10; pieceNumber++) {
  splineNameToPieceNameMap[`Piece1-${pieceNumber}`] = {
    player: Player.First,
    number: pieceNumber as PieceNumber,
  };
  splineNameToPieceNameMap[`Piece2-${pieceNumber}`] = {
    player: Player.Second,
    number: pieceNumber as PieceNumber,
  };
}

export function splineNameToPieceName(splineName: string) {
  if (splineNameToPieceNameMap[splineName]) {
    return splineNameToPieceNameMap[splineName];
  }

  return undefined;
}

export const squaresMap: Record<string, SplinePosition> = {};
for (let y = 0; y < 10; y++) {
  for (let x = 0; x < 10; x++) {
    squaresMap[`Square-${y}-${x}`] = toSpline.position({ x, y });
  }
}
