import React from "react";
import CourseCard from "./CourseCard";
import { featuredData } from "@/lib/data";

const FeaturedCourse = async () => {
   const courses = await featuredData()
  //  console.log(courses);

  return (
           <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
  
  {/* HEADING */}
 <div className="text-center max-w-3xl mx-auto mb-14">
  
  <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
    Featured Courses
  </span>

  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
    Discover Our Most Popular Learning Programs
  </h1>

  <p className="text-gray-600 mt-5 text-md">
    Explore hand-picked courses designed to help you master modern
    technologies, build real-world projects, and grow your career
    with industry-focused skills.
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

export default FeaturedCourse;