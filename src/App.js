import React, { Component } from 'react';
import './App.css';
import Appointments from './Components/appointments';
import Launch from './Components/launch'
import Index from './Components/index'
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route path='/home' component={Index} />
            <Route path='/launch' component={Launch} />
            <Route path='/appointments' component={Appointments} />
          </Switch>
      </Router>
    );
  }
}

export default App;
