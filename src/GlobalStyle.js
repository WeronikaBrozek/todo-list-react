import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        background-color: #ebe9e9;
        margin: auto;
        padding: 10px;
        max-width: 1000px;
        font-family: 'Montserrat', sans-serif;
    }
`;