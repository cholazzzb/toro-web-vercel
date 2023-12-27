import { useEffect, useRef, useState } from 'react';

import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Show from 'src/components/Show';
import { EGameState } from 'src/domains/projects/ai-halma/@enum';
import {
  Board,
  MoveQueue,
  PlayerIdx,
  Position,
  Square,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { initialBoard } from 'src/domains/projects/ai-halma/gameSetting';
import { styled } from 'src/styled-system/jsx';
import { GameConfig } from '../useGameConfig';
import BoardGame from './components/BoardGame';
import { Icon } from './components/Icon';
import Player from './components/Player';
import { useAI } from './hook/useAI';

type Props = {
  config: GameConfig['current'];
};

export function Game(_props: Props) {
  const [board, setBoard] = useState<Board>(initialBoard.twoPlayer);
  const [gameState, setGameState] = useState<EGameState>(
    EGameState.NOT_STARTED,
  );

  const toggleGameState = () => {
    switch (gameState) {
      case EGameState.NOT_STARTED:
        setGameState(EGameState.PLAYING);

        const moveQueue = AI.getMovesQueue(board, Square.Player1);
        setMovesQueue(moveQueue);
        animateMove({
          board,
          movesQueue: moveQueue,
          turn: Square.Player1,
        });
        break;

      case EGameState.PAUSED:
        setGameState(EGameState.PLAYING);
        animateMove({ board, movesQueue, turn });
        break;

      case EGameState.PLAYING:
        setGameState(EGameState.PAUSED);
        break;
    }
  };

  const [turn, setTurn] = useState<Square.Player1 | Square.Player2>(
    Square.Player1,
  );
  const AI = useAI();

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

  const [movesQueue, setMovesQueue] = useState<Array<MoveQueue>>([]);
  const timer = useRef<NodeJS.Timeout>();

  const animateMove = (params: {
    board: Board;
    movesQueue: Array<MoveQueue>;
    turn: PlayerIdx;
  }) => {
    const { board, movesQueue, turn } = params;
    if (movesQueue.length === 0) {
      const nextTurn = getNextTurn(turn);
      const moveQueue = AI.getMovesQueue(board, nextTurn);
      setMovesQueue(moveQueue);
      setTurn(nextTurn);
      animateMove({ board, movesQueue: moveQueue, turn: nextTurn });
      return;
    }

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
  };

  useEffect(() => {
    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, [timer]);

  return (
    <>
      <Player
        playerName="Player 2"
        color="pink.600"
        active={gameState !== EGameState.NOT_STARTED && turn === Square.Player2}
      />
      <BoardGame boardData={board}></BoardGame>
      <Player
        playerName="Player 1"
        color="indigo.500"
        active={gameState !== EGameState.NOT_STARTED && turn === Square.Player1}
      />
      <styled.button
        display="flex"
        alignItems="center"
        padding="15px"
        borderRadius="10px"
        backgroundColor="#230903"
        color="#e0e2db"
        onClick={toggleGameState}>
        <Show when={gameState === EGameState.PLAYING}>
          <>
            <Icon>
              <FontAwesomeIcon icon={faPause} />
            </Icon>
            Pause
          </>
        </Show>
        <Show
          when={
            gameState === EGameState.NOT_STARTED ||
            gameState === EGameState.PAUSED
          }>
          <>
            <Icon>
              <FontAwesomeIcon icon={faPlay} />
            </Icon>
            Start
          </>
        </Show>
      </styled.button>
    </>
  );
}

const getNextTurn = (turn: PlayerIdx) => {
  switch (turn) {
    case Square.Player1: {
      return Square.Player2;
    }

    case Square.Player2: {
      return Square.Player1;
    }

    default: {
      throw Error(`turn is wrong! turn: ${turn}`);
    }
  }
};
