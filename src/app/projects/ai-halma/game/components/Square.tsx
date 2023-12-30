'use client';

import { memo, useContext } from 'react';

import Show from 'src/components/Show';
import {
  Board,
  EndPositionKey,
  InitialPositionKey,
  MoveQueue,
  PlayerIdx,
  Position,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { convertMoveToMovesQueue } from 'src/domains/projects/ai-halma/AIHalmaLogic';
import { Flex } from 'src/styled-system/jsx';
import { Piece } from '../../component/Piece';
import { GameResult } from '../../hook/useGameResult';
import { Turn } from '../Game';
import { GameContext } from '../context/game';
import { usePossibleMoveMap } from '../hook/usePossibleMoveMap';

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
  gameResult: GameResult;
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
    gameResult,
    possibleMove,
  }: SquareProps) => {
    const game = useContext(GameContext);
    const humanTurn = game.config.players[turn - 1] === 'Human';

    const enable =
      gameResult.current.winner === undefined &&
      (piece === 0 || turn === piece);

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
      gameResult.appendMove(move, turn);
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
        if (humanTurn) {
          onSelectPiece();
        }
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
          <Piece enable={enable} piece={piece} />
        </Show>
      </Flex>
    );
  },
);

Square.displayName = 'Square';

export default Square;
