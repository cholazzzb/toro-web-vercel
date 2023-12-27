import Square from './Square';

import { Board } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { Flex } from 'src/styled-system/jsx';

type BoardGameProps = {
  boardData: Board;
};

const BoardGame = ({ boardData }: BoardGameProps) => {
  return (
    <Flex backgroundColor="black" padding="8px" direction="column">
      {boardData.map((row, rowIdx) => {
        return (
          <Flex key={rowIdx} border="10px">
            {row.map((col, colIdx) => (
              <Flex key={colIdx} >
                <Square piece={col}></Square>
              </Flex>
            ))}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default BoardGame;
