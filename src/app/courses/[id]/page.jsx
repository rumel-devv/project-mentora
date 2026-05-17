import Image from "next/image";
import React from "react";
import {
  FaClock,
  FaUserGraduate,
  FaTag,
  FaCheckCircle,
} from "react-icons/fa";

import { DeteailsPageData } from "@/lib/data";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const course = await DeteailsPageData(id);

  return (
    <div className="min-h-screen bg-slate-50 py-6 md:py-10 px-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* IMAGE */}
          <div className="relative w-full h-[260px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg">

            <Image
              src={course?.thumbnail}
              alt={course?.title}
              fill
              className="object-cover"
            />

            {course?.category && (
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {course?.category}
              </div>
            )}
          </div>

          {/* CONTENT */}
          <div className="bg-white rounded-3xl shadow-lg p-5 md:p-8">

            {/* TITLE */}
            {course?.title && (
              <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                {course?.title}
              </h1>
            )}

            {/* INFO */}
            <div className="flex flex-wrap gap-5 mt-5 text-slate-600">

              {course?.duration && (
                <div className="flex items-center gap-2">
                  <FaClock className="text-blue-600" />
                  <span>{course?.duration}</span>
                </div>
              )}

              {course?.instructor && (
                <div className="flex items-center gap-2">
                  <FaUserGraduate className="text-blue-600" />
                  <span>{course?.instructor}</span>
                </div>
              )}

              {course?.price && (
                <div className="flex items-center gap-2">
                  <FaTag className="text-blue-600" />
                  <span>${course?.price}</span>
                </div>
              )}

            </div>

            {/* DESCRIPTION */}
            {course?.description && (
              <div className="mt-8">

                <h2 className="text-2xl font-bold text-slate-800 mb-3">
                 What you will learn ?
                </h2>

                <p className="text-slate-600 leading-relaxed">
                  {course?.description}
                </p>

              </div>
            )}

       

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="h-fit sticky top-24 self-start">

          <div className="bg-white rounded-3xl shadow-xl p-6 border border-slate-100">

            {/* PRICE */}
            {course?.price && (
              <>
                <h2 className="text-4xl font-bold text-slate-800">
                  ${course?.price}
                </h2>

                <p className="text-slate-500 mt-2 text-md">
             Lifetime access included
                </p>
              </>
            )}

            {/* BUTTONS */}
            <div className="mt-5 flex flex-col gap-3">

              <button className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white py-3.5 rounded-2xl font-semibold shadow-md">
                Enroll Now
              </button>

              <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3.5 rounded-2xl font-semibold">
                Add to Wishlist
              </button>

            </div>

            {/* DETAILS */}
            <div className="mt-6 border-t pt-5 space-y-4 text-sm text-slate-700">

              {course?.instructor && (
                <div className="flex justify-between gap-4">
                  <span>Instructor</span>

                  <span className="font-semibold text-right">
                    {course?.instructor}
                  </span>
                </div>
              )}

              {course?.duration && (
                <div className="flex justify-between gap-4">
                  <span>Duration</span>

                  <span className="font-semibold">
                    {course?.duration}
                  </span>
                </div>
              )}

              {course?.category && (
                <div className="flex justify-between gap-4">
                  <span>Category</span>

                  <span className="font-semibold">
                    {course?.category}
                  </span>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CourseDetailsPage;