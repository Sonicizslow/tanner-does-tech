// ContactPage.js

import { Helmet } from 'react-helmet';
import { FaEnvelope, FaHackerrank, FaBox, FaLinkedin, FaApple, FaGithub } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';

function ContactPage() {
  
  return (
    <>
    <Helmet>
      <title>Contact Tanner Miller - Get in Touch</title>
      <meta name="description" content="Connect with Tanner for opportunities, collaborations, or tech discussions. Reach out via email, LinkedIn, GitHub, or other social platforms." />
    </Helmet>


    <div className="text-white text-center py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-10">
        {/* Header and intro text in the first column span */}
        <header className="col-span-1 lg:col-span-1 p-5">
          <h1 className="text-4xl font-bold mb-5">Get in touch</h1>
          <p className="text-xl leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just to chat about tech. 
            Feel free to connect with me through any of the following channels:
          </p>
        </header>
        
        {/* Contact methods in the next column span, horizontally laid out */}
        <main className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-x-6 gap-y-16">
          {/* Email contact card */}
          <a href="mailto:contact@tmillz.dev" aria-label="Email" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <FaEnvelope className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">Email</h2>
          </a>

          {/* LinkedIn contact card */}
          <a href="https://www.linkedin.com/in/tanner-k-miller/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <FaLinkedin className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">LinkedIn</h2>
          </a>


          {/* GitHub contact card */}
          <a href="https://github.com/Sonicizslow" target="_blank" rel="noopener noreferrer" aria-label="Github" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <FaGithub className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">GitHub</h2>
          </a>

          {/* App Store contact card */}
          <a href="https://apps.apple.com/us/developer/tanner-miller/id1669843036" target="_blank" rel="noopener noreferrer" aria-label="Apple App Store" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <FaApple className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">App Store</h2>
          </a>

          {/* HackTheBox contact card */}
          <a href="https://app.hackthebox.com/profile/490601" target="_blank" rel="noopener noreferrer" aria-label="Hack The Box" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <FaBox className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">Hack The Box</h2>
          </a>

          {/* TryHackMe contact card */}
          <a href="https://tryhackme.com/p/Tmillz57" target="_blank" rel="noopener noreferrer" aria-label="Try Hack Me" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <MdSecurity className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">Try Hack me</h2>
          </a>

          {/* HackerRank contact card */}
          <a href="https://www.hackerrank.com/profile/sonicizslow" target="_blank" rel="noopener noreferrer" aria-label="Hacker Rank" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            <FaHackerrank className="text-4xl mb-2" />
            <h2 className="text-lg sm:text-2xl font-semibold">HackerRank</h2>
          </a>

          {/* Additional contact card, for other methods like a personal blog or portfolio */}
          {/* Add your own URL and choose an appropriate icon */}
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" aria-label="Blog, coming soon" className="contact-card bg-zinc-800 p-10 rounded-lg flex flex-col items-center justify-center hover:text-gray-300">
            {/* Icon placeholder - choose an appropriate one */}
            <div className="text-4xl mb-2">🌐</div> 
            <h2 className="text-lg sm:text-2xl font-semibold">Blog<br/>(Coming soon)</h2>
          </a>
        </main>
      </div>
    </div>
    </>
  );
}

export default ContactPage;
