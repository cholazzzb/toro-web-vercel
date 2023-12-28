import { defineRecipe } from '@pandacss/dev';

import { colorTheme } from 'src/theme';

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    display: 'flex',
    borderColor: 'rgba(255,255,255,0.8)',
    borderWidth: '1px',
    borderRadius: '4px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    shape: {
      square: { height: '70px', width: '70px', borderRadius: '4px' },
      round: { height: '70px', width: '70px', borderRadius: '50%' },
    },
    kind: { 0: {}, 1: colorTheme[1], 2: colorTheme[2] },
  },
  compoundVariants: [
    {
      kind: 1,
      css: colorTheme[1],
    },
    {
      kind: 2,
      css: colorTheme[2],
    },
  ],
  defaultVariants: {},
});
