"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineLogin } from "react-icons/ai";
import { BiLogOutCircle, BiSolidLogInCircle } from "react-icons/bi";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();

    toast.success("Logout Successful");

    router.push("/login");
  };

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
        {/* LEFT */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-md" />

            <span className="text-xl font-bold text-sky-500">Mentorra</span>
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

        {/* RIGHT */}
        {user ? (
          <div className="flex items-center gap-3">
            <Link href="/profile">
              <Avatar>
                <Avatar.Image alt={user?.name} src={user?.image} />

                <Avatar.Fallback>
                  {user?.name?.slice(0, 2).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 border bg-red-500 border-gray-300 rounded-md text-white hover:bg-red-700 flex gap-1 items-center"
            >
              <BiLogOutCircle/>
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/login">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex gap-2 items-center justify-center">
                <AiOutlineLogin/>
                Login
              </button>
            </Link>

            <Link href="/signup">
              <button className="px-4 py-2 flex gap-2 items-center bg-sky-500 text-white rounded-md hover:bg-sky-600">
                <BiSolidLogInCircle/>
                Join Free
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-sky-500 rounded-md" />

          <span className="text-lg font-bold text-sky-500">Mentorra</span>
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
          {user ? (
            <button
              onClick={handleLogout}
              className="w-full px-3 py-2 border rounded-md"
            >
              Logout
            </button>
          ) : (
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
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
