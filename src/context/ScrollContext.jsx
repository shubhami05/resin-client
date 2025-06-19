import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within ScrollProvider');
  }
  return context;
};

export const ScrollProvider = ({ children }) => {
  const [scrollBehavior, setScrollBehavior] = useState('smooth');
  const [excludeRoutes, setExcludeRoutes] = useState([]);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);

  const value = {
    scrollBehavior,
    setScrollBehavior,
    excludeRoutes,
    setExcludeRoutes,
    isAutoScrollEnabled,
    setIsAutoScrollEnabled
  };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollToTopOnRouteChange;