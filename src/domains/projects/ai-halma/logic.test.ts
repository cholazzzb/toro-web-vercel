import { EMoveType } from './@enum';
import { CInitBoard4Players } from './constants';
import {
  calcDisVec,
  isFinished,
  isInsideBoard,
  isSquareEmpty,
  isValidMove,
  movePiece,
} from './logic';

describe('test calcDisVec function', () => {
  it('should return [2, 0]', () => {
    expect(calcDisVec([0, 0], [2, 0])).toEqual([2, 0]);
    expect(calcDisVec([2, 0], [0, 0])).toEqual([2, 0]);
  });

  it('should return [0, 2]', () => {
    expect(calcDisVec([0, 0], [0, 2])).toEqual([0, 2]);
    expect(calcDisVec([0, 2], [0, 0])).toEqual([0, 2]);
  });

  it('should return [2, 2]', () => {
    expect(calcDisVec([0, 0], [2, 2])).toEqual([2, 2]);
    expect(calcDisVec([2, 2], [0, 0])).toEqual([2, 2]);
  });
});

describe('test isInsideBoard function', () => {
  it('should return true, the square is inside the board', () => {
    expect(isInsideBoard([0, 0], 10)).toBeTruthy();
  });
  it('should return false, the square is outside the board', () => {
    expect(isInsideBoard([10, 10], 10)).toBeFalsy();
  });
});

describe('test isSquareEmpty function', () => {
  let initBoard: IBoard;
  beforeEach(() => {
    initBoard = CInitBoard4Players();
  });
  it('The Square is empty', () => {
    expect(isSquareEmpty(initBoard, [6, 6])).toBeTruthy();
  });
  it('The Square is not empty', () => {
    expect(isSquareEmpty(initBoard, [0, 0])).toBeFalsy();
  });
});

describe('Check isValidMove function', () => {
  let initBoard: IBoard;
  beforeEach(() => {
    initBoard = CInitBoard4Players();
  });
  it('should return false, Invalid Step Move', () => {
    const moves: IMove[] = [[5, 0]];
    const initPos: IPosition = [3, 0];
    const pieceMove = {
      moves: moves,
      initPos: initPos,
      moveType: EMoveType.STEP,
    };
    expect(isValidMove(initBoard, pieceMove)).toBeFalsy();
  });

  it('should return true, Valid Step Move', () => {
    const moves: IMove[] = [[4, 0]];
    const initPos: IPosition = [3, 0];
    const pieceMove = {
      moves: moves,
      initPos: initPos,
      moveType: EMoveType.STEP,
    };
    expect(isValidMove(initBoard, pieceMove)).toBeTruthy();
  });

  it('should return false, Invalid Jump Move', () => {
    const moves: IMove[] = [[4, 8]];
    const initPos: IPosition = [3, 0];
    const pieceMove = {
      moves: moves,
      initPos: initPos,
      moveType: EMoveType.JUMP,
    };
    expect(isValidMove(initBoard, pieceMove)).toBeFalsy();
  });

  it('should return true, Valid Jump Move', () => {
    const moves: IMove[] = [[4, 0]];
    const initPos: IPosition = [2, 0];
    const pieceMove = {
      moves: moves,
      initPos: initPos,
      moveType: EMoveType.JUMP,
    };
    expect(isValidMove(initBoard, pieceMove)).toBeTruthy();
  });
});

describe('test movePiece function', () => {
  it('should return the new board', () => {
    const initBoard: IBoard = CInitBoard4Players();
    const initPos: IPosition = [3, 0];
    const move: IMove = [4, 0];
    const newBoard = movePiece(initBoard, move, initPos);
    expect(newBoard[4][0]).toEqual(initBoard[3][0]);
    expect(newBoard[3][0]).toEqual(0);
  });
});

describe('test isFinished function', () => {
  it('should return true', () => {
    const board: IBoard = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    ];
    expect(isFinished(board, 1)).toBeTruthy();
  });
  it('should return false', () => {
    const board: IBoard = CInitBoard4Players();
    expect(isFinished(board, 1)).toBeFalsy();
    expect(isFinished(board, 2)).toBeFalsy();
    expect(isFinished(board, 3)).toBeFalsy();
    expect(isFinished(board, 4)).toBeFalsy();
  });
});
