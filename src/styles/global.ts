import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    body {
        background-color: rgb(22, 21, 21);
    }
    p {
        font-size: 16px;
    }
`