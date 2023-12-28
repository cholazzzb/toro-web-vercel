import { createContext } from 'react';

import { Config } from '../../useGameConfig';

type Game = {
  config: Config;
};

export const GameContext = createContext<Game>({
  config: {
    players: [],
  },
});
