'use client';

import { memo } from 'react';

import { Square as SquareType } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { cva } from 'src/styled-system/css';
import { Flex } from 'src/styled-system/jsx';

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

const pieceCVA = cva({
  base: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
  },
  variants: {
    kind: {
      0: { backgroundColor: 'black' },
      1: { backgroundColor: 'indigo.500' },
      2: { backgroundColor: 'pink.600' },
      3: { backgroundColor: 'green' },
      4: { backgroundColor: 'blue' },
    },
  },
  defaultVariants: {
    kind: 0,
  },
});

const PieceContainer = ({ piece }: { piece: SquareType }) => {
  return <Flex className={pieceCVA({ kind: piece })} />;
};
