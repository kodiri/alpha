import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <body>
        <div>
          <div>Login</div>
          <div><img /></div>
          <div>Burger Menu</div>
        </div>
        <button>Sign up with Facebook</button>
        <div>or</div>
        <div>sign up with your email address</div>
        <fieldset>
            <input type = 'text' placeholder = 'Festival name' />
            <input type = 'text' placeholder = 'Email' />
            <input type = 'password' placeholder = 'Password' />
            <input type = 'password' placeholder = 'Confirm Password' />
            <input type = 'checkbox' value = 'I am not a robot' />
        </fieldset>
        <button>Sign Up</button>
    </body>
    )
    }
}
export default App; 