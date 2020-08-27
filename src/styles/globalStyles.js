import { createGlobalStyle } from 'styled-components';
import { colors } from '../styles/utils/colors';

const GlobalStyle = createGlobalStyle`

    html {
        box-sizing: border-box;
        overflow: hidden;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    body {
        width: 100%;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        background-image: linear-gradient(to right, ${colors.backgroundOne} , ${colors.backgroundTwo});
        background-repeat: no-repeat;
        color: ${colors.white};
        font-family: 'Montserrat';
        text-align: center;
    }

    h1, h2, h3, h4, h5, h6 {
        text-shadow: 2px 2px 1px ${colors.dark};
    }

    button {
        padding: 0;
        cursor: pointer;
        font-family: 'Montserrat';
    }
    
    ul {
        padding: 0;
        margin: 0;
    }

`;

export default GlobalStyle;
