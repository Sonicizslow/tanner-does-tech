import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

const NotFoundPage = () => {

  useEffect(() => {
    // Track the page view with ReactGA
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-4">Oops! The page you're looking for isn't here.</p>
      <p className="mb-8">You might have the wrong address, the page may have moved, or I got coffee and forgot to finish it.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700 text-lg font-semibold">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
