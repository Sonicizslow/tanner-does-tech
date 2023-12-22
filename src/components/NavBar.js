// NavBar.js

import React from 'react';
import logo from '../assets/logo_transparent.png'

const NavBar = () => {
    return (
        <nav>
            <img style={{width: "8rem"}} src={logo} />
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