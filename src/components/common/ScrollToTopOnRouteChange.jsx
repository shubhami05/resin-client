import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnRouteChange = () => {
  const location = useLocation();

  useEffect(() => {
    // Smooth scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior:'instant'
    });
  }, [location.pathname]);

  return null;
};

export default ScrollToTopOnRouteChange;
