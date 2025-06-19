
// src/components/common/SmoothScrollLink.jsx
import React from 'react';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';

const SmoothScrollLink = ({ 
  to, 
  children, 
  className = '', 
  offset = 80,
  onClick,
  ...props 
}) => {
  const { scrollToSection } = useSmoothScroll();

  const handleClick = (e) => {
    e.preventDefault();
    scrollToSection(to, offset);
    if (onClick) onClick(e);
  };

  return (
    <a 
      href={`#${to}`}
      className={`cursor-pointer ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};

export default SmoothScrollLink;