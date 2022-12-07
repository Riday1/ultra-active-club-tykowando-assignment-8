import React from 'react';
import './Navbar.css'
import logo from '../../logoImage/logo.png'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <img className='nav-logo' src={logo} alt="" />
            <h1 className='nav-title'>Tykowando-Practice-Tracker</h1>
        </nav>
    );
};

export default Navbar;