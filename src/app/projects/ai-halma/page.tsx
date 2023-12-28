'use client';

import { Game } from './game/Game';
import { Review } from './review/Review';
import { Setup } from './setup/Setup';
import { GameConfig, useGameConfig } from './useGameConfig';
import { GameResult, useGameResult } from './useGameResult';
import { GameStep, useGameStep } from './useGameStep';

const AIHalma = () => {
  const gameStep = useGameStep();
  const gameConfig = useGameConfig();
  const gameResult = useGameResult();

  return renderGame({ gameStep, gameConfig, gameResult });
};

export default AIHalma;

const renderGame = (game: {
  gameStep: GameStep;
  gameConfig: GameConfig;
  gameResult: GameResult;
}) => {
  const { gameStep, gameConfig, gameResult } = game;
  switch (gameStep.current) {
    case 'Setup': {
      const onClickStart = (config: GameConfig['current']) => {
        gameConfig.saveConfig(config!);
        gameStep.handler.onSetupNext();
      };
      return <Setup onClickStart={onClickStart} />;
    }
    case 'Game': {
      return <Game config={gameConfig.current!} />;
    }
    case 'Review': {
      return <Review result={gameResult.current} />;
    }
  }
};
