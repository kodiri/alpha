import React, { Component } from 'react';
import './App.css';
import './toolbar.js'; 

class About extends Component {
  render() {
    return (
        <h1>About FestiPal</h1>
        <p>
            FestiPal is a tool for event organisers to create 
            web-apps for festivals.
        </p>
        <p>
            Simply select a design template, add your event
            information and build a stylish, reliable site 
            that can be easily updated.
        </p>
        <p>
            FestiPal sites are responsive for mobile and desktop,
            meaning that your event site will look great across 
            all devices.
        </p>
        <h3>WHY FESTIPAL?</h3>
        <p>
            FestiPal is free and easy to use. It can be updated
            quickly and without hassle. You can connect your 
            FestiPal site to your social media accounts...
        </p>
    );
  }
}


export default About;