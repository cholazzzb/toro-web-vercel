import { useState } from 'react';

type Step = 'Setup' | 'Game' | 'Review';
export type GameStep = ReturnType<typeof useGameStep>;

export function useGameStep() {
  const [step, setStep] = useState<Step>('Setup');

  const toGame = () => {
    setStep('Game');
  };
  const toReview = () => {
    setStep('Review');
  };

  return {
    current: step,
    handler: {
      onSetupNext: toGame,
      onGameNext: toReview,
    },
  };
}
