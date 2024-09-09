import { createInitialBoard } from './config';
import { Player } from './entity';
import { findAllJumpLegalMoves, movePieceFromBoard } from './logic';

describe('test jump moves', () => {
  it('jump once', () => {
    const jumpMoves = findAllJumpLegalMoves(createInitialBoard(2), {
      player: Player.First,
      number: 6,
    });

    expect(jumpMoves).toStrictEqual([
      {
        kind: 'jump',
        startPos: {
          x: 1,
          y: 8,
        },
        endPos: {
          x: 1,
          y: 6,
        },
        sequences: [
          {
            startPos: {
              x: 1,
              y: 8,
            },
            endPos: {
              x: 1,
              y: 6,
            },
          },
        ],
      },
      {
        kind: 'jump',
        startPos: {
          x: 1,
          y: 8,
        },
        endPos: {
          x: 3,
          y: 8,
        },
        sequences: [
          {
            startPos: {
              x: 1,
              y: 8,
            },
            endPos: {
              x: 3,
              y: 8,
            },
          },
        ],
      },
    ]);
  });

  it('jump twice', () => {
    const board = createInitialBoard(2);
    movePieceFromBoard(board, { x: 1, y: 8 }, { x: 3, y: 8 });

    const jumpMoves = findAllJumpLegalMoves(createInitialBoard(2), {
      player: Player.First,
      number: 8,
    });

    console.log(JSON.stringify({ jumpMoves }, null, 2));
  });
});
