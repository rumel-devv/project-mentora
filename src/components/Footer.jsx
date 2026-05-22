import React from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-slate-200 bg-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-14">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-sky-500 flex items-center justify-center text-white font-bold shadow-lg">
                S
              </div>

              <h1 className="text-2xl font-bold text-slate-600">
               SkillStack
              </h1>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              A modern learning platform to help you build skills,
              grow your career, and achieve your goals faster.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-5 text-slate-500">
              <a className="hover:text-sky-500 transition text-lg">
                <FaFacebook />
              </a>
              <a className="hover:text-sky-500 transition text-lg">
                <FaTwitter />
              </a>
              <a className="hover:text-sky-500 transition text-lg">
                <FaGithub />
              </a>
              <a className="hover:text-sky-500 transition text-lg">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-sm font-semibold text-slate-900 mb-4">
              Quick Links
            </h2>

            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <Link className="hover:text-sky-500 transition" href="/">
                Home
              </Link>
              <Link className="hover:text-sky-500 transition" href="/courses">
                Courses
              </Link>
              <Link className="hover:text-sky-500 transition" href="/dashboard">
                Dashboard
              </Link>
              <Link className="hover:text-sky-500 transition" href="/add-course">
                Add Course
              </Link>
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h2 className="text-sm font-semibold text-slate-900 mb-4">
              Support
            </h2>

            <div className="flex flex-col gap-3 text-sm text-slate-600">
              <Link className="hover:text-sky-500 transition" href="/help">
                Help Center
              </Link>
              <Link className="hover:text-sky-500 transition" href="/privacy">
                Privacy Policy
              </Link>
              <Link className="hover:text-sky-500 transition" href="/terms">
                Terms & Conditions
              </Link>
              <Link className="hover:text-sky-500 transition" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h2 className="text-sm font-semibold text-slate-900 mb-4">
              Stay Updated
            </h2>

            <p className="text-sm text-slate-600 mb-4">
              Get updates about new courses and features.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />

              <button className="bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg text-sm transition shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-slate-200" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Mentora. All rights reserved.
          </p>

          <p className="text-sm text-slate-400">
            Built with ❤️ for learners & developers
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;