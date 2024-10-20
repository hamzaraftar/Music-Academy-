import FeaturedCourses from "./components/FeaturedCourses";
import Hero from "./components/Hero";
import TestimonialCards from "./components/TestimonialCards";
import WhyChoseUs from "./components/WhyChoseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <WhyChoseUs />
      <TestimonialCards />
    </>
  );
}
