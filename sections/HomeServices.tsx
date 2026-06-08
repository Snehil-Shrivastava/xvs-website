import SectionHeading from "@/components/SectionHeading";
import ServicesCarousel from "@/components/ServicesCarousel";
import { ArrowUpRight } from "lucide-react";
import { Suspense } from "react";

const HomeServices = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <SectionHeading
        headingText="services"
        buttonText="view services"
        buttonIcon={
          <ArrowUpRight className="max-sm:w-4 sm:max-md:w-4.5 md:max-lg:w-5" />
        }
        buttonLink="/services"
      />
      <div className="w-full max-w-450 mx-auto h-auto flex items-center">
        <Suspense fallback={null}>
          <ServicesCarousel />
        </Suspense>
      </div>
    </div>
  );
};

export default HomeServices;
