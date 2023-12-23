// NavBar.js

import React from 'react';
import logo from '../assets/logo_transparent.png';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-zinc-500 h-14 font-bold text-black">
      <div className="flex items-center">
        <img src={logo} alt="Logo" style={{width: '6rem', padding: '0.5rem'}} href="#home"/>
      </div>
      <ul className="flex space-x-4">
        <li className="text-sm hover:bg-zinc-400 px-1 py-1 rounded sm:text-lg sm:px-3">
          <a href="#home">Home</a>
        </li>
        <li className="text-sm hover:bg-zinc-400 px-1 py-1 rounded sm:text-lg sm:px-3">
          <a href="#projects">Projects</a>
        </li>
        <li className="text-sm hover:bg-zinc-400 px-1 py-1 rounded sm:text-lg sm:px-3">
          <a href="#about">About Me</a>
        </li>
        <li className="text-sm hover:bg-zinc-400 px-1 py-1 rounded sm:text-lg sm:px-3">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
