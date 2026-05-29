import LogoMarquee from "@/components/LogoMarquee";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { HomeClientLogos } from "@/lib/data";
import { Heart } from "lucide-react";

const HomeTestimonials = () => {
  const logos = [...HomeClientLogos, ...HomeClientLogos];
  return (
    <div className="flex flex-col items-center h-full justify-start max-md:gap-10">
      <SectionHeading
        headingText="words"
        buttonText="reviews"
        buttonIcon={
          <Heart
            stroke="none"
            fill="#f79839"
            className="scale-80 max-sm:w-4 sm:max-lg:w-5"
          />
        }
        buttonLink="/about#client-testimonial"
        desc="Hear from visionaries and experts"
      />
      <div className="w-full">
        <div className="bg-brand-cream h-auto w-3/5 max-w-350 max-md:w-9/10 md:max-xl:w-9/10 mx-auto py-20 max-md:py-10 md:max-xl:py-12 content-clip-both">
          <TestimonialCarousel />
          <LogoMarquee logos={logos} />
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
