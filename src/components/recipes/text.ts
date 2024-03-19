import { defineRecipe } from '@pandacss/dev';

export const textRecipe = defineRecipe({
  className: 'text',
  description: 'The styles for the Text component',
  base: {},
  variants: {
    variant: {
      h1: {
        fontSize: '48px',
        fontWeight: 600,
        letterSpacing: '0.05em',
      },
      h2: {
        fontSize: '36px',
        fontWeight: 600,
        letterSpacing: '0.05em',
      },
      h3: {
        fontSize: '28px',
        fontWeight: 600,
        letterSpacing: '0.05em',
      },
      h4: {
        fontSize: '24px',
        fontWeight: 600,
        letterSpacing: '0.05em',
      },
      h5: {
        fontSize: '22px',
        fontWeight: 600,
        letterSpacing: '0.05em',
      },
      h6: {
        fontSize: '20px',
        fontWeight: 600,
        letterSpacing: '0.05em',
      },
      s1: {
        fontSize: '18px',
        fontWeight: 600,
      },
      s2: {
        fontSize: '16px',
        fontWeight: 600,
      },
      s3: {
        fontSize: '14px',
        fontWeight: 600,
      },
      b1: {
        fontSize: '16px',
        fontWeight: 500,
      },
      b2: {
        fontSize: '16px',
        fontWeight: 400,
      },
      b3: {
        fontSize: '14px',
        fontWeight: 500,
      },
      b4: {
        fontSize: '14px',
        fontWeight: 400,
      },
      b5: {
        fontSize: '12px',
        fontWeight: 400,
      },
    },
    center: {
      true: {
        textAlign: 'center',
      },
    },
  },
  defaultVariants: {
    variant: 'b1',
  },
});
