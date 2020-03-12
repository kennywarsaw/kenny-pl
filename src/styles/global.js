import { createGlobalStyle } from 'styled-components';
import HelveticaNowWoff2 from 'assets/fonts/HelveticaNowDisplay-Thin.woff2';
import HelveticaNowWoff from 'assets/fonts/HelveticaNowDisplay-Thin.woff';
import HelveticaNowTtf from 'assets/fonts/HelveticaNowDisplay-Thin.ttf';


const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Helvetica Now';
        src:    url(${HelveticaNowWoff2}) format('woff2'),
                url(${HelveticaNowWoff}) format('woff'),
                url(${HelveticaNowTtf}) format('truetype');
        font-weight: normal;
    }

    *, *::before, *:after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Helvetica Now', sans-serif;
    }
`;

export default GlobalStyle;