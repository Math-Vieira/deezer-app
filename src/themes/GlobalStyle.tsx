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
    padding: 0 20px;
  }
  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
      background-color: #f1f1f1;
      border-radius: 10px;
  }

  img {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyle
