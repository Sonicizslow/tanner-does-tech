//HomePage.js
import imgbreak from '../assets/main_break.png';

import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Tanner - Tech Enthusiast</title>
        <meta name="description" content="Welcome to Tanner's personal site, showcasing a diverse range of tech projects and insights. Discover Tanner's journey from emergency services to the tech world, his passion for software development, cybersecurity, and IT operations." />
      </Helmet>


      <div className="App bg-black text-white text-center text-lg">
    
        <header class='text-4xl py-6 sm:py-14 tracking-[0.5rem] font-medium sm:text-7xl'>
          <h1>Hi, I'm Tanner</h1>
        </header>

        <main>
          <h2 class='text-xl pb-10 sm:pb-15 tracking-wide italic font-light sm:text-xl sm:leading-loose'>
            Tech aficionado deeply interested in software development, cybersecurity, and the nuances of IT operations
          </h2>
          <img className='w-4/5 mx-auto' src={imgbreak} alt='A dimly lit, dark color, moody desk, featuring a computer screen with code on it'/>
          <p className='py-5 px-8 text-xl max-w-7xl leading-relaxed mx-auto'>
          Welcome to my personal site, a dynamic mix of ongoing projects, tech creations, and reflections on my journey from emergency services to the tech sphere.
          It's a place where continuous learning meets practical application.
          Here, you'll find not just a portfolio of work, but a living diary of my tech adventures, insights, and the ever-evolving trends that capture my interest.
          </p>
        </main>

      </div>
    </>
  );
};

export default HomePage;
