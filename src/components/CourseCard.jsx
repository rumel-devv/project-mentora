import React from "react";
import { Clock, User, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const {
    title,
    thumbnail,
    category,
    description,
    duration,
    instructor,
    price,
    _id
  } = course;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          width={200}
          height={200}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* CATEGORY BADGE */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md">
            {category}
          </span>
        </div>

        {/* PRICE */}
        <div className="absolute top-4 right-4">
          <span className="bg-white text-blue-600 font-bold px-4 py-2 rounded-full shadow-md">
            ${price}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-2 space-y-4">
        
        {/* TITLE */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition">
            {title}
          </h2>

          <p className="text-gray-500 text-sm mt-2 line-clamp-3">
            {description}
          </p>
        </div>

        {/* INFO */}
        <div className="flex items-center justify-between text-sm text-gray-600 pt-2">
          
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span className="font-semibold">{duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <User size={20} />
            <span className="font-semibold">{instructor}</span>
          </div>
        </div>

        {/* BUTTON */}
       <Link href={`/courses/${_id}`}  >
        <button className="w-full mt-4 bg-gradient-to-r cursor-pointer from-sky-500 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-blue-300">
          View Details
        </button>
       </Link>
      </div>
    </div>
  );
};

export default CourseCard;