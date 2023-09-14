import { defineRecipe } from '@pandacss/dev';

export const textRecipe = defineRecipe({
  className: 'text',
  description: 'The styles for the Text component',
  base: {},
  variants: {
    size: {
      sm: { fontSize: '16px' },
      lg: {
        fontSize: '20px',
        fontWeight: 70,
      },
    },
    center: {
      true: {
        textAlign: 'center',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});
