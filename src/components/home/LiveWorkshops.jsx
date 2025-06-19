import React from 'react';
import CourseCard from './CourseCard';
import { liveWorkshops } from '../../utils/DummyData';

const LiveWorkshops = () => {
  return (
    <section className="section-padding bg-white" id='live-workshop-section'>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-medium mb-4">
            🔴 Live Now
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Live Workshops
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our interactive live workshops and learn directly from expert instructors. 
            Limited seats available - book your spot now!
          </p>
        </div>

        {/* Live Workshops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveWorkshops.map((workshop) => (
            <div key={workshop.id} className="card hover-lift group">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-center px-4">{workshop.title}</span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  LIVE
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-gray-800">
                  {workshop.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{workshop.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 flex items-center justify-center">📅</span>
                    <span>{new Date(workshop.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 flex items-center justify-center">⏰</span>
                    <span>{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 flex items-center justify-center">👨‍🏫</span>
                    <span>By {workshop.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 flex items-center justify-center">👥</span>
                    <span>{workshop.spots} spots remaining</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-red-600">₹{workshop.price}</span>
                  </div>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't Miss Out on Live Learning!
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our live workshops fill up quickly. Get notified about upcoming sessions 
              and secure your spot before they're gone.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Get Workshop Alerts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveWorkshops;