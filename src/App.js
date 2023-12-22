//App.js

import logo from './assets/logo.svg'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />

      <body class='text-center bg-zinc-900 text-slate-50 font-semibold'>
        <h1 class='text-7xl py-8'>Hi, I'm Tanner</h1>
        <h2 class='text-3xl pb-8'>A dynamic tech enthusiast with a flair for development, cybersecurity, and IT support/operations.</h2>
          <p>
            Here you'll find a collection of my projects, experiance, certifications and education, 
            and my thoughts on the evolving tech landscape.
          </p>

        <h3>My Journey</h3>
          <p>
            From the high-pressure world of emergency services to the dynamic realm of tech,
            my journey is a tale of passion, resilience, and adaptability. Discover how I 
            blend critical care experience with tech expertise.
          </p>
        
        <h3>Portfolio Showcase</h3>
          <p>Explore my diverse range of tech projects, showcasing my skills 
             in software development, cybersecurity, and more.</p>

        <h3>Education & Certifications</h3>
          <p>
            A lifelong learner, here's where I share my educational journey and the 
            certifications that have shaped my tech expertise.
          </p>

        <h3>Blog & Insights</h3>
          <p>
            Dive into my thoughts on technology, where I share insights, 
            trends, and experiences from my tech adventures.
          </p>
      </body>

      <Footer />
    </div>
  );
}

export default App;
