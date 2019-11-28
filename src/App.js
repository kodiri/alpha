import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage.js'; 
import AboutPage from './Components/AboutPage/AboutPage.js'; 
import ContactPage from './Components/ContactPage/ContactPage.js';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Navbar from './Components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Navbar />
              <LandingPage />
            </Route>
            <Route exact path='/about'>
              <AboutPage />
              <ContactPage />
            </Route>
            <Route exact path='/:dashboard'>
              <Dashboard />
            </Route>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
