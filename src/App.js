import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import Menu from './menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Menu/>

      <Switch>
      <Route exact path="/" component={Home}/>
      </Switch>
      </div>
    );
  }
}

export default App;
