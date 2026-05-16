"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Add Course", href: "/add-course" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  return (
    <nav className="w-full bg-white shadow-md px-3 md:px-14 py-3">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between">

        {/* LEFT: Logo + Links */}
        <div className="flex items-center gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-md" />
            <span className="text-xl font-bold text-sky-500">
              Mentorra
            </span>
          </Link>

          {/* Links */}
          <div className="flex gap-3">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive
                      ? "text-sky-500 font-semibold border-b-2 border-sky-500"
                      : "text-gray-700 hover:text-sky-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600">
              Join Free
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-sky-500 rounded-md" />
          <span className="text-lg font-bold text-sky-500">
           Mentorra
          </span>
        </Link>

        <button className="text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-2">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md ${
                  isActive
                    ? "text-sky-500 font-semibold bg-sky-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-2 mt-2">
            <Link href="/login">
              <button className="w-full px-3 py-2 border rounded-md">
                Login
              </button>
            </Link>

            <Link href="/signup">
              <button className="w-full px-3 py-2 bg-sky-500 text-white rounded-md">
                Join Free
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;