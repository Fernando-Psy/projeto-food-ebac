import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        width: 100%;
        background-color: ${theme.colors.corDeFundo};
        color: ${theme.colors.corPrincipal};
    }
`;

export default GlobalStyles;
