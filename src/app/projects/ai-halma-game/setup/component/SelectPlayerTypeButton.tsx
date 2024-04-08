import { PropsWithChildren } from 'react';

import { PlayerIdx } from 'src/domains/projects/ai-halma/AIHalmaEntity';
import { cva } from 'src/styled-system/css';
import { colorTheme } from 'src/theme';

const button = cva({
  base: {
    width: '70px',
    height: '70px',
    borderRadius: '4px',
  },
  variants: {
    kind: colorTheme,
    active: {
      true: {
        border: '1px solid',
      },
    },
  },
});

type Props = PropsWithChildren<{
  kind: PlayerIdx;
  active?: boolean;
  onClick: () => void;
}>;
export function SelectPlayerTypeButton({
  children,
  onClick,
  ...variant
}: Props) {
  return (
    <button className={button(variant)} onClick={onClick}>
      {children}
    </button>
  );
}
