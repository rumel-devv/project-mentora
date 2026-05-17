"use client";

import React from "react";
import {
  FaBookOpen,
  FaDollarSign,
  FaImage,
  FaClock,
} from "react-icons/fa";

const AddCoursePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 py-12 px-4">

      <div className="max-w-4xl mx-auto">

        {/* TOP HEADING */}
        <div className="text-center mb-10">

          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-5">
            🚀 Create & Publish Course
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            Create New Course
          </h1>

          <p className="text-slate-500 text-lg mt-4 max-w-2xl mx-auto">
            Share your knowledge with students around the world and build your learning community.
          </p>

        </div>

        {/* FORM CARD */}
        <div className="bg-white/80 backdrop-blur-xl border border-white shadow-2xl rounded-[32px] p-6 md:p-10">

          <form className="space-y-7">

            {/* TITLE */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                <FaBookOpen className="text-blue-600" />
                Course Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="e.g. Next.js 15 Masterclass"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none rounded-2xl px-5 py-4 transition-all text-slate-700 placeholder:text-slate-400"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                📝 Description
              </label>

              <textarea
                name="description"
                rows="6"
                placeholder="What will students learn in this course?"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none rounded-2xl px-5 py-4 transition-all resize-none text-slate-700 placeholder:text-slate-400"
              ></textarea>
            </div>

            {/* THUMBNAIL */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                <FaImage className="text-pink-500" />
                Thumbnail URL
              </label>

              <input
                type="text"
                name="thumbnail"
                placeholder="https://images.unsplash.com/..."
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none rounded-2xl px-5 py-4 transition-all text-slate-700 placeholder:text-slate-400"
              />
            </div>

            {/* CATEGORY */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                📚 Category
              </label>

              <select
                name="category"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none rounded-2xl px-5 py-4 transition-all text-slate-700"
              >
                <option value="">Select Category</option>
                <option value="Web Development">
                  Web Development
                </option>
                <option value="Programming">
                  Programming
                </option>
                <option value="UI/UX Design">
                  UI/UX Design
                </option>
                <option value="Digital Marketing">
                  Digital Marketing
                </option>
                <option value="Cyber Security">
                  Cyber Security
                </option>
              </select>
            </div>

            {/* PRICE + DURATION */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* PRICE */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <FaDollarSign className="text-green-500" />
                  Price ($)
                </label>

                <input
                  type="number"
                  name="price"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none rounded-2xl px-5 py-4 transition-all text-slate-700 placeholder:text-slate-400"
                />
              </div>

              {/* DURATION */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-3">
                  <FaClock className="text-orange-500" />
                  Duration
                </label>

                <input
                  type="text"
                  name="duration"
                  placeholder="e.g. 12h 30m"
                  className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none rounded-2xl px-5 py-4 transition-all text-slate-700 placeholder:text-slate-400"
                />
              </div>

            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.01] hover:shadow-2xl transition-all duration-300 text-white font-bold py-4 rounded-2xl text-lg shadow-lg"
            >
              ✨ Create Course
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoursePage;