import React from 'react';
import { HashRouter as BrowserRouter, Switch, Route} from "react-router-dom"; //remove hashrouter alias before deploy or bad times might happen, using hashrouter because browserrouter fails locally when used on files
import './App.css';

import Navbar from './components/Navbar.js'
import Blog from './pages/Blog.js'
import About from './pages/About.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <title>Vector Well Force</title>
        <Navbar />
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
