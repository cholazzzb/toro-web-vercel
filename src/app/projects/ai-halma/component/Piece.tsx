import { Square } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { cva } from 'src/styled-system/css';
import { Flex } from 'src/styled-system/jsx';
import { colorTheme } from 'src/theme';

const pieceCVA = cva({
  base: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
  },
  variants: {
    kind: colorTheme,
  },
  defaultVariants: {
    kind: 0,
  },
});

export function Piece({ enable, piece }: { enable: boolean; piece: Square }) {
  const cursor = enable ? 'pointer' : 'not-allowed';
  return <Flex className={pieceCVA({ kind: piece })} cursor={cursor} />;
}
