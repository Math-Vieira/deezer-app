import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: ease 0.3s;
    text-decoration: none;
  }

  body {
    font-family: 'Saira', sans-serif;
  }

  u {
    list-style: none;
  }

  .centralizer {
    margin: 0 auto;
    max-width: 1100px;
    padding: 0 10px;
  }
`

export default GlobalStyle
