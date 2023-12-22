//App.js

import logo from './assets/logo.svg';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import imgbreak from './assets/main_break.png';

function App() {
  return (
    <div className="App bg-zinc-300 text-black">
      <NavBar />

      <body class='text-center font-semibold text-lg'>
        <h1 class='text-7xl py-8 sm:py-14 tracking-[0.75rem] underline'>Hi, I'm Tanner</h1>
        <h2 class='text-2xl pb-10 sm:pb-15 tracking-wide leading-loose italic'>A dynamic tech enthusiast <br className='sm:hidden'/> 
        with a flair for development,<br className='hidden lg:block'/> cybersecurity, and IT support/operations.</h2>

        <img className='w-4/5 mx-auto' src={imgbreak} alt='A dimly lit, dark color, moody desk, featuring a computer screen with code on it'/>
        <p className='py-5 px-8 text-xl'>
            Here you'll find a collection of my projects, experiance, certifications and education, 
            and my thoughts on the evolving tech landscape.
        </p>

{/* Add a picture to the opp side, every other like it's spaced now, then turn to rows not columns, same effect */}

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-8 py-5'>
          <div>
            <h3 className='font-extrabold'>My Journey</h3>
              <p className='pb-5 px-8'>
                From the high-pressure world of emergency services to the dynamic realm of tech,
                my journey is a tale of passion, resilience, and adaptability. Discover how I
                blend critical care experience with tech expertise.
              </p>
          </div>
          <div></div>
          <div></div>
          <div>
            <h3 className='font-extrabold'>Portfolio Showcase</h3>
              <p className='pb-5 px-8'>
                Explore my diverse range of tech projects, showcasing my skills
                  in software development, cybersecurity, and more.
              </p>
          </div>
          <div></div>
          <div></div>
          <div>
            <h3 className='font-extrabold'>Education & Certifications</h3>
              <p className='pb-5 px-8'>
                A lifelong learner, here's where I share my educational journey and the
                certifications that have shaped my tech expertise.
              </p>
          </div>
          <div></div>
          <div></div>
          <div>
            <h3 className='font-extrabold'>Blog & Insights</h3>
              <p className='pb-5 px-8'>
                Dive into my thoughts on technology, where I share insights,
                trends, and experiences from my tech adventures.
              </p>
          </div>
        </div>
        {/* end of grid */}

      </body>

      <Footer />
    </div>
  );
};

export default App;
