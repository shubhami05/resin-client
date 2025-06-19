import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTopOnRouteChange = (options = {}) => {
  const location = useLocation();
  const {
    behavior = 'smooth',
    excludeRoutes = [],
    delay = 0,
    enabled = true
  } = options;

  useEffect(() => {
    if (!enabled) return;

    const shouldExclude = excludeRoutes.some(route => 
      location.pathname.includes(route)
    );

    if (shouldExclude) return;

    const scrollToTop = () => {
      if (behavior === 'instant') {
        window.scrollTo(0, 0);
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: behavior === 'smooth' ? 'smooth' : 'auto'
        });
      }
    };

    if (delay > 0) {
      const timeoutId = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timeoutId);
    } else {
      scrollToTop();
    }
  }, [location.pathname, behavior, excludeRoutes, delay, enabled]);
};
