// PageTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTracker = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    window.gtag('event', 'page_view', {
      page_path: currentPath,
    });
  }, [location]);

  return children;
};

export default PageTracker;
