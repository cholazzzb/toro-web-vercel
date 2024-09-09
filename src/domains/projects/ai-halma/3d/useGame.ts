import { SplineEvent } from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import { useRef, useState } from 'react';

import { splineNameToPieceName, squaresMap } from './bridge';
import { Piece } from './entity';

export function useGame() {
  const splineApp = useRef<Application>();
  const [activePiece, setActivePiece] = useState<Piece>();

  const onLoad = (app: Application) => {
    splineApp.current = app;
    // setup all position for squares
    for (const objectName of Object.keys(squaresMap)) {
      const square = app.findObjectByName(objectName);

      if (!square) continue;
      const position = squaresMap[objectName];
      square.position.x = position.x;
      square.position.z = position.z;
    }
  };

  const onSplineMouseDown = (event: SplineEvent) => {
    const pieceName = splineNameToPieceName(event.target.name);
    setActivePiece(pieceName);
  };

  return {
    splineApp,
    scene: 'http://localhost:3000/api/projects/ai-halma-3d',
    onLoad,
    onSplineMouseDown,
  };
}
