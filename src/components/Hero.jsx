"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { FaArrowRight, FaStar, FaPlay } from "react-icons/fa6";

const slides = [
  {
    title: "Master New Skills with Expert-Led Courses",
    desc: "Unlock your potential with 1,000+ high-quality courses taught by industry experts.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Learn Anytime, Anywhere",
    desc: "Flexible learning experience designed for your busy schedule.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Build Your Future Career",
    desc: "Gain real-world skills and get job-ready with expert guidance.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
  },
];

const Hero = () => {
  return (
    <section className="bg-gradient-to-br py-8 md:py-12 from-blue-50 via-white to-slate-50">

      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-auto md:h-[80vh]"
      >

        {slides.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center min-h-auto md:min-h-[70vh]">

                {/* LEFT */}
                <div className="space-y-5 md:space-y-6 text-center lg:text-left">

                  <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-semibold mx-auto lg:mx-0">
                    <FaStar />
                    Trusted by 10,000+ Students Worldwide
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                    {item.title}
                  </h1>

                  <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                    {item.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">

                    <Button
                      href="/courses"
                      color="primary"
                      size="lg"
                      className="rounded-full px-6 md:px-8 font-semibold w-full sm:w-auto"
                    >
                      Explore Courses <FaArrowRight className="ml-2" />
                    </Button>

                    <Button
                      variant="bordered"
                      size="lg"
                      className="rounded-full px-6 md:px-8 font-semibold w-full sm:w-auto"
                    >
                      <FaPlay className="mr-2" />
                      Watch Demo
                    </Button>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="relative flex justify-center mt-6 lg:mt-0">

                  <div className="absolute -inset-2 md:-inset-3 bg-blue-500/20 blur-2xl rounded-3xl"></div>

                  <div className="relative w-full max-w-sm sm:max-w-md h-[280px] sm:h-[350px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl">

                    <Image
                      src={item.img}
                      alt="hero image"
                      fill
                      className="object-cover"
                    />

                    {/* floating card */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-md p-3 md:p-4 rounded-xl flex items-center gap-3">

                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <Image
                            key={i}
                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                            width={30}
                            height={30}
                            className="rounded-full border-2 border-white"
                            alt="user"
                          />
                        ))}
                      </div>

                      <div>
                        <p className="text-xs sm:text-sm font-semibold">
                          Join Community
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-500">
                          500+ new students today
                        </p>
                      </div>

                    </div>

                  </div>
                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  );
};

export default Hero;