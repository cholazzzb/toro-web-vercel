// UI
import { Layout } from "components/Layout";
import Player from "components/projects/ai-halma/Player";
import { useEffect, useRef, useState } from "react";

// Logic
import { EGameState } from "components/projects/ai-halma/@enum";

// AI
import { Button } from "@chakra-ui/react";
import BoardGame from "components/projects/ai-halma/BoardGame";
import {
  Board,
  MoveQueue,
  Position,
  Square
} from "src/domains/projects/ai-halma/AIHalmaEntity";
import { getBestMove } from "src/domains/projects/ai-halma/AIHalmaLogic";
import { initialBoard } from "src/domains/projects/ai-halma/gameSetting";

const players: string[] = ["Human", "Halmiezzz", "RL"];

const AIHalma = () => {
  const [board, setBoard] = useState<Board>(initialBoard.twoPlayer);
  const [gameState, setGameState] = useState<EGameState>(EGameState.PAUSED);
  const toggleGameState = () => {
    switch (gameState) {
      case EGameState.PAUSED:
        setGameState(EGameState.PLAYING);
        break;

      case EGameState.PLAYING:
        setGameState(EGameState.PAUSED);
        break;
    }
  };
  const [turn, setTurn] = useState<Square.Player1 | Square.Player2>(
    Square.Player1
  );

  const [player1, setPlayer1] = useState<string>(players[0]);
  const handlePlayer1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlayer1(e.target.value);
  };
  const [player2, setPlayer2] = useState<string>(players[0]);
  const handlePlayer2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlayer2(e.target.value);
  };

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

  const aiThink = () => {
    if (movesQueue.length > 0) {
      const newQueue = [...movesQueue];
      const move = newQueue.shift();
      move && movePiece(move.startPos, move.endPos);
      setMovesQueue(newQueue);
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
      switch (turn) {
        case Square.Player1:
          setTurn(Square.Player2);
          break;
        case Square.Player2:
          setTurn(Square.Player1);
          break;
      }
    }

  };

  useEffect(() => {
    switch(gameState){
      case EGameState.PLAYING:{
        timer.current = setTimeout(() => {
          aiThink();
        }, 1000);
        break;
      }

      case EGameState.PAUSED: {
        break;
      }

      case EGameState.FINISHED: {
        break
      }
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, movesQueue]);

  return (
    <Layout>
      <Player
        playerNumber={1}
        player={player1}
        onPlayerChange={handlePlayer1Change}
      />
      <BoardGame boardData={board}></BoardGame>
      <Player
        playerNumber={2}
        player={player2}
        onPlayerChange={handlePlayer2Change}
      />
      <Button variant="primary" onClick={toggleGameState}>Start/Pause</Button>
    </Layout>
  );
};

export default AIHalma;
