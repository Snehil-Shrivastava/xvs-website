import SectionHeading from "@/components/SectionHeading";
import ServicesCarousel from "@/components/ServicesCarousel";

const HomeServices = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <SectionHeading headingText="services" buttonText="view services" />
      <div className="w-full max-w-450 mx-auto min-h-100 h-7/10 flex items-center">
        <ServicesCarousel />
      </div>
    </div>
  );
};

export default HomeServices;
