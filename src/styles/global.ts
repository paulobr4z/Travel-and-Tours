import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
    scrollbar-width: none;
  }
  
  body, input, button {
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;