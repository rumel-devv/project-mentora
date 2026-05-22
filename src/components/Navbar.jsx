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
    try {
      await authClient.signOut();
      toast.success("Logout Successful");
      router.push("/");
    } catch (error) {
      toast.error("Logout failed");
      console.log(error);
    }
  };

  // PUBLIC LINKS (always show)
  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
  ];

  // PRIVATE LINKS (only logged in user)
  const privateLinks = [
    { name: "Add Course", href: "/add-course" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const closeMenu = () => setOpen(false);

  return (
    <nav className="w-full bg-white shadow-md px-3 md:px-14 py-3">

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-8">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded-md" />
            <span className="text-xl font-bold text-sky-500">
              SkillStack
            </span>
          </Link>

          {/* LINKS */}
          <div className="flex gap-3">
            {publicLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-md transition ${
                  isActive(link.href)
                    ? "text-sky-500 font-semibold border-b-2 border-sky-500"
                    : "text-gray-700 hover:text-sky-500"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* PRIVATE LINKS ONLY IF USER LOGGED IN */}
            {user &&
              privateLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md transition ${
                    isActive(link.href)
                      ? "text-sky-500 font-semibold border-b-2 border-sky-500"
                      : "text-gray-700 hover:text-sky-500"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
          </div>
        </div>

        {/* RIGHT */}
        {user ? (
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Avatar>
                <Avatar.Image
                  alt={user?.name}
                  src={user?.image}
                />
                <Avatar.Fallback>
                  {user?.name?.slice(0, 2).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
            </Link>

            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center gap-2"
            >
              <BiLogOutCircle />
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/login">
              <button className="px-4 py-2 border rounded-md flex items-center gap-2 hover:bg-gray-100">
                <AiOutlineLogin />
                Login
              </button>
            </Link>

            <Link href="/signup">
              <button className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 flex items-center gap-2">
                <BiSolidLogInCircle />
                Join Free
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* ================= MOBILE TOP BAR ================= */}
      <div className="md:hidden flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 bg-sky-500 rounded-md" />
          <span className="text-lg font-bold text-sky-500">
           SkillStack
          </span>
        </Link>

        <button
          className="text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden mt-3 flex flex-col gap-2">

          {/* PUBLIC */}
          {publicLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className={`px-3 py-2 rounded-md ${
                isActive(link.href)
                  ? "text-sky-500 font-semibold bg-sky-50"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* PRIVATE (ONLY LOGGED IN) */}
          {user &&
            privateLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`px-3 py-2 rounded-md ${
                  isActive(link.href)
                    ? "text-sky-500 font-semibold bg-sky-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.name}
              </Link>
            ))}

          {/* AUTH BUTTONS */}
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
              className="w-full px-3 py-2 bg-red-500 text-white rounded-md"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col gap-2 mt-2">
              <Link href="/login" onClick={closeMenu}>
                <button className="w-full px-3 py-2 border rounded-md">
                  Login
                </button>
              </Link>

              <Link href="/signup" onClick={closeMenu}>
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