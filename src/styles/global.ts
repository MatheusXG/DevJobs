import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   * {
    margin:0;
    padding:0;
    outline:none;
    box-sizing:border-box;
    transition:  background-color .3s, color .3s;
    
  }

  body * {
    font-family: 'Kumbh Sans', sans-serif;
    

  }
    
  html {
      font-size: 62.5%;      
  }

  html, body { 
    height:100%; 
    width:100%;
    background-color: ${({ theme }) => theme.colors.background};
;  }

 
`;
