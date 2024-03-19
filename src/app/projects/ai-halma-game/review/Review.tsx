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
  const { board, notation, handler } = useReviewBoard({
    resultNotation: props.result.notations,
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
        <Flex border="1px solid" backgroundColor="rgba(0,0,0,0.1)">
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
            borderLeft: '1px solid white',
            borderRight: '1px solid white',
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}
          data={props.result.notations}
          itemContent={(index, move) => {
            const move1 = move[1];
            const move2 = move[2];

            const isMove1Active =
              notation.moveNumber === index + 1 && notation.playerIdx === 1;

            const isMove2Active =
              notation.moveNumber === index + 1 && notation.playerIdx === 2;

            const onClickMove1 = () => {
              handler.onClickNotation({ moveNumber: index + 1, playerIdx: 1 });
            };

            const onClickMove2 = () => {
              handler.onClickNotation({ moveNumber: index + 1, playerIdx: 2 });
            };

            return (
              <Flex
                key={`${move1?.startPosition}-${move1?.endPosition}`}
                paddingBlock="8px"
                width="100%">
                <Flex width="32px" justifyContent="center" alignItems="center">
                  <Text>{index + 1}.</Text>
                </Flex>
                <Flex width="100%">
                  <Flex grow={1} onClick={onClickMove1}>
                    <Flex
                      padding="4px"
                      backgroundColor={
                        isMove1Active ? 'rgba(255,255,255,0.2)' : undefined
                      }>
                      <Text>
                        {move1?.startPosition.x},{move1?.startPosition.y}-
                        {move1?.endPosition.x},{move1?.endPosition.y}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex grow={1} onClick={onClickMove2}>
                    <Flex
                      padding="4px"
                      backgroundColor={
                        isMove2Active ? 'rgba(255,255,255,0.2)' : undefined
                      }>
                      <Text>
                        {move2?.startPosition.x},{move2?.startPosition.y}-
                        {move2?.endPosition.x},{move2?.endPosition.y}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            );
          }}
        />
        <Flex
          alignItems="center"
          justifyContent="space-between"
          border="1px solid"
          backgroundColor="rgba(0,0,0,0.1)">
          <Flex padding="4px">
            <FontAwesomeIcon icon={faPlay} />
          </Flex>
          <Flex padding="4px" onClick={handler.onClickFirstMove}>
            <Text variant="s3">{'<<'}</Text>
          </Flex>
          <Flex padding="4px" onClick={handler.onClickPrevMove}>
            <Text variant="s3">{'<'}</Text>
          </Flex>
          <Flex padding="4px" onClick={handler.onClickNextMove}>
            <Text variant="s3">{'>'}</Text>
          </Flex>
          <Flex padding="4px" onClick={handler.onClickLastMove}>
            <Text variant="s3">{'>>'}</Text>
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
