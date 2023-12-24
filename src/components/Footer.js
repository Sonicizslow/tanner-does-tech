//Footer.js

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-center bg-zinc-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-4">
          <a 
            className="text-white hover:text-blue-300 font-medium" 
            href="https://www.linkedin.com/in/tanner-k-miller/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          
          <a 
            className="text-white hover:text-gray-300" 
            href="https://github.com/Sonicizslow" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>

          <a 
            className="text-white hover:text-green-300" 
            href="mailto:contact@tmillz.dev"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <p className="text-xs mt-6">
          © {new Date().getFullYear()} Tanner Miller. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

