import React from 'react';

const CourseCard = ({ course, variant = 'default', showRank = false }) => {
  const renderDefault = () => (
    <div className="card hover-lift group">
      <div className="relative overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
          <span className="text-gray-600 font-medium">{course.title}</span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
        {course.instructor && (
          <div className="absolute top-3 left-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-800">
            {course.instructor}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-1">{course.title}</h3>
        {course.category && (
          <p className="text-sm text-gray-600 mb-2">{course.category}</p>
        )}
        {course.description && (
          <p className="text-sm text-gray-600 mb-3">{course.description}</p>
        )}
        {course.price && (
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-600">₹{course.price}</span>
            <button className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
              Enroll Now
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderCompact = () => (
    <div className="card hover-lift group">
      <div className="flex">
        <div className="w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center flex-shrink-0">
          <span className="text-xs text-gray-600 text-center px-1">{course.title}</span>
        </div>
        <div className="flex-1 p-4">
          <h3 className="font-semibold text-gray-900 text-sm mb-1">{course.title}</h3>
          {course.date && (
            <p className="text-xs text-gray-600 mb-1">{course.date} • {course.time}</p>
          )}
          {course.duration && (
            <p className="text-xs text-gray-500">{course.duration}</p>
          )}
          {course.price && (
            <p className="text-sm font-bold text-blue-600 mt-2">₹{course.price}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderTrending = () => (
    <div className="card hover-lift group relative">
      {showRank && (
        <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
          {course.rank}
        </div>
      )}
      <div className="relative overflow-hidden">
        <div className="h-32 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
          <span className="text-gray-600 font-medium text-sm text-center px-2">{course.title}</span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-gray-900 text-sm mb-2">{course.title}</h3>
        <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
          {course.rating && (
            <span className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              {course.rating}
            </span>
          )}
          {course.students && (
            <span>•</span>
          )}
          {course.students && (
            <span>{course.students.toLocaleString()} students</span>
          )}
        </div>
        {course.price && (
          <div className="flex items-center justify-between">
            <span className="font-bold text-blue-600">₹{course.price}</span>
            <button className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full hover:bg-blue-100 transition-colors">
              Join
            </button>
          </div>
        )}
      </div>
    </div>
  );

  switch (variant) {
    case 'compact':
      return renderCompact();
    case 'trending':
      return renderTrending();
    default:
      return renderDefault();
  }
};

export default CourseCard;