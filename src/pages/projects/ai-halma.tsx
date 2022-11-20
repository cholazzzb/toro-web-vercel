// UI
import { Layout } from 'components/Layout';
import Player from 'components/projects/ai-halma/Player';
import { useEffect, useRef, useState } from 'react';

// Logic
import { EGameState } from 'components/projects/ai-halma/@enum';

// AI
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BoardGame from 'components/projects/ai-halma/BoardGame';
import {
  Board,
  MoveQueue,
  PlayerIdx,
  Position,
  Square
} from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { getBestMove } from 'src/domains/projects/ai-halma/AIHalmaLogic';
import { initialBoard } from 'src/domains/projects/ai-halma/gameSetting';
import { mainTheme } from 'src/theme';

const AIHalma = () => {
  const [board, setBoard] = useState<Board>(initialBoard.twoPlayer);
  const [gameState, setGameState] = useState<EGameState>(
    EGameState.NOT_STARTED,
  );

  const toggleGameState = () => {
    switch (gameState) {
      case EGameState.NOT_STARTED:
        setGameState(EGameState.PLAYING);
        break;

      case EGameState.PAUSED:
        setGameState(EGameState.PLAYING);
        break;

      case EGameState.PLAYING:
        setGameState(EGameState.PAUSED);
        break;
    }
  };

  const [turn, setTurn] = useState<Square.Player1 | Square.Player2>(
    Square.Player1,
  );

  const movePiece = (initPos: Position, newPos: Position) => {
    setBoard((board) => {
      const newBoard = board.map((rows) => rows.map((col) => col));
      const piece = newBoard[initPos.y][initPos.x];
      newBoard[newPos.y][newPos.x] = piece;
      newBoard[initPos.y][initPos.x] = 0;
      return newBoard;
    });
  };

  const [movesQueue, setMovesQueue] = useState<Array<MoveQueue>>([]);
  const timer = useRef<NodeJS.Timeout>();

  const aiThink = (board: Board, turn: PlayerIdx) => {
    if (movesQueue.length > 0) {
      const newQueue = [...movesQueue];
      const move = newQueue.shift();
      move && movePiece(move.startPos, move.endPos);
      setMovesQueue(newQueue);
      if (newQueue.length === 0) {
        switch (turn) {
          case Square.Player1:
            setTurn(Square.Player2);
            break;
          case Square.Player2:
            setTurn(Square.Player1);
            break;
        }
      }
    } else {
      const bestMove = getBestMove(board, turn);
      const moveQueue: Array<MoveQueue> = [
        {
          startPos: bestMove.startPosition,
          endPos: bestMove.sequence[0],
        },
      ];
      for (let idx = 1; idx < bestMove.sequence.length; idx++) {
        moveQueue.push({
          startPos: bestMove.sequence[idx - 1],
          endPos: bestMove.sequence[idx],
        });
      }
      setMovesQueue(moveQueue);
    }
  };

  useEffect(() => {
    switch (gameState) {
      case EGameState.PLAYING: {
        timer.current = setTimeout(() => {
          aiThink(board, turn);
        }, 1000);
        break;
      }

      case EGameState.PAUSED: {
        break;
      }

      case EGameState.FINISHED: {
        break;
      }
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn, gameState, movesQueue]);

  return (
    <Layout>
      <Player
        playerName="Player 2"
        color="$green10"
        active={gameState !== EGameState.NOT_STARTED && turn === Square.Player2}
      />
      <BoardGame boardData={board}></BoardGame>
      <Player
        playerName="Player 1"
        color="$blue10"
        active={gameState !== EGameState.NOT_STARTED && turn === Square.Player1}
      />
      <Button onClick={toggleGameState}>
        {gameState === EGameState.PLAYING && (
          <>
            <Icon>
              <FontAwesomeIcon icon={faPause} />
            </Icon>
            Pause
          </>
        )}
        {(gameState === EGameState.NOT_STARTED ||
          gameState === EGameState.PAUSED) && (
          <>
            <Icon>
              <FontAwesomeIcon icon={faPlay} />
            </Icon>
            Start
          </>
        )}
      </Button>
    </Layout>
  );
};

export default AIHalma;

const Icon = mainTheme.styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '10px',
  width: '10px',
  marginInlineEnd: '10px',
});

const Button = mainTheme.styled('button', {
  display: 'flex',
  alignItems: 'center',
  padding: '15px',
  borderRadius: '10px',
  backgroundColor: '#230903',
  color: '#e0e2db',
});
