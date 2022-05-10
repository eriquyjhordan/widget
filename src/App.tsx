import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global.style';
// import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <div className="App">
        <h1>Start application</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
