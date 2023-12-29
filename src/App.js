import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage'; 
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage'; 
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('G-38J7V7L4P4');
    // Track the initial pageview
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    // Track pageview on location change
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  usePageTracking();


  return (
    <Router>
      <div className="flex flex-col bg-black text-white min-h-screen">
        <NavBar />
        <CookieConsent />
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
