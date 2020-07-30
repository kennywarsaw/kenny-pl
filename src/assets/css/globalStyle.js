import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    html {
        box-sizing: inherit;
        font-size: 62.5%; /* 1rem = 10px */
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