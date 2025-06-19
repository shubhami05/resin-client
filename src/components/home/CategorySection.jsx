import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from './CourseCard';
import { categories } from '../../utils/DummyData';

const CategorySection = () => {
  const navigate = useNavigate();

  const handleViewAllClick = (category) => {
    const categoryPath = category.name.toLowerCase().replace(/\s+/g, '-');
    navigate(`/category/${categoryPath}`);
  };

  return (
    <section className="section-padding bg-white" id='category-section'>
      <div className="container-custom">
        {categories.map((category, index) => (
          <div key={category.id} className={`mb-16 ${index !== 0 ? 'pt-16 border-t border-gray-100' : ''}`}>
            {/* Category Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                <p className="text-gray-600">
                  Explore our comprehensive {category.name.toLowerCase()} courses and workshops
                </p>
              </div>
              <button 
                onClick={() => handleViewAllClick(category)}
                className="btn-outline hidden sm:block hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                View All
              </button>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {category.courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {/* Mobile View All Button */}
            <div className="mt-6 sm:hidden">
              <button 
                onClick={() => handleViewAllClick(category)}
                className="btn-outline w-full"
              >
                View All {category.name} Courses
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;