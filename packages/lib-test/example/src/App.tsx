import React from 'react';
import Logo from './logo.svg';
import './App.css';

import OnesLib from '../../dist/';
import Theme from './theme.module.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className={`App-header ${Theme['ones-blue-bg']}`}>
        <Logo
          // @ts-ignore
          className="App-logo"
        />
        <OnesLib />
      </header>
    </div>
  );
}

export default App;
