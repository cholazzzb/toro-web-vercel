import { memo } from 'react';
import { mainTheme } from 'src/theme';

type SquareProps = {
  piece: number;
};

const Square = memo(({ piece }: SquareProps) => {
  return (
    <SquareContainer>
      <PieceContainer piece={piece} />
    </SquareContainer>
  );
});

Square.displayName = 'Square';

export default Square;

const SquareContainer = mainTheme.styled('div', {
  display: 'flex',
  border: 'solid 1px',
  borderColor: '$white10',
  width: '30px',
  height: '30px',
  justifyContent: 'center',
  alignItems: 'center',
});

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

  const Piece = mainTheme.styled('span', {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor,
  });

  return <Piece />;
};
