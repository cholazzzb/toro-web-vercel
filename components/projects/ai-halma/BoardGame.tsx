import Square from './Square';

import { Board } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { mainTheme } from 'src/theme';

type BoardGameProps = {
  boardData: Board;
};

const BoardGame = ({ boardData }: BoardGameProps) => {
  return (
    <Board>
      {boardData.map((row, rowIdx) => (
        <Row key={rowIdx}>
          {row.map((col, colIdx) => (
            <div key={colIdx}>
              <Square piece={col}></Square>
            </div>
          ))}
        </Row>
      ))}
    </Board>
  );
};

export default BoardGame;

const Board = mainTheme.styled('div', {
  backgroundColor: 'black',
  padding: '8px',
});

const Row = mainTheme.styled('div', {
  display: 'flex',
});
