import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Virtuoso } from 'react-virtuoso';

import Show from 'src/components/Show';
import { Text } from 'src/components/Text';
import { Square as SquareType } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { Flex } from 'src/styled-system/jsx';
import { Piece } from '../component/Piece';
import { GameResult } from '../hook/useGameResult';
import { useReviewBoard } from './hook/useReviewBoard';

type Props = {
  result: GameResult['current'];
};

export function Review(props: Props) {
  const { board, currentMove, updateCurrentMove, handler } = useReviewBoard({
    notations: props.result.notations,
  });

  return (
    <Flex direction="column">
      <Flex backgroundColor="black" padding="8px" direction="column">
        {board.map((col, colIdx) => {
          return (
            <Flex key={colIdx} border="10px">
              {col.map((piece, rowIdx) => {
                return <Square key={rowIdx} piece={piece} />;
              })}
            </Flex>
          );
        })}
      </Flex>
      <Flex height="250px" width="100%" marginBlock="12px" direction="column">
        <Flex>
          <Flex width="32px" />

          <Flex grow={1}>
            <Text>Player 1</Text>
          </Flex>
          <Flex grow={1}>
            <Text>Player 2</Text>
          </Flex>
        </Flex>
        <Virtuoso
          style={{
            backgroundColor: 'black',
            height: '100%',
            width: '100%',
          }}
          data={props.result.notations}
          itemContent={(index, move) => {
            const move1 = move[1];
            const move2 = move[2];

            const isMove1Active =
              currentMove.moveNumber === index + 1 &&
              currentMove.playerIdx === 1;

            const isMove2Active =
              currentMove.moveNumber === index + 1 &&
              currentMove.playerIdx === 2;

            const onClickMove1 = () => {
              updateCurrentMove({ moveNumber: index + 1, playerIdx: 1 });
            };

            const onClickMove2 = () => {
              updateCurrentMove({ moveNumber: index + 1, playerIdx: 2 });
            };

            return (
              <Flex
                key={`${move1?.startPosition}-${move1?.endPosition}`}
                paddingBlock="8px"
                width="100%"
                backgroundColor="gray">
                <Flex
                  width="32px"
                  justifyContent="center"
                  backgroundColor="green">
                  <Text>{index + 1}</Text>
                </Flex>
                <Flex width="100%" backgroundColor="blue">
                  <Flex
                    grow={1}
                    border={isMove1Active ? 'white 1px solid' : undefined}
                    onClick={onClickMove1}>
                    <Text>
                      {move1?.startPosition.x},{move1?.startPosition.y}-
                      {move1?.endPosition.x},{move1?.endPosition.y}
                    </Text>
                  </Flex>
                  <Flex
                    grow={1}
                    border={isMove2Active ? 'white 1px solid' : undefined}
                    onClick={onClickMove2}>
                    <Text>
                      {move2?.startPosition.x},{move2?.startPosition.y}-
                      {move2?.endPosition.x},{move2?.endPosition.y}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            );
          }}
        />
        <Flex alignItems="center" justifyContent="space-between">
          <FontAwesomeIcon icon={faPlay} />
          <Flex onClick={handler.onClickFirstMove}>
            <Text weight="bold">{'<<'}</Text>
          </Flex>
          <Flex onClick={handler.onClickPrevMove}>
            <Text weight="bold">{'<'}</Text>
          </Flex>
          <Flex onClick={handler.onClickNextMove}>
            <Text weight="bold">{'>'}</Text>
          </Flex>
          <Flex onClick={handler.onClickLastMove}>
            <Text weight="bold">{'>>'}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function Square({ piece }: { piece: SquareType }) {
  return (
    <Flex
      border="solid 1px"
      width="30px"
      height="30px"
      justifyContent="center"
      alignItems="center">
      <Show when={!!piece}>
        <Piece enable={true} piece={piece} />
      </Show>
    </Flex>
  );
}
