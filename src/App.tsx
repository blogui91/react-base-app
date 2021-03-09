import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import useAuth from 'hooks/useAuth';

function App() {
  const { user } = useAuth();

  return (
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
          Hello {user.full_name}
        </a>
      </header>
    </div>
  );
}

export default App;
