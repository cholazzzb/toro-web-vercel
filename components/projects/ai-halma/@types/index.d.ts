type IXPos = number;
type IYPos = number;

type IMove = [IYPos, IXPos];

type IPosition = [IYPos, IXPos];

interface IPieceMove {
  moves: IMove[];
  initPos: IPosition;
  moveType: number;
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

type ICHeadingKey =
  | "up"
  | "down"
  | "left"
  | "right"
  | "upLeft"
  | "upRight"
  | "downLeft"
  | "downRight";

type ICHeading = Record<ICHeadingKey, IHeading>;

type IAIOutput = {
  moves: IMove[];
  initPos: IPosition;
};
