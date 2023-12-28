'use client';

import { memo } from 'react';

import Show from 'src/components/Show';
import {
  Board,
  EndPositionKey,
  InitialPositionKey,
  MoveQueue,
  PlayerIdx,
  Position,
  Square as SquareType,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { cva } from 'src/styled-system/css';
import { Flex } from 'src/styled-system/jsx';
import { usePossibleMoveMap } from '../hook/usePossibleMoveMap';
import { Turn } from '../Game';
import { convertMoveToMovesQueue } from 'src/domains/projects/ai-halma/AIHalmaLogic';

type SquareProps = {
  turn: Turn;
  piece: number;
  rowIdx: number;
  colIdx: number;
  activePiece?: Position;
  updateActivePiece: (activePiece?: Position) => void;
  animateMove: (params: {
    board: Board;
    movesQueue: Array<MoveQueue>;
    turn: PlayerIdx;
  }) => void;
  possibleMove: ReturnType<typeof usePossibleMoveMap>;
};

const Square = memo(
  ({
    turn,
    piece,
    rowIdx,
    colIdx,
    activePiece,
    updateActivePiece,
    animateMove,
    possibleMove,
  }: SquareProps) => {
    const enable = piece === 0 || turn === piece;
    const emptyPiece = piece === 0;

    const initPositionKey: InitialPositionKey | undefined =
      activePiece && `${activePiece.x}-${activePiece.y}`;
    const endPositionKey: EndPositionKey = `${rowIdx}-${colIdx}`;
    const mark = !!(
      initPositionKey &&
      possibleMove.map[initPositionKey] &&
      possibleMove.map[initPositionKey][endPositionKey]
    );

    const onSelectPiece = () => {
      possibleMove.calculate({
        rowIdx,
        colIdx,
        square: piece,
      });
      updateActivePiece({ x: rowIdx, y: colIdx });
    };
    const onCancelPiece = () => {
      updateActivePiece(undefined);
    };
    const onSelectDestination = (initPositionKey: InitialPositionKey) => {
      const move = possibleMove.map[initPositionKey][endPositionKey];
      animateMove({
        board: possibleMove.board,
        movesQueue: convertMoveToMovesQueue(move),
        turn,
      });
      updateActivePiece(undefined);
    };

    const onClick = () => {
      if (enable) {
        if (mark && activePiece) {
          onSelectDestination(initPositionKey);
          return;
        }
        if (
          emptyPiece ||
          (activePiece?.x === rowIdx && activePiece?.y === colIdx)
        ) {
          onCancelPiece();
          return;
        }
        onSelectPiece();
      }
    };
    return (
      <Flex
        backgroundColor={mark ? 'gray.400' : undefined}
        border="solid 1px"
        width="30px"
        height="30px"
        justifyContent="center"
        alignItems="center"
        onClick={onClick}>
        <Show when={!!piece}>
          <PieceContainer enable={enable} piece={piece} />
        </Show>
      </Flex>
    );
  },
);

Square.displayName = 'Square';

export default Square;

const pieceCVA = cva({
  base: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
  },
  variants: {
    kind: {
      0: { backgroundColor: 'black' },
      1: { backgroundColor: 'indigo.500' },
      2: { backgroundColor: 'pink.600' },
      3: { backgroundColor: 'green' },
      4: { backgroundColor: 'blue' },
    },
  },
  defaultVariants: {
    kind: 0,
  },
});

const PieceContainer = ({
  enable,
  piece,
}: {
  enable: boolean;
  piece: SquareType;
}) => {
  const cursor = enable ? 'pointer' : 'not-allowed';
  return <Flex className={pieceCVA({ kind: piece })} cursor={cursor} />;
};
