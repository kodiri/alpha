import React, { Component } from 'react';
import './App.css';
import './toolbar.js'; 

class login extends Component {
  render() {
    return (
        <button>Login with Facebook</button>
        <div>or</div>
        <fieldset>
            <input type = 'text' placeholder = 'Email' />
            <input type = 'password' placeholder = 'Password' />
        </fieldset>
        <button>Login</button>
        <button>Create account</button>
    );
  }
}
export default login;