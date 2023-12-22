// NavBar.js

import React from 'react';
import logo from '../assets/logo.svg'

const NavBar = () => {
    return (
        <nav>
            <img style={{width: "50px"}} src={logo} />
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>About me</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};  

export default NavBar;