import { useState } from 'react';

import { PlayerType } from 'src/domains/projects/ai-halma/AIHalmaEntity';

type Config = {
  players: Array<PlayerType>;
};
export type GameConfig = ReturnType<typeof useGameConfig>;

export function useGameConfig() {
  const [current, setGameConfig] = useState<Config>();

  const saveConfig = (config: Config) => {
    setGameConfig(config);
  };

  return { current, saveConfig };
}
