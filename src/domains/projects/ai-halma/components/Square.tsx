import { memo } from 'react';

import { styled } from 'styled-system/jsx';

type SquareProps = {
  piece: number;
};

const Square = memo(({ piece }: SquareProps) => {
  return (
    <styled.div
      display="flex"
      border="solid 1px"
      borderColor="$white10"
      width="30px"
      height="30px"
      justifyContent="center"
      alignItems="center"
    >
      <PieceContainer piece={piece} />
    </styled.div>
  );
});

Square.displayName = 'Square';

export default Square;

const PieceContainer = ({ piece }: { piece: number }) => {
  const backgroundColor = (() => {
    switch (piece) {
      case 0:
        return '$black10';
      case 1:
        return '$blue10';
      case 2:
        return '$green10';
      case 3:
        return '$blue10';
      case 4:
        return '$green0';
      default:
        return '$black10';
    }
  })();

  return (
    <styled.span
      display="inline-block"
      width="20px"
      height="20px"
      borderRadius="50%"
      backgroundColor={backgroundColor}
    />
  );
};
