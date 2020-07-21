import React from 'react';
import logofront from './vectorwellforce_logofront.svg';
import logo from './vectorwellforce_logotext.svg';
import logoback from './vectorwellforce_logoback.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>Vector Well Force</title>
      <header className="App-header">
        <div class="logo">
          <img src={logoback} className="App-logo2" alt="logo" />
          <img src={logo} className="App-logo-text" alt="logo" />
          <img src={logofront} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
