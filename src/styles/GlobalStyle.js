import { createGlobalStyle } from 'styled-components';
import reset from './reset.css';

const GlobalStyle = createGlobalStyle`
${reset};
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  html {
    width: 100vw;
    height: 100vh;
  
    background: linear-gradient(to bottom left, #ffd000, #c300ff);
  }
  
  body {
    height: 100%;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
`;

export default GlobalStyle;
