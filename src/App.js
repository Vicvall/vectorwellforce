import React from 'react';
import logofront from './vectorwellforce_logofront.svg';
import logo from './vectorwellforce_logotext.svg';
import logoback from './vectorwellforce_logoback.svg';
import './App.css';
import loadAbout from './about.js'

function App() {
  return (
    <div className="App">
      <title>Vector Well Force</title>
      <div className="App-header">
        <div className="App-header-menu">
          <div className="Logo">
            <img src={logoback} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo-text" alt="logo" />
            <img src={logofront} className="App-logo" alt="logo" />
          </div>
          <div className="Navigation">
            <button className="NavButton" onClick={loadAbout}>Blog</button>
            <button className="NavButton">About</button>
          </div>
        </div>
      </div>
      <div className="body">
        {loadAbout()}
      </div>
    </div>
  );
}

export default App;
