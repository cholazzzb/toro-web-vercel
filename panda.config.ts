import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

import { buttonRecipe } from 'src/components/recipes/button';
import { textRecipe } from 'src/components/recipes/text';

const globalCss = defineGlobalStyles({
  html: {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  body: {
    padding: 0,
    margin: 0,
    height: '100vh',
    color: 'white',
  },

  '*': {
    boxSizing: 'inherit',
    scrollbarWidth: 'thin',
    scrollbarColor: 'transparent transparent',
    '&::-webkit-scrollbar': {
      width: '0px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
    },
  },

  '*:before': {
    boxSizing: 'inherit',
  },

  '*:after': {
    boxSizing: 'inherit',
  },

  a: { color: 'inherit', textDecoration: 'none' },

  p: {
    margin: 0,
  },

  'input::placeholder': {
    color: 'white',
    opacity: 1,
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  jsxFramework: 'react',

  // Useful for theme customization
  theme: {
    extend: {
      recipes: {
        text: textRecipe,
        button: buttonRecipe,
      },
      keyframes: {
        moveDown: {
          '0%': { top: '-10rem' },
          '100%': {
            top: '-10rem',
          },
          '80%': {
            top: '50rem',
          },
        },

        moveUp: {
          '0%': { top: '-10rem' },
          '100%': {
            top: '-10rem',
          },
          '80%': {
            top: '50rem',
          },
        },

        moveRight: {
          '0%': {
            left: '-10rem',
          },
          '100%': {
            left: '-10rem',
          },
          '80%': {
            left: '80rem',
          },
        },

        moveLeft: {
          '0%': {
            right: '-10rem',
          },
          '100%': {
            right: '-10rem',
          },
          '80%': {
            right: '80rem',
          },
        },

        movingBg: {
          "0%": {
            backgroundPosition:"0% 50%"
          },
          "50%": {
            backgroundPosition: "100% 50%"
          },
          "100%": {
            backgroundPosition: "0% 50%"
          }
        }
      },
    },
  },

  // The output directory for your css system
  outdir: 'src/styled-system',

  globalCss,
});
