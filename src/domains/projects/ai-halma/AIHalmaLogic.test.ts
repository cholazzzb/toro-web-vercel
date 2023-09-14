import { MoveType, Square } from './AIHalmaEntity';
import {
  // getBestMove,
  // getMostGreedyMove
  getLegalJumpMoves,
  getLegalStepMoves,
} from './AIHalmaLogic';
import { initialBoard } from './gameSetting';

describe('two player ', () => {
  it('getLegalStepMoves', () => {
    const board = initialBoard.twoPlayer;
    const startPosition = { x: 0, y: 5 };
    const playerIdx = Square.Player1;
    const moves = getLegalStepMoves(board, playerIdx, startPosition);

    expect(moves.length).toEqual(3);
    expect(moves).toEqual([
      {
        playerIdx,
        startPosition,
        endPosition: {
          x: 0,
          y: 4,
        },
        type: MoveType.STEP,
        sequence: [
          {
            x: 0,
            y: 4,
          },
        ],
      },
      {
        playerIdx,
        startPosition,
        endPosition: {
          x: 1,
          y: 4,
        },
        type: MoveType.STEP,
        sequence: [
          {
            x: 1,
            y: 4,
          },
        ],
      },
      {
        playerIdx,
        startPosition,
        endPosition: {
          x: 1,
          y: 5,
        },
        type: MoveType.STEP,
        sequence: [
          {
            x: 1,
            y: 5,
          },
        ],
      },
    ]);
  });
  it('getLegalJumpMoves', () => {
    const board = initialBoard.twoPlayer;
    const startPosition = { x: 0, y: 6 };
    const playerIdx = Square.Player1;
    const moves = getLegalJumpMoves(board, playerIdx, startPosition);

    expect(moves.length).toEqual(2);
    expect(moves).toEqual([
      {
        playerIdx,
        startPosition,
        endPosition: {
          x: 0,
          y: 4,
        },
        type: MoveType.JUMP,
        sequence: [
          {
            x: 0,
            y: 4,
          },
        ],
      },
      {
        playerIdx,
        startPosition,
        endPosition: {
          x: 2,
          y: 6,
        },
        type: MoveType.JUMP,
        sequence: [
          {
            x: 2,
            y: 6,
          },
        ],
      },
    ]);
  });
  // it('getLegalStepMoves', () => {
  //   const board = initialBoard.twoPlayer;
  //   const playerIdx = Square.Player1;
  //   const position = { x: 0, y: 6 };
  //   const jumpMoves = getLegalJumpMoves(board, playerIdx, position);
  //   const stepMoves = getLegalStepMoves(board, playerIdx, position);
  //   const bestMove = getMostGreedyMove([...jumpMoves, ...stepMoves], playerIdx);
  // });
  // it('getBestMove', () => {
  //   const board = initialBoard.twoPlayer;
  //   const bestMove = getBestMove(board, Square.Player1);
  // });
});
