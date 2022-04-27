import {
  getAllPiecePos,
  getLegalStepMoves,
} from "../../../../components/projects/ai-halma/ai/halmiezzz";
import { CInitBoard4Players, CStartPosition } from "../constants";

describe("test getAllPiecePos function", () => {
  let initBoard: IBoard;
  beforeEach(() => {
    initBoard = CInitBoard4Players();
  });
  it("should return ", () => {
    expect(getAllPiecePos(initBoard, 1, 10).sort()).toEqual(
      CStartPosition[1].sort()
    );
  });
  it("should return ", () => {
    expect(getAllPiecePos(initBoard, 2, 10).sort()).toEqual(
      CStartPosition[2].sort()
    );
  });
  it("should return ", () => {
    expect(getAllPiecePos(initBoard, 3, 10).sort()).toEqual(
      CStartPosition[3].sort()
    );
  });
  it("should return ", () => {
    expect(getAllPiecePos(initBoard, 4, 10).sort()).toEqual(
      CStartPosition[4].sort()
    );
  });
});

describe("test getLegalStepMoves function", () => {
  let initBoard: IBoard;
  beforeEach(() => {
    initBoard = CInitBoard4Players();
  });
  it("initPos: [3,0] -> [[4, 0], [3, 1], [4, 1]]", () => {
    const legalStepMoves = getLegalStepMoves(initBoard, [3, 0]);
    const answers = [
      [4, 0],
      [3, 1],
      [4, 1],
    ];
    const toArr = legalStepMoves.map((move) => {
      return move.moves[0];
    });
    expect(toArr).toEqual(answers);
  });
  it("initPos: [2,0] ->[[3, 1]]", () => {
    const legalStepMoves = getLegalStepMoves(initBoard, [2, 0]);
    const answers = [[3, 1]];
    const toArr = legalStepMoves.map((move) => {
      return move.moves[0];
    });
    expect(toArr).toEqual(answers);
  });
  it("initPos: [8,0] -> Can not move", () => {
    const legalStepMoves = getLegalStepMoves(initBoard, [8, 0]);
    expect(legalStepMoves.length).toEqual(0);
  });
  it("initPos: [7,0] -> [[6, 1]]", () => {
    const legalStepMoves = getLegalStepMoves(initBoard, [7, 0]);
    const answers = [[6, 1]];
    const toArr = legalStepMoves.map((move) => {
      return move.moves[0];
    });
    expect(toArr).toEqual(answers);
  });
});

describe("test getLegalJumpMoves function", () => {});

describe("test getLegalPieceMoves function", () => {});

describe("test getMoveWHighestChebyDis function", () => {});

describe("test getMoveWHigherChebyDis function", () => {});

describe("test halmiezzz function", () => {});
