import React from "react";
import { FaStar, FaGlobe, FaRocket, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaGlobe />,
    title: "Global Learning",
    desc: "Access courses from anywhere in the world anytime.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Progress",
    desc: "Learn faster with structured expert-guided courses.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Trusted Content",
    desc: "High-quality verified content from industry experts.",
  },
  {
    icon: <FaStar />,
    title: "Top Rated",
    desc: "Loved by thousands of learners worldwide.",
  },
];

const FeaturedSec = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Us
          </h2>
          <p className="text-gray-500 mt-3">
            Learn smarter, faster, and better with our platform
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 hover:from-blue-500 hover:to-purple-500 transition"
            >

              {/* inner card */}
              <div className="h-full bg-white rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">

                {/* icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 text-xl mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* title */}
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                {/* desc */}
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* bottom glow line */}
                <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedSec;