import SectionHeading from "@/components/SectionHeading";
import ServicesCarousel from "@/components/ServicesCarousel";
import { ArrowUpRight } from "lucide-react";

const HomeServices = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <SectionHeading
        headingText="services"
        buttonText="view services"
        buttonIcon={<ArrowUpRight className="max-sm:w-4" />}
        buttonLink="/services"
      />
      <div className="w-full max-w-450 mx-auto 2xl:min-h-100 h-7/10 max-sm:h-90 flex items-center">
        <ServicesCarousel />
      </div>
    </div>
  );
};

export default HomeServices;
