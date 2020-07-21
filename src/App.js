import React from 'react';
import logofront from './vectorwellforce_logofront.svg';
import logo from './vectorwellforce_logotext.svg';
import logoback from './vectorwellforce_logoback.svg';
import { Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <title>Vector Well Force</title>
      <header className="App-header">
          <div className="Logo">
            <img src={logoback} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo-text" alt="logo" />
            <img src={logofront} className="App-logo" alt="logo" />
          </div>
        <div className="Navigation">
          <Button className="NavButton">Button 1</Button>
          <Button className="NavButton">Button 2</Button>
        </div>
      </header>
      <body className="body">
        <p>Testing the font</p>
      </body>
    </div>
  );
}

export default App;
