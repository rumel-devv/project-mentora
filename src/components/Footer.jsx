import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-6 mt-16">

      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-5">

        {/* LEFT - LOGO */}
        <div className="flex items-center gap-3">

          <div className="w-9 h-9 rounded-full bg-sky-500 flex items-center justify-center font-bold text-white shadow-sm">
            M
          </div>

          <span className="text-slate-900 font-semibold text-lg">
            Mentora
          </span>

        </div>

        {/* MIDDLE LINKS */}
        <div className="flex items-center gap-6 text-sm text-black">

          <Link href="/terms" className="hover:text-sky-600 transition">
            Terms
          </Link>

          <Link href="/privacy" className="hover:text-sky-600 transition">
            Privacy
          </Link>

          <Link href="/cookies" className="hover:text-sky-600 transition">
            Cookies
          </Link>

        </div>

        {/* RIGHT - COPYRIGHT */}
        <div className="text-sm text-slate-800 text-center md:text-right">
          © {new Date().getFullYear()} Mentora. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;