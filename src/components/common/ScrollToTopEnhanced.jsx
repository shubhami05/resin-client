import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopEnhanced = ({ 
  behavior = 'smooth', // 'smooth' | 'instant' | 'auto'
  excludeRoutes = [], // Routes to exclude from auto-scroll
  delay = 0 // Delay in ms before scrolling
}) => {
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Check if current route should be excluded
    const shouldExclude = excludeRoutes.some(route => 
      location.pathname.includes(route)
    );

    if (shouldExclude) return;

    const scrollToTop = () => {
      setIsScrolling(true);
      
      if (behavior === 'instant') {
        window.scrollTo(0, 0);
        setIsScrolling(false);
      } else {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: behavior === 'smooth' ? 'smooth' : 'auto'
        });
        
        // Reset scrolling state after animation completes
        setTimeout(() => setIsScrolling(false), 500);
      }
    };

    if (delay > 0) {
      const timeoutId = setTimeout(scrollToTop, delay);
      return () => clearTimeout(timeoutId);
    } else {
      scrollToTop();
    }
  }, [location.pathname, behavior, excludeRoutes, delay]);

  // Optional: You can return a loading indicator if needed
  return isScrolling ? (
    <div className="fixed top-20 right-8 z-50 bg-blue-600 text-white px-3 py-1 rounded-full text-sm shadow-lg animate-pulse">
      Scrolling...
    </div>
  ) : null;
};

export { ScrollToTopEnhanced };