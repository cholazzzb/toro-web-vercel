type IXPos = number;
type IYPos = number;

type IMove = [IYPos, IXPos];

enum EMoveType {
  STEP,
  JUMP,
}

type IPosition = [IYPos, IXPos];

interface IPieceMove {
  moves: IMove[];
  initPos: IPosition;
  moveType: EMoveType;
}

type IBoard = number[][];

type IPlayerID = 1 | 2 | 3 | 4;

interface IPiecesPosition {
  1: IPosition[];
  2: IPosition[];
  3: IPosition[];
  4: IPosition[];
}

type IHeading = [-1 | 0 | 1, -1 | 0 | 1];

interface ICHeading {
  up: IHeading;
  down: IHeading;
  left: IHeading;
  right: IHeading;
  upLeft: IHeading;
  upRight: IHeading;
  downLeft: IHeading;
  downRight: IHeading;
}
