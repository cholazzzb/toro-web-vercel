import { useContext, useEffect, useRef, useState } from 'react';

import {
  Board,
  MoveQueue,
  PlayerIdx,
  Position,
  Square as SquareEnum,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { initialBoard } from 'src/domains/projects/ai-halma/gameSetting';
import { Flex } from 'src/styled-system/jsx';
import { Turn } from '../Game';
import { GameContext } from '../context/game';
import { useAI } from '../hook/useAI';
import { usePossibleMoveMap } from '../hook/usePossibleMoveMap';
import Square from './Square';

type BoardGameProps = {
  turn: Turn;
  endTurn: () => void;
};

const BoardGame = (props: BoardGameProps) => {
  const game = useContext(GameContext);

  useEffect(() => {
    if (game.config.players[props.turn - 1] === 'AI') {
      const moveQueue = AI.getMovesQueue(board, props.turn);
      setMovesQueue(moveQueue);
      animateMove({ board, movesQueue: moveQueue, turn: props.turn });
    }
  }, []);

  const [board, setBoard] = useState<Board>(initialBoard.twoPlayer);

  const movePiece = (params: {
    board: Board;
    initPos: Position;
    newPos: Position;
  }) => {
    const { board, initPos, newPos } = params;
    const newBoard = board.map((rows) => rows.map((col) => col));
    const piece = newBoard[initPos.y][initPos.x];
    newBoard[newPos.y][newPos.x] = piece;
    newBoard[initPos.y][initPos.x] = 0;
    setBoard(newBoard);
    return newBoard;
  };

  const [_movesQueue, setMovesQueue] = useState<Array<MoveQueue>>([]);
  const timer = useRef<NodeJS.Timeout>();

  const possibleMove = usePossibleMoveMap(board);

  const AI = useAI();
  const animateMove = (params: {
    board: Board;
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
      setMovesQueue(newQueue);
      timer.current = setTimeout(() => {
        animateMove({ board: nextBoard, movesQueue: newQueue, turn });
      }, 1000);
      return;
    } else {
      const nextTurn = getNextTurn(turn);
      possibleMove.clean();
      props.endTurn();
      if (game.config.players[nextTurn - 1] === 'AI') {
        const moveQueue = AI.getMovesQueue(board, nextTurn);
        setMovesQueue(moveQueue);
        animateMove({ board, movesQueue: moveQueue, turn: nextTurn });
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
