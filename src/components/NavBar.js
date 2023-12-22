// NavBar.js

import React from 'react';
import logo from '../assets/logo_transparent.png';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-zinc-500 shadow-md">
      <div className="flex items-center">
        <img src={logo} alt="Logo" style={{height: '6rem'}} href="#home"/>
      </div>
      <ul className="flex space-x-4">
        <li className="text-lg hover:bg-gray-700 px-3 py-2 rounded">
          <a href="#home">Home</a>
        </li>
        <li className="text-lg hover:bg-gray-700 px-3 py-2 rounded">
          <a href="#projects">Projects</a>
        </li>
        <li className="text-lg hover:bg-gray-700 px-3 py-2 rounded">
          <a href="#about">About me</a>
        </li>
        <li className="text-lg hover:bg-gray-700 px-3 py-2 rounded">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
