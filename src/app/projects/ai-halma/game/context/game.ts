import { createContext } from 'react';

import { Config } from '../../hook/useGameConfig';

type Game = {
  config: Config;
};

export const GameContext = createContext<Game>({
  config: {
    players: [],
  },
});
