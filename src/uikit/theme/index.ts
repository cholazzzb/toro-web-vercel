import { extendTheme } from '@chakra-ui/react';
import buttonTheme from './button';

const theme = extendTheme({
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
    components: buttonTheme

});
export default theme;