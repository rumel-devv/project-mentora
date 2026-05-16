import React from "react";

const TopRatedCourse = () => {
  const course = {
    title: "Full Stack Web Development",
    description:
      "Learn React, Next.js, Node.js and MongoDB from scratch and become a job-ready developer with real-world projects.",
    category: "Web Development",
    rating: 4.8,
    students: 1200,
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-2 text-sm font-semibold bg-blue-100 text-blue-600 rounded-full">
            🔥 Featured Top Rated Course
          </span>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-5xl font-extrabold text-slate-900">
            Top Rated Course
          </h2>

          <p className="text-md md:text-xl text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Most popular and highly rated course loved by thousands of students worldwide
          </p>
        </div>

        {/* Card */}
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md border hover:shadow-xl transition p-3 md:p-6">

          {/* Category Badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-600 rounded-full">
            {course.category}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-900 mt-4">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-base mt-3 leading-relaxed">
            {course.description}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between mt-6 text-sm text-gray-600">
            <span>⭐ {course.rating} Rating</span>
            <span>{course.students}+ Students</span>
          </div>

          {/* Button */}
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
            View Course
          </button>

        </div>
      </div>
    </section>
  );
};

export default TopRatedCourse;