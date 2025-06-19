import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ScrollToTop from '../common/ScrollToTop';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;