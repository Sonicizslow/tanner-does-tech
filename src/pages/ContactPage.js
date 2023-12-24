// ContactPage.js
import React from 'react';
// You might want to import icons for each platform from a library like `react-icons`

import { FaEnvelope, FaHackerrank, FaLinkedin, FaApple, FaGithub } from 'react-icons/fa';

function ContactPage() {
  return (
    <div className="App bg-black text-white text-center py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-10">
        {/* Header and intro text in the first column span */}
        <div className="col-span-1 lg:col-span-1 p-5">
          <h1 className="text-4xl font-bold mb-5">Get in touch</h1>
          <p className="text-xl leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just to chat about tech. 
            Feel free to connect with me through any of the following channels:
          </p>
        </div>
        
        {/* Contact methods in the next column span, horizontally laid out */}
        <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-x-6 gap-y-16">
          {/* Email contact card */}
          <a href="mailto:your-email@example.com" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <FaEnvelope className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">Email</h2>
          </a>

          {/* LinkedIn contact card */}
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <FaLinkedin className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">LinkedIn</h2>
          </a>

          

          {/* GitHub contact card */}
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <FaGithub className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">GitHub</h2>
          </a>

          {/* App Store contact card */}
          <a href="https://apps.apple.com/developer/your-developer-id" target="_blank" rel="noopener noreferrer" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <FaApple className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">App Store</h2>
          </a>

          {/* HackerRank contact card */}
          <a href="https://www.hackerrank.com/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <FaHackerrank className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">HackerRank</h2>
          </a>

          {/* Additional contact card, for other methods like a personal blog or portfolio */}
          {/* Add your own URL and choose an appropriate icon */}
          <a href="https://yourpersonalblog.com" target="_blank" rel="noopener noreferrer" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            {/* Icon placeholder - choose an appropriate one */}
            <div className="text-4xl mb-2">🌐</div> 
            <h2 className="text-lg sm:text-2xl font-semibold">Blog/Portfolio</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
