import React from 'react';
import CourseCard from './CourseCard';
import { candleMaking, clockMaking, homeDecor, kitchenAccessories, furnitureMaking } from '../../utils/DummyData'

const AdditionalCategories = () => {
  const categories = [
    {
      id: 'candle-making',
      title: 'Candle Making',
      description: 'Create beautiful, aromatic candles with various techniques',
      courses: candleMaking,
      bgColor: 'from-orange-500 to-red-500'
    },
    {
      id: 'clock-making',
      title: 'Clock Making',
      description: 'Design and craft unique timepieces for your home',
      courses: clockMaking,
      bgColor: 'from-blue-500 to-purple-500'
    },
    {
      id: 'home-decor',
      title: 'Home Decor',
      description: 'Transform your living spaces with handcrafted decorations',
      courses: homeDecor,
      bgColor: 'from-green-500 to-teal-500'
    },
    {
      id: 'kitchen-accessories',
      title: 'Kitchen Accessories',
      description: 'Craft functional and beautiful kitchen items',
      courses: kitchenAccessories,
      bgColor: 'from-pink-500 to-rose-500'
    },
    {
      id: 'furniture-making',
      title: 'Furniture Making',
      description: 'Build stunning furniture pieces with resin and wood',
      courses: furnitureMaking,
      bgColor: 'from-amber-500 to-orange-500'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore More Creative Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover specialized workshops and courses across different creative domains. 
            From home decor to furniture making, we have something for every creative mind.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-16">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Category Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {category.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className={`bg-gradient-to-r ${category.bgColor} rounded-2xl p-6 text-white`}>
                    <h4 className="text-xl font-semibold mb-3">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {category.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          <span>{course.title}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      Explore {category.title}
                    </button>
                  </div>
                </div>

                {/* Courses Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  {category.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="card hover-lift">
                      <div className={`h-32 bg-gradient-to-br ${category.bgColor} flex items-center justify-center`}>
                        <span className="text-white font-semibold text-center px-2">
                          {course.title}
                        </span>
                      </div>
                      <div className="p-4">
                        <h5 className="font-semibold text-gray-900 mb-1">{course.title}</h5>
                        {course.difficulty && (
                          <p className="text-sm text-gray-600 mb-1">
                            Level: {course.difficulty}
                          </p>
                        )}
                        {course.duration && (
                          <p className="text-sm text-gray-500">
                            Duration: {course.duration}
                          </p>
                        )}
                        {course.material && (
                          <p className="text-sm text-gray-600 mt-2">
                            Material: {course.material}
                          </p>
                        )}
                        {course.category && (
                          <p className="text-sm text-gray-600 mt-2">
                            Category: {course.category}
                          </p>
                        )}
                        {course.type && (
                          <p className="text-sm text-gray-600 mt-2">
                            Type: {course.type}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Creative Journey?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their passion into expertise. 
              Choose from hundreds of courses and start creating today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Browse All Courses
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all text-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalCategories;