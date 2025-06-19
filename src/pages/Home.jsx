// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import ProCourses from '../components/home/ProCourses';
import LiveWorkshops from '../components/home/LiveWorkshops';
import TrendingWorkshops from '../components/home/TrendingWorkshops';
import AdditionalCategories from '../components/home/AdditionalCategories';
import PricingPlans from '../components/home/PricingPlans';

const Home = () => {
  return (
    <div className="min-h-screen">
      <div id="hero">
        <HeroSection />
      </div>
      <div id="categories">
        <CategorySection />
      </div>
      <div id="pro-courses">
        <ProCourses />
      </div>
      <div id="live-workshops">
        <LiveWorkshops />
      </div>
      <div id="trending">
        <TrendingWorkshops />
      </div>
      <div id="more-categories">
        <AdditionalCategories />
      </div>
      <div id="pricing">
        <PricingPlans />
      </div>
    </div>
  );
};

export default Home;