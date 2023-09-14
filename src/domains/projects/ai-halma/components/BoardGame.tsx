import Square from './Square';

import { Board } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { Flex, styled } from 'styled-system/jsx';

type BoardGameProps = {
  boardData: Board;
};

const BoardGame = ({ boardData }: BoardGameProps) => {
  return (
    <styled.div backgroundColor="black" padding="8px">
      {boardData.map((row, rowIdx) => (
        <Flex key={rowIdx}>
          {row.map((col, colIdx) => (
            <div key={colIdx}>
              <Square piece={col}></Square>
            </div>
          ))}
        </Flex>
      ))}
    </styled.div>
  );
};

export default BoardGame;
