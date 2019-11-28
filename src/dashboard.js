import React, { Component } from 'react';
import './App.css';
import './toolbar.js'; 

class dashboard extends Component {
  render() {
    return (
        <h1>Welcome to Hogsozzle's dashboard</h1>
        <div>Edit schedule</div>
        <div>Ticket hub (Eventbrite/Ticketmaster iframes)</div>
        <div>Location map, parking, access</div>
        <div>Weather</div>
        <div>Catering / options available</div>
        <div>View site metrics</div> 
    );
    }
}
export default dashboard;