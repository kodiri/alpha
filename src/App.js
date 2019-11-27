import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <span>Login</span>
        <span>Logo</span>
        <span>Menu</span>
      </header>

      <main className="wrapper">
        <div className='join-now'>
          <p>FestiPal is the essential digital tool for creating bespoke, user-friendly web-apps.
          <br />
            Designed for festival organisers, from indie events to international parties.
          </p>
          <br /><br />
          <button className='join'>Join now</button>
        </div>
      </main>
      <div className='body'>
        <h1>About FestiPal</h1>
        <br />
        <p>
          FestiPal is a tool for event organisers to create web-apps for festivals.
            <br /><br />Simply select a design template, add your event information and build a stylish, reliable site that can be easily updated.
            <br /><br />FestiPal sites are responsive for mobile and desktop, meaning that your event site will look great across all devices.
            <br /><br />Why FestiPal?
            <br /><br />FestiPal is free and easy to use.It can be updated quickly..blabla. You can connect your FestiPal site to your social media accounts... talk about features
          </p>
      </div>
      <div className='body-end'>
        <br /><br />
        <h1>Created by...</h1>
        <p>- name, github, profile</p>
        <p>- name, github, profile</p>
        <p>- name, github, profile</p>
        <p>- name, github, profile</p>
      </div>
      <footer>
        <p>- logo</p>
        <p>- Get started</p>
        <p>- Login</p>
        <p>- About</p>
      </footer>
      <footer2>
         2019
      </footer2>
    </div>
  );
}

export default App;
