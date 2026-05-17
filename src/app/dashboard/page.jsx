import UserCard from "@/components/UserCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  let bookedData = [];

  if (user?.id) {
    try {
      const res = await fetch(
        `http://localhost:5000/booking/${user.id}`,
        { cache: "no-store" }
      );

      bookedData = await res.json();
    } catch (error) {
      console.log("Fetch error:", error);
      bookedData = [];
    }
  }

  return (
    <div className="min-h-screen w-11/12 mx-auto p-6">

      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* LEFT SIDE */}
        <div className="md:col-span-3">
          <UserCard />
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-9">

          <h2 className="text-lg font-semibold mb-4">
            My Courses
          </h2>

          <div className="space-y-4">

            {Array.isArray(bookedData) && bookedData.length > 0 ? (
              bookedData.map((course) => (
              <div
  key={course._id}
  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
>

  {/* IMAGE */}
  <div className="w-32 h-24 relative flex-shrink-0 rounded-xl overflow-hidden">
    <Image
      src={course.thumbnail || "/placeholder.png"}
      alt={course.title || "course image"}
      fill
      className="object-cover"
    />
  </div>

  {/* CONTENT */}
  <div className="flex-1 flex items-center justify-between">

    {/* LEFT CONTENT */}
    <div>

      <h3 className="font-bold text-lg text-gray-800">
        {course.title}
      </h3>

      <p className="text-sm text-gray-500 mt-1 leading-snug">
        {course.description?.slice(0, 85)}...
      </p>

      {/* INFO */}
      <div className="text-sm text-gray-600 flex items-center gap-4 mt-3">
        <span className="flex items-center gap-1">
          ⏱ {course.duration}
        </span>

        <span className="font-semibold text-sky-600">
          ${course.price}
        </span>
      </div>

    </div>

    {/* RIGHT - CENTERED CANCEL BUTTON */}
    <div className="flex items-center justify-center h-full">

      <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-red-200 text-red-500 hover:bg-red-50 hover:border-red-300 transition-all">

        <FaTimes className="text-sm" />
        Cancel

      </button>

    </div>

  </div>

</div>
              ))
            ) : (
               
<div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white rounded-2xl border border-gray-100 shadow-sm">

  {/* TITLE */}
  <h2 className="text-2xl font-bold text-gray-800">
    No Courses Found
  </h2>

  {/* MESSAGE */}
  <p className="text-gray-500 mt-2 max-w-md">
    You haven’t selected any course yet. Please browse available courses and enroll to get started.
  </p>

  {/* BUTTON */}
  <Link
    href="/courses"
    className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition"
  >
    Browse Courses
  </Link>

</div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardPage;