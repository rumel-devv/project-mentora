import FeaturedSec from "@/components/FeaturedSec";
import Hero from "@/components/Hero";
import TopRatedCourse from "@/components/TopRatedCourse";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
     <TopRatedCourse/>
      <FeaturedSec/>
    </>
  );
}
