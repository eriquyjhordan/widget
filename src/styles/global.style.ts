import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body {
    background: ${({ theme }) => theme.colors.surfacePrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }
`;
