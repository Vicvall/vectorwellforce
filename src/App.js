import React from 'react';
import logofront from './vectorwellforce_logofront.svg';
import logo from './vectorwellforce_logotext.svg';
import logoback from './vectorwellforce_logoback.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="logo">
          <img src={logoback} className="App-logo2" alt="logo" />
          <img src={logo} className="App-logo-text" alt="logo" />
          <img src={logofront} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
