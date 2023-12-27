import { defineRecipe } from '@pandacss/dev';

export const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'The styles for the Button component',
  base: {
    display: 'flex',
    borderColor: 'rgba(255,255,255,0.8)',
    borderWidth: '2px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    shape: {
      square: { height: '70px', width: '70px', borderRadius: '4px' },
      round: { height: '70px', width: '70px', borderRadius: '50%' },
    },
  },
  defaultVariants: {},
});
