import React, { Component } from 'react';
import './App.css';
import './toolbar.js'; 

class App extends Component {
  render() {
    return (
        <div>
          <button>Sign up</button>
          <p>
            Festipal is the essential digital tool for
            creating bespoke, user-friendly web apps.
          </p>
          <p>
            Designed for festival organisers, from indie 
            events to international parties
          </p>
        </div>
    );
  }
}

export default App;
