import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 62.5%; /* 1rem = 10px */
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: 'Inter', -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }

    button {
        padding: 0;
        cursor: pointer;
    }
`
export default GlobalStyle;