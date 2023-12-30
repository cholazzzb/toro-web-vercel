import { useState } from 'react';

import { Button } from 'src/components/Button';
import Show from 'src/components/Show';
import { Square } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { Config } from '../hook/useGameConfig';
import { GameResult } from '../hook/useGameResult';
import BoardGame from './components/BoardGame';
import Player from './components/Player';
import { GameContext } from './context/game';

export type Turn = Square.Player1 | Square.Player2;

type Props = {
  config: Config;
  gameResult: GameResult;
  onGameFinish: () => void;
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
        playerType={props.config.players[Square.Player2 - 1]}
      />
      <BoardGame turn={turn} endTurn={endTurn} gameResult={props.gameResult} />
      <Player
        playerName="Player 1"
        color="indigo.500"
        active={turn === Square.Player1}
        playerType={props.config.players[Square.Player1 - 1]}
      />
      <Show when={props.gameResult.current.winner !== undefined}>
        <Button onClick={props.onGameFinish}>
          Winner: {props.gameResult.current.winner}. Review
        </Button>
      </Show>
    </GameContext.Provider>
  );
}
