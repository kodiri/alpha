import React, { Component } from 'react';
import './App.css';
import './toolbar.js'; 

class Signup extends Component {
  render() {
    return (
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
    );
    }
}
export default Signup; 