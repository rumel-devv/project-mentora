import DeleteModal from "@/components/DeletedModal";
import UserCard from "@/components/UserCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBookOpen, FaClock, FaTimes } from "react-icons/fa";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  let bookedData = [];

  if (user?.id) {
    try {
      const res = await fetch(`http://localhost:5000/booking/${user.id}`, {
        cache: "no-store",
      });

      bookedData = await res.json();
    } catch (error) {
      console.log("Fetch error:", error);
      bookedData = [];
    }
  }
    console.log(bookedData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50">
      <div className="w-11/12 max-w-7xl mx-auto py-8">
        {/* TOP HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-sky-600 font-semibold mb-2">Welcome Back 👋</p>

            <h1 className="text-3xl md:text-4xl font-black text-slate-800">
              Student Dashboard
            </h1>

            <p className="text-slate-500 mt-2">
              Manage your enrolled courses and continue learning.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
            <div className="bg-white border border-slate-100 rounded-2xl px-6 py-5 shadow-sm min-w-[170px]">
              <p className="text-slate-500 text-sm">Total Courses</p>

              <h2 className="text-3xl font-black text-slate-800 mt-1">
                {bookedData?.length || 0}
              </h2>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl px-6 py-5 shadow-sm min-w-[170px]">
              <p className="text-slate-500 text-sm">Active Learning</p>

              <h2 className="text-3xl font-black text-sky-600 mt-1">
                {bookedData?.length || 0}
              </h2>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* LEFT SIDEBAR */}
          <div className="xl:col-span-3">
            <div className="sticky top-6">
              <UserCard />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="xl:col-span-9">
            {/* SECTION HEADER */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-800">
                  My Courses
                </h2>

                <p className="text-slate-500 mt-1">
                  Track and manage all your enrolled courses.
                </p>
              </div>

              <Link
                href="/courses"
                className="hidden sm:flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-5 py-3 rounded-xl font-medium transition"
              >
                Browse More
                <FaArrowRight />
              </Link>
            </div>

            {/* COURSE LIST */}
            <div className="space-y-6">
              {Array.isArray(bookedData) && bookedData.length > 0 ? (
                bookedData.map((course) => (
                
                  <div
                    key={course._id}
                    className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* IMAGE */}
                      <div className="relative w-full md:w-72 h-56 md:h-auto overflow-hidden">
                        <Image
                          src={course.thumbnail || "/placeholder.png"}
                          alt={course.title || "course image"}
                          fill
                          className="object-cover group-hover:scale-105 transition duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        <div className="absolute bottom-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-sm px-3 py-1 rounded-full font-semibold">
                            Enrolled
                          </span>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        <div>
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
                            <div>
                              <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                                {course.title}
                              </h3>

                              <p className="text-slate-500 mt-3 leading-relaxed max-w-2xl">
                                {course.description?.slice(0, 140)}...
                              </p>
                            </div>

                            {/* PRICE */}
                            <div className="bg-sky-50 text-sky-700 px-5 py-3 rounded-2xl text-center min-w-[120px]">
                              <p className="text-sm font-medium">Course Fee</p>

                              <h2 className="text-2xl font-black mt-1">
                                ${course.price}
                              </h2>
                            </div>
                          </div>

                          {/* INFO */}
                          <div className="flex flex-wrap items-center gap-5 mt-6">
                            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-slate-700">
                              <FaClock className="text-sky-600" />

                              <span className="font-medium text-sm">
                                {course.duration}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-xl text-slate-700">
                              <FaBookOpen className="text-sky-600" />

                              <span className="font-medium text-sm">
                                Online Course
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* ACTIONS */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                          <button className="flex-1 bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-2xl font-semibold transition">
                            Continue Learning
                          </button>
 
                            <DeleteModal course={course} />
                         
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm px-6 py-20 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center mb-6">
                    <FaBookOpen className="text-4xl text-sky-600" />
                  </div>

                  <h2 className="text-3xl font-black text-slate-800">
                    No Courses Yet
                  </h2>

                  <p className="text-slate-500 mt-4 max-w-lg leading-relaxed">
                    You haven’t enrolled in any courses yet. Start learning
                    today by exploring our premium course collection.
                  </p>

                  <Link
                    href="/courses"
                    className="mt-8 inline-flex items-center gap-3 bg-sky-600 hover:bg-sky-700 text-white px-7 py-4 rounded-2xl font-semibold transition"
                  >
                    Browse Courses
                    <FaArrowRight />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
