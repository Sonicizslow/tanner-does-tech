// NavBar.js

import React from 'react';
import logo from '../assets/logo_transparent.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-zinc-500 h-14 font-bold text-black">
      <div className="flex items-center">
        <img src={logo} alt="Logo" style={{width: '6rem', padding: '0.5rem'}} href="#home"/>
      </div>
      <ul className="flex space-x-4">
        <li className="text-sm hover:text-zinc-800 px-1 py-1 rounded sm:text-lg sm:px-3">
          <Link to="/">Home</Link>
        </li>
        <li className="text-sm hover:text-zinc-800 px-1 py-1 rounded sm:text-lg sm:px-3">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="text-sm hover:text-zinc-800 px-1 py-1 rounded sm:text-lg sm:px-3">
          <Link to="/about">About Me</Link>
        </li>
        <li className="text-sm hover:text-zinc-800 px-1 py-1 rounded sm:text-lg sm:px-3">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
