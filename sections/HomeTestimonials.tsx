import LogoMarquee from "@/components/LogoMarquee";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { HomeClientLogos } from "@/lib/data";
import { Heart } from "lucide-react";

const HomeTestimonials = () => {
  const logos = [...HomeClientLogos, ...HomeClientLogos];
  return (
    <div className="flex flex-col items-center h-full justify-start">
      <SectionHeading
        headingText="words"
        buttonText="reviews"
        buttonIcon={<Heart stroke="none" fill="#f79839" className="scale-80" />}
        desc="Hear from visionaries and experts"
      />
      <div className="w-full">
        <div className="bg-brand-cream h-auto w-3/5 max-w-350 mx-auto py-20 content-clip-both">
          <TestimonialCarousel />
          <LogoMarquee logos={logos} />
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
