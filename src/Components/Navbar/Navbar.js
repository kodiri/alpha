import React from 'react';
import './Navbar.css';
import logo from '../../images/Logos/yellowEnglebert.png';
import menu from './menu.png';

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            menu: 'menuClosed',
            opacity: 'opacityOn',
        };
    }

    toggleMenu() {
        this.state.menu === 'menuClosed' ?
            this.setState({ menu: 'menuOpen', opacity: 'opacityOff' }) :
            this.setState({ menu: 'menuClosed', opacity: 'opacityOn' });
    }

    render() {
        return (
            <>
                <header className="app-header" id={this.state.opacity}>
                    <span>Login</span>
                    <span><img src={logo} alt='logo' /></span>
                    <span><button id='burgerButton' onClick={() => this.toggleMenu()}><img id='burger' src={menu} alt='menu' /></button></span>
                </header>

                <div className={this.state.menu} >
                    <div className='menu' id='menuShow'>
                        <a className="menuItem topItem" href="/signup" onClick={() => { this.toggleMenu() }}>Sign up</a>
                        <a className="menuItem" href="/login" onClick={() => { this.toggleMenu() }}>Login</a>
                        <a className="menuItem" href="/about" onClick={() => { this.toggleMenu() }}>About</a>
                    </div>
                </div>

            </>
        )
    }
}

export default Navbar; 