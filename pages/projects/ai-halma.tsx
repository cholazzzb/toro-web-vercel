import { useState } from "react";
import { Layout } from "components/Layout";
import Board from "components/projects/ai-halma/Board";
import Player from "components/projects/ai-halma/Player";

// 2 players
const initialBoard: number[][] = [
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
  [0, 0, 0, 0, 0, 0, 0, 2, 2, 2],
  [0, 0, 0, 0, 0, 0, 2, 2, 2, 2],
];
// 4 players
// const initialBoard: number[][] = [
//   [1, 1, 1, 1, 0, 0, 3, 3, 3, 3],
//   [1, 1, 1, 0, 0, 0, 0, 3, 3, 3],
//   [1, 1, 0, 0, 0, 0, 0, 0, 3, 3],
//   [1, 0, 0, 0, 0, 0, 0, 0, 0, 3],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [4, 0, 0, 0, 0, 0, 0, 0, 0, 2],
//   [4, 4, 0, 0, 0, 0, 0, 0, 2, 2],
//   [4, 4, 4, 0, 0, 0, 0, 2, 2, 2],
//   [4, 4, 4, 4, 0, 0, 2, 2, 2, 2],
// ];

enum EGameState {
  PLAYING = "PLAYING",
  PAUSE = "PAUSE",
}

const players: string[] = ["Human", "Halmiezzz", "RL"];

const AIHalma = () => {
  const [board, setBoard] = useState<number[][]>(initialBoard);
  const [gameState, setGameState] = useState<string>(EGameState.PAUSE);

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
      <button
        onClick={() => {
          movePiece([0, 0], [5, 5]);
        }}
      >
        Start
      </button>
    </Layout>
  );
};

export default AIHalma;
