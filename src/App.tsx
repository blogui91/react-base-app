import React from 'react';
import logo from './logo.svg';
import config from './config';
import { Button } from 'antd';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button>Hello</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {config.api_url} Hello
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
