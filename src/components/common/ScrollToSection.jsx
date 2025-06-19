import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const ScrollToSection = ({ 
  targetId, 
  children, 
  className = '',
  offset = 80,
  ...props 
}) => {
  const { scrollToSection } = useSmoothScroll();

  const handleClick = () => {
    scrollToSection(targetId, offset);
  };

  return (
    <button
      onClick={handleClick}
      className={`focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ScrollToSection;