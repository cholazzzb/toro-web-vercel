import { extendTheme } from '@chakra-ui/react';
import buttonTheme from './button';
import colors from './colors';

const theme = extendTheme({
    colors: colors,
    styles: {
        global: {
            "html, body": {
                bg: "rgb(9, 61, 139)",
                color: "white",
                fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
            },
            "*": {
                boxSizing: "border-box",
            },
            a: {
                textDecoration: "none",
            },
        },
    },
    components: {
        Button: buttonTheme
    }
});

export default theme;