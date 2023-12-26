'use client';

import { memo } from 'react';

import { Flex } from 'src/styled-system/jsx';
import { PropertyValue } from 'src/styled-system/types/prop-type';

type SquareProps = {
  piece: number;
};

const Square = memo(({ piece }: SquareProps) => {
  return (
    <Flex
      border="solid 1px"
      borderColor="$white10"
      width="30px"
      height="30px"
      justifyContent="center"
      alignItems="center">
      <PieceContainer piece={piece} />
    </Flex>
  );
});

Square.displayName = 'Square';

export default Square;

const PieceContainer = ({ piece }: { piece: number }) => {
  const backgroundColor: PropertyValue<'backgroundColor'> = (() => {
    switch (piece) {
      case 0:
        return 'black';
      case 1:
        return 'red';
      case 2:
        return 'yellow';
      case 3:
        return 'green';
      case 4:
        return 'blue';
      default:
        return 'black';
    }
  })();

  return (
    <Flex
      display="inline-block"
      width="20px"
      height="20px"
      borderRadius="50%"
      backgroundColor={backgroundColor}
    />
  );
};
