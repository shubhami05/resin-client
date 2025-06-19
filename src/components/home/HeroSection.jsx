import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white" id='hero-section'>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium">
                🎨 Welcome to XYZ Academia
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master the Art of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Resin Crafting
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join thousands of artists learning professional resin art, concrete crafting, 
                and creative techniques from industry experts. Transform your passion into expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                Start Learning Today
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">112,500+</div>
                <div className="text-gray-400">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">500+</div>
                <div className="text-gray-400">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400">4.9★</div>
                <div className="text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Courses Preview */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="card hover-lift">
                  <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-semibold">Resin Art</span>
                  </div>
                </div>
                <div className="card hover-lift">
                  <div className="h-24 bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <span className="text-white font-semibold">Concrete</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="card hover-lift">
                  <div className="h-24 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                    <span className="text-white font-semibold">Jewellery</span>
                  </div>
                </div>
                <div className="card hover-lift">
                  <div className="h-32 bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-semibold">Culture Art</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#f9fafb"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;