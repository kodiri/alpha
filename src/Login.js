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
        <button>Login with Facebook</button>
        <div>or</div>
        <fieldset>
            <input type = 'text' placeholder = 'Email' />
            <input type = 'password' placeholder = 'Password' />
        </fieldset>
        <button>Login</button>
        <button>Create account</button>
    </body>
    )
    }
}
export default App;