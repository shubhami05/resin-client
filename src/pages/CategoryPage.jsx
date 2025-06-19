// src/pages/CategoryPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CourseCard from '../components/home/CourseCard';
import { categories } from '../utils/DummyData';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [filterBy, setFilterBy] = useState('all');
  const [loading, setLoading] = useState(true);

  // Find category by ID or name
  useEffect(() => {
    const foundCategory = categories.find(cat => 
      cat.id.toString() === categoryId || 
      cat.name.toLowerCase().replace(/\s+/g, '-') === categoryId
    );
    
    if (foundCategory) {
      setCategory(foundCategory);
      setFilteredCourses(foundCategory.courses);
    }
    setLoading(false);
  }, [categoryId]);

  // Filter and sort courses
  useEffect(() => {
    if (!category) return;

    let filtered = [...category.courses];

    // Apply filters
    if (filterBy !== 'all') {
      filtered = filtered.filter(course => {
        if (filterBy === 'beginner') return course.level === 'Beginner';
        if (filterBy === 'intermediate') return course.level === 'Intermediate';
        if (filterBy === 'advanced') return course.level === 'Advanced';
        if (filterBy === 'free') return course.price === 0;
        if (filterBy === 'paid') return course.price > 0;
        return true;
      });
    }

    // Apply sorting
    if (sortBy === 'popularity') {
      filtered.sort((a, b) => (b.students || 0) - (a.students || 0));
    } else if (sortBy === 'price-low') {
      filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    }

    setFilteredCourses(filtered);
  }, [category, sortBy, filterBy]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const getCategoryGradient = (categoryName) => {
    const gradients = {
      'Alcoholic Ink': 'from-purple-600 to-pink-600',
      'Deco Concrete': 'from-gray-600 to-gray-800',
      'Culture Building': 'from-orange-600 to-red-600',
      'Entrepreneurship Sessions': 'from-blue-600 to-indigo-600'
    };
    return gradients[categoryName] || 'from-blue-600 to-purple-600';
  };

  const getCategoryIcon = (categoryName) => {
    const icons = {
      'Alcoholic Ink': '🎨',
      'Deco Concrete': '🏗️',
      'Culture Building': '🕉️',
      'Entrepreneurship Sessions': '💼'
    };
    return icons[categoryName] || '🎯';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${getCategoryGradient(category.name)} text-white`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm mb-8">
              <button 
                onClick={() => navigate('/')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Home
              </button>
              <span className="text-white/60">/</span>
              <span className="text-white">Categories</span>
              <span className="text-white/60">/</span>
              <span className="text-white font-medium">{category.name}</span>
            </nav>

            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                {getCategoryIcon(category.name)} {category.name}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master {category.name}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Discover comprehensive courses and workshops in {category.name.toLowerCase()}. 
                Learn from expert instructors and join thousands of students on their creative journey.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold">{category.courses.length}</div>
                  <div className="text-white/80">Courses Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {category.courses.reduce((sum, course) => sum + (course.students || 0), 0).toLocaleString()}+
                  </div>
                  <div className="text-white/80">Students Enrolled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.8★</div>
                  <div className="text-white/80">Average Rating</div>
                </div>
              </div>
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

      {/* Filters and Sorting */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-gray-700 font-medium">
                {filteredCourses.length} courses found
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Filter Dropdown */}
              <div className="relative">
                <select
                  value={filterBy}
                  onChange={(e) => setFilterBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="popularity">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <button className="p-2 rounded-md bg-white shadow-sm">
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button className="p-2 rounded-md">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <div key={course.id} className="card hover-lift group">
                  <div className="relative overflow-hidden">
                    <div className={`h-48 bg-gradient-to-br ${getCategoryGradient(category.name)} flex items-center justify-center`}>
                      <span className="text-white font-semibold text-center px-4">{course.title}</span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                    {course.instructor && (
                      <div className="absolute top-3 left-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-800">
                        {course.instructor}
                      </div>
                    )}
                    {course.level && (
                      <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {course.level}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{course.title}</h3>
                    {course.description && (
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{course.description}</p>
                    )}
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      {course.rating && (
                        <span className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          {course.rating}
                        </span>
                      )}
                      {course.students && (
                        <>
                          <span>•</span>
                          <span>{course.students.toLocaleString()} students</span>
                        </>
                      )}
                      {course.duration && (
                        <>
                          <span>•</span>
                          <span>{course.duration}</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        {course.price ? (
                          <span className="text-2xl font-bold text-blue-600">₹{course.price}</span>
                        ) : (
                          <span className="text-2xl font-bold text-green-600">Free</span>
                        )}
                      </div>
                      <button className="btn-primary">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to see more results.</p>
              <button 
                onClick={() => {
                  setFilterBy('all');
                  setSortBy('popularity');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Instructor Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className={`bg-gradient-to-r ${getCategoryGradient(category.name)} rounded-2xl p-8 lg:p-12 text-white`}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Learn from Expert Instructors
                </h3>
                <p className="text-white/90 mb-6 text-lg">
                  Our {category.name.toLowerCase()} courses are taught by industry professionals 
                  with years of experience. Get personalized guidance and master the techniques 
                  that matter most.
                </p>
                <div className="flex items-center gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">10+</div>
                    <div className="text-white/80 text-sm">Expert Instructors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-white/80 text-sm">Hours of Content</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-white/80 text-sm">Support</div>
                  </div>
                </div>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Meet Our Instructors
                </button>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="h-48 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-semibold">Instructor Spotlight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your {category.name} Journey?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have mastered {category.name.toLowerCase()} 
            with our comprehensive courses and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Get Started Today
            </button>
            <button className="btn-outline text-lg px-8 py-4">
              View All Categories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;