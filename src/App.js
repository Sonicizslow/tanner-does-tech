import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; 
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage'; 
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-38J7V7L4P4"; 

ReactGA.initialize(TRACKING_ID);

function usePageTracking() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
}

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-black text-white min-h-screen">
        <NavBar />

        <div className='flex-grow'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
            {/* Define other routes here */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
