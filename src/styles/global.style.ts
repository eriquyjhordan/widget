import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "DM Sans", sans-serif;
  }
  body {
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    font-size: 1.6rem;
  }
`;
