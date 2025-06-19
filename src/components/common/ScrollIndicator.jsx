import React, { useState, useEffect } from 'react';

const ScrollIndicator = ({ className = '' }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className={`fixed top-0 left-0 h-1 bg-gray-200 z-50 ${className}`}>
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollIndicator;