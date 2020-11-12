import React from 'react';
import { HashRouter as BrowserRouter, Switch, Route} from "react-router-dom"; //remove hashrouter alias before deploy or bad times might happen
import logofront from './vectorwellforce_logofront.svg';
import logo from './vectorwellforce_logotext.svg';
import logoback from './vectorwellforce_logoback.svg';
import './App.css';

import Navbar from './components/Navbar.js'
import Blog from './pages/Blog.js'
import About from './pages/About.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <title>Vector Well Force</title>
        <div className="App-header">
          <div className="App-header-menu">
            <div className="Logo">
              <img src={logoback} className="App-logo" alt="logo" />
              <img src={logo} className="App-logo-text" alt="logo" />
              <img src={logofront} className="App-logo" alt="logo" />
            </div>
            <Navbar />
          </div>
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
