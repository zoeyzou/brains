import { createGlobalStyle } from './styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  html, body, div#root {
    width: 100%;
    height: 100%;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.5rem;
    font-family: ${theme.font.body};
  }

  div#root {
    background-color: ${theme.color.grey};

    @media (min-width: 568px) {
      background-color: ${theme.color.lightgrey};
    }
  }

  * {
    outline: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;
