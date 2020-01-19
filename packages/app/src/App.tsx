import React from 'react';
import logo from './logo.svg';
import './App.css';
import theme from './theme.module.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className={`App-header ${theme['ones-blue-bg']}`}>
        <img src={logo} className="App-logo" alt="logo" />
        HELLO, ONES APP
      </header>
    </div>
  );
}

export default App;

