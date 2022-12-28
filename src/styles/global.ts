import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
    margin:0;
    padding:0;
    outline:none;
    box-sizing:border-box;    
  }

  body * {
    font-family: ${({ theme }) => theme.font.family};
  }
    
  html {
      font-size: 62.5%;      
  }

  input {
    background-color: ${({ theme }) => theme.colors.background};

  }

  html, body { 
    height: 100%; 
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
