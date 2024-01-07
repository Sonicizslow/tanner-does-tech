// NavBar.js

import React from 'react';
import logo from '../assets/logo_reversed_colors.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-black h-14 font-bold text-zinc-200">
      <div className="flex items-center">
        <Link to="/">
          <img src={logo} alt="Logo" style={{marginLeft: '1rem', width: '3.5rem', background: 'white'}} href="#home"/>
        </Link>
      </div>
      <ul className="flex space-x-2.5">
        <li className="text-sm hover:text-zinc-800 px-1 py-1 rounded sm:text-lg sm:px-3">
          <Link to="/">Home</Link>
        </li>
        <li className="text-sm hover:text-zinc-800 px-1 py-1 rounded sm:text-lg sm:px-3">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="text-sm hover:text-zinc-800 px-1 py-1 rounded sm:text-lg sm:px-3">
          <Link to="/about">About Me</Link>
        </li>
        <li className="text-sm hover:text-zinc-800 px-2 py-1 rounded sm:text-lg sm:px-3">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
