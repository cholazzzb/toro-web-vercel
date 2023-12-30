import { useContext, useEffect, useRef, useState } from 'react';

import {
  Board,
  Move,
  MoveQueue,
  PlayerIdx,
  Position,
  Square as SquareEnum,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { checkWinningCondition } from 'src/domains/projects/ai-halma/AIHalmaLogic';
import { Flex } from 'src/styled-system/jsx';
import { useBoard } from '../../hook/useBoard';
import { GameResult } from '../../hook/useGameResult';
import { Turn } from '../Game';
import { GameContext } from '../context/game';
import { useAI } from '../hook/useAI';
import { usePossibleMoveMap } from '../hook/usePossibleMoveMap';
import Square from './Square';

type BoardGameProps = {
  turn: Turn;
  endTurn: () => void;
  gameResult: GameResult;
};

const BoardGame = (props: BoardGameProps) => {
  const game = useContext(GameContext);

  useEffect(() => {
    if (game.config.players[props.turn - 1] === 'AI') {
      const { move, moveQueue } = AI.getMovesQueue(board, props.turn);
      animateMove({ board, move, movesQueue: moveQueue, turn: props.turn });
    }
  }, []);

  const { board, movePiece } = useBoard();

  const timer = useRef<NodeJS.Timeout>();

  const possibleMove = usePossibleMoveMap(board);

  const AI = useAI();
  const animateMove = (params: {
    board: Board;
    move: Move;
    movesQueue: Array<MoveQueue>;
    turn: PlayerIdx;
  }) => {
    const { board, movesQueue, turn } = params;

    if (movesQueue.length > 0) {
      const newQueue = [...movesQueue];
      const move = newQueue.shift()!;
      const nextBoard = movePiece({
        board,
        initPos: move.startPos,
        newPos: move.endPos,
      });
      timer.current = setTimeout(() => {
        animateMove({
          board: nextBoard,
          move: params.move,
          movesQueue: newQueue,
          turn,
        });
      }, 100);
    } else {
      props.gameResult.appendMove(params.move, turn);
      const nextTurn = getNextTurn(turn);
      possibleMove.clean();
      props.endTurn();
      const winner = checkWinningCondition(board);
      props.gameResult.saveWinner(winner);
      if (winner === undefined && game.config.players[nextTurn - 1] === 'AI') {
        const { move, moveQueue } = AI.getMovesQueue(board, nextTurn);
        animateMove({ board, move, movesQueue: moveQueue, turn: nextTurn });
      }
    }
  };

  const [activePiece, setActivePiece] = useState<Position>();

  const updateActivePiece = (activePiece?: Position) => {
    setActivePiece(activePiece);
  };

  useEffect(() => {
    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [timer]);

  return (
    <>
      <Flex backgroundColor="black" padding="8px" direction="column">
        {board.map((col, colIdx) => {
          return (
            <Flex key={colIdx} border="10px">
              {col.map((piece, rowIdx) => {
                return (
                  <Square
                    key={rowIdx}
                    turn={props.turn}
                    piece={piece}
                    rowIdx={rowIdx}
                    colIdx={colIdx}
                    activePiece={activePiece}
                    updateActivePiece={updateActivePiece}
                    animateMove={animateMove}
                    gameResult={props.gameResult}
                    possibleMove={possibleMove}
                  />
                );
              })}
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default BoardGame;

const getNextTurn = (turn: PlayerIdx) => {
  switch (turn) {
    case SquareEnum.Player1: {
      return SquareEnum.Player2;
    }

    case SquareEnum.Player2: {
      return SquareEnum.Player1;
    }

    default: {
      throw Error(`turn is wrong! turn: ${turn}`);
    }
  }
};
