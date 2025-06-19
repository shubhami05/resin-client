import React from 'react';
import CourseCard from './CourseCard';
import { trendingWorkshops } from '../../utils/DummyData';

const TrendingWorkshops = () => {
  return (
    <section className="section-padding bg-gray-900 text-white" id='trending-workshop-section'>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-500 bg-opacity-20 rounded-full text-yellow-400 text-sm font-medium mb-4">
            🔥 Most Popular
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Trending Workshops
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover what's hot in the crafting world. These workshops are loved by thousands 
            of students and are perfect for both beginners and advanced learners.
          </p>
        </div>

        {/* Trending Number Display */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div 
                key={num} 
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg
                  ${num <= 3 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                    : 'bg-gray-700 text-gray-300'
                  }`}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* Trending Workshops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingWorkshops.map((workshop) => (
            <div key={workshop.id} className="relative">
              <CourseCard 
                course={workshop} 
                variant="trending" 
                showRank={true}
              />
            </div>
          ))}
        </div>

        {/* Featured Trending Course */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-gray-900">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-4">
                  🏆 #1 Trending Now
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Ocean Waves Resin Art
                </h3>
                <p className="text-gray-800 mb-6 text-lg">
                  Create stunning ocean-inspired resin art pieces. This workshop has been 
                  trending for 6 months straight with over 3,200 happy students!
                </p>
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-gray-700 text-sm">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">3,200+</div>
                    <div className="text-gray-700 text-sm">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">₹399</div>
                    <div className="text-gray-700 text-sm">Price</div>
                  </div>
                </div>
                <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                  Join This Trending Workshop
                </button>
              </div>
              <div className="relative">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold text-xl">Ocean Waves</span>
                  </div>
                </div>
                {/* Floating rank badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  #1
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
            Explore All Trending Workshops
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingWorkshops;