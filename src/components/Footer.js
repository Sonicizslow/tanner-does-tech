//Footer.js

import React from 'react';

function Footer() {
  return (
    <footer class='text-center'>
      <p>
        Connect with me on 
        <a class='font-medium' href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
        <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer"> GitHub</a>
      </p>
      <p>Email me at <a href="mailto:contact@tmillz.dev">contact@tmillz.dev</a></p>
      <p>© {new Date().getFullYear()} Tanner Miller. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
