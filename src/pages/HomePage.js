//HomePage.js
import imgbreak from '../assets/main_break.png';
import { Helmet } from 'react-helmet';
import PageTracker from '../components/pageTracker';

function HomePage() {
  return (
    <>
    <PageTracker />
      <Helmet>
        <title>Tanner - Tech Enthusiast</title>
        <meta name="description" content="Welcome to Tanner's site, showcasing tech projects, interests and insights. Discover Tanner's journey from emergency services to the tech world, his passion for software development, cybersecurity, and IT operations." />
      </Helmet>


      <div className="text-white text-center text-lg">
    
        <header class='text-4xl py-6 sm:py-14 tracking-[0.5rem] font-medium sm:text-7xl'>
          <h1>Hi, I'm Tanner</h1>
        </header>

        <main>
          <h2 class='text-xl pb-10 sm:pb-15 tracking-wide italic font-light sm:text-xl sm:leading-loose'>
          Tech nerd with experience in IT operations and support, with an interest in cyber security, software development, and machine learning. 
          </h2>
          <img className='w-4/5 mx-auto' src={imgbreak} alt='A dimly lit, dark color, moody desk, featuring a computer screen with code on it'/>
          <p className='py-5 px-8 text-xl max-w-7xl leading-relaxed mx-auto'>
          Welcome to my ongoing project of my personal site! You’ll find a collection of projects, insights and whatever else I happen to find interesting at the time. 
          </p>
        </main>

      </div>
    </>
  );
};

export default HomePage;
