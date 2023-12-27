import { defineRecipe } from '@pandacss/dev';

export const textRecipe = defineRecipe({
  className: 'text',
  description: 'The styles for the Text component',
  base: {},
  variants: {
    weight: {
      regular: { fontWeight: 300 },
      bold: { fontWeight: 500 },
    },
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
    weight: "regular"
  },
});
