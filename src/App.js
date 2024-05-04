//App.js

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogListPage from './pages/BlogListPage';
import NotFoundPage from './pages/NotFoundPage';
import PageTracker from './components/pageTracker';

function App() {
  
  return (
    <Router>
      <div className="flex flex-col bg-black text-white min-h-screen">
        {/* <NavBar /> */}
        <CookieConsent />
        <div className='flex-grow'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/Blog" element={<BlogListPage />} />
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
