import SectionHeading from "@/components/SectionHeading";
import ServicesCarousel from "@/components/ServicesCarousel";
import { ArrowUpRight } from "lucide-react";

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
      <div className="w-full max-w-450 mx-auto 2xl:min-h-100 h-7/10 max-sm:h-90 sm:max-md:h-120 md:max-lg:h-160 1440p:max-2xl:h-180 flex items-center">
        <ServicesCarousel />
      </div>
    </div>
  );
};

export default HomeServices;
