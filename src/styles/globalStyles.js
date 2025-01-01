import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  body {
     font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    margin: 5px;
  }
  table {
 
    width: 100%;
    border-collapse: collapse;
        border-radius:10px;

  }
  th, td {
    border: 1px solid black;
    padding: 8px;
  }
`;
 
export default GlobalStyles;
