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
       <form>
           <p>Event Description:</p>
           <textarea></textarea>
           <p>Start Date:</p>
           <input type = 'text' />
           <p>Start Time:</p>
           <input type = 'text' />
           <input type = 'checkbox' value = 'longer than one day?' />
           <p>Event End Date</p>
           <input type = 'text'/>
           <p>End Time:</p>
           <input type = 'text'/>
       </form>
       <button>Continue</button>
    </body>
    )
    }
}
export default App;