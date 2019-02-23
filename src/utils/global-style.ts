import { createGlobalStyle } from './styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.color.darkgrey};
    font-size: 1.5rem;
    font-family: ${theme.font.body};

    @media (min-width: 900px) {
      background-color: ${theme.color.lightgrey};
    }
  }
  * {
    outline: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 62.5%;
  }
  a {
    text-decoration: none;
  }
`;
