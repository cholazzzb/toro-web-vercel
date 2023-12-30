'use client';

import { Game } from './game/Game';
import { Review } from './review/Review';
import { Setup } from './setup/Setup';
import { GameConfig, useGameConfig } from './hook/useGameConfig';
import { GameResult, useGameResult } from './hook/useGameResult';
import { GameStep, useGameStep } from './hook/useGameStep';

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
      return (
        <Game
          config={gameConfig.current!}
          gameResult={gameResult}
          onGameFinish={gameStep.handler.onGameNext}
        />
      );
    }
    case 'Review': {
      return <Review result={gameResult.current} />;
    }
  }
};
