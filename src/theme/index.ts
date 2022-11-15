import { extendTheme } from '@chakra-ui/react';
import { createStitches } from '@stitches/react';
import buttonTheme from './button';
import colors from './colors';

const theme = extendTheme({
  colors: colors,
  styles: {
    global: {
      'html, body': {
        bg: 'rgb(9, 61, 139)',
        color: 'white',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
      },
      '*': {
        boxSizing: 'border-box',
      },
      a: {
        textDecoration: 'none',
      },
    },
  },
  components: {
    Button: buttonTheme,
  },
});

export default theme;

export const mainTheme = createStitches({
  theme: {
    colors: {
      white10: 'rgba(224, 226, 219, 1)',
      white1: 'rgba(224, 226, 219, 0.1)',
      black10: 'rgba(35, 9, 3, 1)',
      blue10: 'rgba(75, 179, 253, 1)',
      gray10: 'rgba(84, 94, 117, 1)',
      gray3: 'rgba(84, 94, 117, 0.3)',
      green10: 'rgba(67, 154, 134, 1)',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
});
