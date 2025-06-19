import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ScrollToTopOnRouteChange from './components/common/ScrollToTopOnRouteChange';


function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;