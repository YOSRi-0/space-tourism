import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './typography';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0; 
    padding: 0;
  }

  body{
    margin: 0;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-family: ${primaryFont};
    -webkit-font-smoothing: antialised;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
    background-color: hsl(${(props) => props.theme.primaryColor});
    font-size: 16px;
  }

  h1,h2,h3,h4,h5,h6, p {
    font-weight: 400;
  }

  img, picture {
    max-width: 100%;
    display:block;
  }

  input, button, textarea, select {
    font: inherit;
  }

  a {
    text-decoration: none;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  @media (prefers-reduced-motion: reduce) {  
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  
`;
