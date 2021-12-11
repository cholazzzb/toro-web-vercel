// UI
import { useEffect, useState } from "react";
import { Layout } from "components/Layout";
import Board from "components/projects/ai-halma/Board";
import Player from "components/projects/ai-halma/Player";


// Logic
import { EGameState, initBoard4Players } from "components/projects/ai-halma/constant";

const players: string[] = ["Human", "Halmiezzz", "RL"];

const AIHalma = () => {
  const [board, setBoard] = useState<number[][]>(initBoard4Players);
  const [gameState, setGameState] = useState<string>(EGameState.PAUSE);
  const toggleGameState = () => {
    if (gameState === EGameState.PAUSE) {
      setGameState(EGameState.PLAYING);
    } else {
      setGameState(EGameState.PAUSE);
    }
  };

  const [player1, setPlayer1] = useState<string>(players[0]);
  const handlePlayer1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlayer1(e.target.value);
  };
  const [player2, setPlayer2] = useState<string>(players[0]);
  const handlePlayer2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlayer2(e.target.value);
  };

  const movePiece = (initPos: number[], newPos: number[]) => {
    setBoard((board) => {
      const newBoard = [...board];
      const piece = newBoard[initPos[0]][initPos[1]];
      newBoard[newPos[0]][newPos[1]] = piece;
      newBoard[initPos[0]][initPos[1]] = 0;
      return newBoard;
    });
  };

  useEffect(() => {
    if (gameState === EGameState.PLAYING) {
      const interval = setInterval(() => {
        movePiece([0, 0], [5, 5]);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameState]);

  return (
    <Layout>
      <Player
        playerNumber={1}
        player={player1}
        onPlayerChange={handlePlayer1Change}
      />
      <Board boardData={board}></Board>
      <Player
        playerNumber={2}
        player={player2}
        onPlayerChange={handlePlayer2Change}
      />
      <button onClick={toggleGameState}>Start</button>
    </Layout>
  );
};

export default AIHalma;
