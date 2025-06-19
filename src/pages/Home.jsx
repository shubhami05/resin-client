// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategorySection from '../components/home/CategorySection';
import ProCourses from '../components/home/ProCourses';
import LiveWorkshops from '../components/home/LiveWorkshops';
import TrendingWorkshops from '../components/home/TrendingWorkshops';
import AdditionalCategories from '../components/home/AdditionalCategories';
import PricingPlans from '../components/home/PricingPlans';

const Home = () => {
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  return (
    <div className="min-h-screen w-full overflow-hidden">
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