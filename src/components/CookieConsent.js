// CookieConsent.js
import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent === null) {
      setShowBanner(true);
    }
  }, []);

  const handleConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
    // Enable analytics here if using
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-500 text-black p-4 text-center">
      <p className="text-sm sm:text-base">
        We use cookies for analytics and user experience.
        <button 
          onClick={handleConsent} 
          className="ml-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
        >
          Accept
        </button>
      </p>
    </div>
  );
};

export default CookieConsent;
