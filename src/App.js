import React, { Component } from 'react';

import './App.css';
import 'styles/menu.css';
import 'styles/backdrop.css';
import 'styles/toggle.css';
import 'styles/background.css';

import 'styles/pages.css';
import 'styles/home.css';
import 'styles/instructions.css';
import 'styles/keynotes.css';
import 'styles/past.css';
import 'styles/transitionpanel.css';
import 'styles/menumobile.css';

import {Switch, Route} from 'react-router-dom';
import SiteRoutes from 'routes/SiteRoutes';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={SiteRoutes}/>
        </Switch>
      </div>
    );
  }
}

export default App;
