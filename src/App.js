//App.js

import logo from './assets/logo.svg';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import imgbreak from './assets/main_break.png';

function App() {
  return (
    <div className="App">
      <NavBar />

      <body class='text-center bg-zinc-900 text-slate-50 font-semibold text-lg'>
        <h1 class='text-7xl py-8 sm:py-14'>Hi, I'm Tanner</h1>
        <h2 class='text-2xl pb-10 sm:pb-15'>A dynamic tech enthusiast <br className='sm:hidden'/> 
        with a flair for development, <br className='hidden 2xl:block'/> cybersecurity, and IT support/operations.</h2>

        <img src={imgbreak}/>
        <p className='py-5 px-8 text-xl'>
            Here you'll find a collection of my projects, experiance, certifications and education, 
            and my thoughts on the evolving tech landscape.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h3 className='font-extrabold'>My Journey</h3>
              <p className='pb-5 px-8'>
                From the high-pressure world of emergency services to the dynamic realm of tech,
                my journey is a tale of passion, resilience, and adaptability. Discover how I
                blend critical care experience with tech expertise.
              </p>
          </div>
          
          <div>
            <h3>Portfolio Showcase</h3>
              <p className='pb-5 px-8'>
                Explore my diverse range of tech projects, showcasing my skills
                  in software development, cybersecurity, and more.
              </p>
          </div>
          <div>
            <h3>Education & Certifications</h3>
              <p className='pb-5 px-8'>
                A lifelong learner, here's where I share my educational journey and the
                certifications that have shaped my tech expertise.
              </p>
          </div>
          <div>
            <h3>Blog & Insights</h3>
              <p className='pb-5 px-8'>
                Dive into my thoughts on technology, where I share insights,
                trends, and experiences from my tech adventures.
              </p>
          </div>
        </div>
        
      </body>

      <Footer />
    </div>
  );
};

export default App;
