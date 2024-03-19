import { PlayerIdx } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { None, Option, match } from 'src/utils/fp';
import { ResultNotations } from '../hook/useGameResult';

// ----------------------------- //
/**
 * @description format: "moveNumber-playerIdx"
 */
export type NotationKey = string;

export function createNotationKey(notation: Notation) {
  return `${notation.moveNumber}-${notation.playerIdx}`;
}
export const firstNotationKey = createNotationKey({
  moveNumber: 1,
  playerIdx: 1,
});

export function getNextNotationKey(
  notationKey: Option<NotationKey>,
): Option<NotationKey> {
  return match(notationKey, {
    Some(val) {
      const notation = notationKeyToNotation(val)!;
      const nextNotation: Notation = {
        moveNumber:
          notation.playerIdx === 2
            ? notation.moveNumber + 1
            : notation.moveNumber,
        playerIdx: notation.playerIdx === 1 ? 2 : 1,
      };
      return createNotationKey(nextNotation);
    },
    None() {
      return None();
    },
  });
}

// ----------------------------- //
export type Notation = {
  moveNumber: number;
  playerIdx: PlayerIdx;
};

export const initNotation: Notation = {
  moveNumber: 0,
  playerIdx: 2,
};

export const firstNotation: Notation = {
  moveNumber: 1,
  playerIdx: 1,
};

export function isNotationExist(
  notationKey: NotationKey,
  resultNotations: ResultNotations,
): boolean {
  const notation = notationKeyToNotation(notationKey)!;
  const len = resultNotations.length;
  if (notation.moveNumber > len) {
    return false;
  }
  return !!resultNotations[notation.moveNumber - 1][notation.playerIdx];
}

export function getLastNotation(notations: ResultNotations): Notation {
  const len = notations.length;
  const lastMove = notations[len - 1];

  return {
    moveNumber: len,
    playerIdx: lastMove[2] ? 2 : 1,
  };
}

export function getPrevNotation(notation: Notation): Notation {
  return {
    moveNumber:
      notation.playerIdx === 2 ? notation.moveNumber : notation.moveNumber - 1,
    playerIdx: notation.playerIdx === 1 ? 2 : 1,
  };
}

export function getNextNotation(currentNotation: Notation): Notation {
  return {
    moveNumber:
      currentNotation.playerIdx === 2
        ? currentNotation.moveNumber + 1
        : currentNotation.moveNumber,
    playerIdx: currentNotation.playerIdx === 1 ? 2 : 1,
  };
}

export function notationKeyToNotation(
  notationKey: Option<NotationKey>,
): Option<Notation> {
  return match(notationKey, {
    Some(val) {
      const [moveNumber, playerIdx] = val.split('-');

      return {
        moveNumber: Number(moveNumber),
        playerIdx: Number(playerIdx),
      };
    },
    None() {
      return None();
    },
  });
}
