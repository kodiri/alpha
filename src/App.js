import React, { Component } from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage.js'; 
import AboutPage from './AboutPage/AboutPage.js'; 
import ContactPage from './ContactPage/ContactPage.js';
import Dashboard from './Dashboard/Dashboard.js';



import Navbar from './Navbar/Navbar.js';

class App extends Component {
  render() {
    return (
      <>
       <Navbar />
      <LandingPage />
      <AboutPage />
      <ContactPage />
      <Dashboard />
     
        </>
    );
  }
}

export default App;
