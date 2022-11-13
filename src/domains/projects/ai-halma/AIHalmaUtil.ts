import { Position, PositionDistance } from "./AIHalmaEntity";
import { Direction } from "./gameSetting";

type SumPosition = (
  position: Position,
  positionDistance: PositionDistance
) => Position;
export const sumPosition: SumPosition = (position, positionDistance) => ({
  x: position.x + positionDistance.x,
  y: position.y + positionDistance.y,
});

type MultipleDirection = (direction: Direction, multiplies: number) => Position;
export const multipleDirection: MultipleDirection = (
  direction,
  multiplies
) => ({
  x: direction.x * multiplies,
  y: direction.y * multiplies,
});

type GetPositionDistance = (
  position1: Position,
  position2: Position
) => Position;
export const getPositionDistance: GetPositionDistance = (
  position1,
  position2
) => ({
  x: Math.abs(position1.x - position2.x),
  y: Math.abs(position1.y - position2.y),
});
