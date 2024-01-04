//usepagetracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    window.gtag('event', 'page_view', {
      page_path: currentPath,
    });
  }, [location]);
};

export default usePageTracking;
