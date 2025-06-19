import React from 'react';
import CourseCard from './CourseCard';
import { proCourses } from '../../utils/DummyData';

const ProCourses = () => {
  return (
    <section className="section-padding bg-gray-50" id='pro-course-section'>
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
            🏆 Professional Courses
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Master Your Craft with Pro Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take your skills to the next level with our comprehensive professional courses. 
            Learn from industry experts and get certified in your chosen craft.
          </p>
        </div>

        {/* Featured Course Highlight */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-4">
                  ⚡ NEWLY LAUNCHED WORKSHOPS
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Certified Resin Art Business Course
                </h3>
                <p className="text-blue-100 mb-6">
                  Join India's biggest ecosystem of Art & Design learning at SO Academia. 
                  Start your own Resin Art Brand.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">112,500+</div>
                    <div className="text-blue-200 text-sm">Students Enrolled</div>
                  </div>
                  <div className="w-px h-12 bg-blue-300"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">4.9★</div>
                    <div className="text-blue-200 text-sm">Course Rating</div>
                  </div>
                </div>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  JOIN RESIN LIVE
                </button>
              </div>
              <div className="relative">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                  <div className="h-48 bg-gradient-to-br from-white to-blue-100 rounded-lg opacity-80 flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">Course Preview</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proCourses.map((course) => (
            <div key={course.id} className="card hover-lift">
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                  <span className="text-white font-semibold">{course.title}</span>
                </div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-medium text-gray-800">
                  {course.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    {course.rating}
                  </span>
                  <span>•</span>
                  <span>{course.students.toLocaleString()} students</span>
                  <span>•</span>
                  <span>By {course.instructor}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">₹{course.price}</span>
                    <span className="text-gray-500 ml-2 line-through">₹{Math.round(course.price * 1.5)}</span>
                  </div>
                  <button className="btn-primary">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="btn-outline text-lg px-8 py-4">
            View All Professional Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProCourses;