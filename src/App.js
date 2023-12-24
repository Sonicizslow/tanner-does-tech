import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'; // Import your home page component
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'; // Import your about page component
import ContactPage from './pages/ContactPage'; // Import your contact page component
// ... other imports

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
            {/* Define other routes here */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
