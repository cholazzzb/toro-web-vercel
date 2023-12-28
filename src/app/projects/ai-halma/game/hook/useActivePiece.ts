import { useState } from 'react';

import {
  EndPositionKey,
  Moves,
  Position,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';

export function useActivePiece() {
  const [activePiece, setActivePiece] = useState<Position>();
  const [destinationMap, setDestinationMap] = useState<
    Record<EndPositionKey, Moves>
  >({});

  return { activePiece, destinationMap };
}
