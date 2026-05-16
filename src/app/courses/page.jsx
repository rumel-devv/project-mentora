import CourseCard from '@/components/CourseCard';
import { courseData } from '@/lib/data';
import React from 'react';




const CoursesPage = async() => {
    const courses = await courseData()
    
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
  
  {/* HEADING */}
  <div className="text-center max-w-3xl mx-auto mb-14">
    
    <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
      Explore our Courses
    </span>

    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
      Upgrade Your Skills With Modern Tech Courses
    </h1>

    <p className="text-gray-600 mt-5 text-md">
      Learn from industry experts and build real-world projects in
      Frontend, Backend, Full Stack, and modern web technologies.
      Start your journey today with Mentora.
    </p>
  </div>

  {/* COURSE GRID */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {courses.map((course) => (
      <CourseCard
        key={course._id}
        course={course}
      />
    ))}
  </div>
</div>
    );
};

export default CoursesPage;