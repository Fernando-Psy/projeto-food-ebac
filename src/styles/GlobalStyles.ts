import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
        font-family: 'Roboto', Arial, Helvetica, sans-serif;
        background: #fff;
        color: #333;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul, ol {
        list-style: none;
    }

    button {
        cursor: pointer;
        font-family: inherit;
        border: none;
        background: none;
    }
`

export default GlobalStyles