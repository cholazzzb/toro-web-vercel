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
import { Config } from '../useGameConfig';

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
      <Flex
        direction="column"
        backgroundColor="indigo.500"
        padding="8px"
        marginBlockEnd="24px">
        <Text>Player 1</Text>
        <div className={grid({ columns: 2, gap: '24px' })}>
          <Button shape="square" onClick={createPlayerHandler(1, 'Human')}>
            Human
          </Button>
          <Button shape="square" onClick={createPlayerHandler(1, 'AI')}>
            AI
          </Button>
        </div>
      </Flex>

      <Flex
        direction="column"
        backgroundColor="pink.600"
        padding="8px"
        marginBlockEnd="24px">
        <Text>Player 2</Text>
        <div className={grid({ columns: 2, gap: '24px' })}>
          <Button shape="square" onClick={createPlayerHandler(2, 'Human')}>
            Human
          </Button>
          <Button shape="square" onClick={createPlayerHandler(2, 'AI')}>
            AI
          </Button>
        </div>
      </Flex>

      <Button onClick={onClick}>Start</Button>
    </Glassy>
  );
}
