import { useState } from 'react';

import { Square } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { Config } from '../useGameConfig';
import BoardGame from './components/BoardGame';
import Player from './components/Player';
import { GameContext } from './context/game';

export type Turn = Square.Player1 | Square.Player2;

type Props = {
  config: Config;
};
export function Game(props: Props) {
  const [turn, setTurn] = useState<Turn>(Square.Player1);

  const endTurn = () => {
    setTurn((prev) => {
      const next = (prev % 2) + 1;
      return next;
    });
  };

  return (
    <GameContext.Provider value={props}>
      <Player
        playerName="Player 2"
        color="pink.600"
        active={turn === Square.Player2}
      />
      <BoardGame turn={turn} endTurn={endTurn} />
      <Player
        playerName="Player 1"
        color="indigo.500"
        active={turn === Square.Player1}
      />
    </GameContext.Provider>
  );
}
