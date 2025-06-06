import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${theme.colors.corDeFundo};
        color: ${theme.colors.corPrincipal};
    }
`;

export default GlobalStyles;
