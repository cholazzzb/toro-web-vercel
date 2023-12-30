import { useState } from 'react';

import { Button } from 'src/components/Button';
import { Glassy } from 'src/components/Glass';
import { Text } from 'src/components/Text';
import {
  PlayerIdx,
  PlayerType,
} from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { Flex } from 'src/styled-system/jsx';
import { grid } from 'src/styled-system/patterns';
import { Config } from '../hook/useGameConfig';
import { SelectPlayerTypeButton } from './component/SelectPlayerTypeButton';

type Props = {
  onClickStart: (config: Config) => void;
};
export function Setup(props: Props) {
  const [players, setPlayers] = useState<Array<PlayerType>>(
    Array(2).fill(undefined),
  );

  const createPlayerHandler = (playerIdx: PlayerIdx, value: PlayerType) => {
    return () => {
      setPlayers((prev) => {
        const next = [...prev];
        next[playerIdx - 1] = value;
        return next;
      });
    };
  };

  const onClick = () => {
    props.onClickStart({
      players,
    });
  };

  return (
    <Glassy direction="column" padding="24px">
      <Text size="lg">Setup Game</Text>
      <Flex direction="column" padding="8px" marginBlockEnd="24px">
        <Text>Player 1</Text>
        <div className={grid({ columns: 2, gap: '24px' })}>
          <SelectPlayerTypeButton
            kind={1}
            active={players[0] === 'Human'}
            onClick={createPlayerHandler(1, 'Human')}>
            Human
          </SelectPlayerTypeButton>
          <SelectPlayerTypeButton
            kind={1}
            active={players[0] === 'AI'}
            onClick={createPlayerHandler(1, 'AI')}>
            AI
          </SelectPlayerTypeButton>
        </div>
      </Flex>

      <Flex direction="column" padding="8px" marginBlockEnd="24px">
        <Text>Player 2</Text>
        <div className={grid({ columns: 2, gap: '24px' })}>
          <SelectPlayerTypeButton
            kind={2}
            active={players[1] === 'Human'}
            onClick={createPlayerHandler(2, 'Human')}>
            Human
          </SelectPlayerTypeButton>
          <SelectPlayerTypeButton
            kind={2}
            active={players[1] === 'AI'}
            onClick={createPlayerHandler(2, 'AI')}>
            AI
          </SelectPlayerTypeButton>
        </div>
      </Flex>

      <Button onClick={onClick}>Start</Button>
    </Glassy>
  );
}
