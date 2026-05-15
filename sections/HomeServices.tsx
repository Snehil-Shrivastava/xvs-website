import SectionHeading from "@/components/SectionHeading";
import ServicesCarousel from "@/components/ServicesCarousel";

const HomeServices = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <SectionHeading headingText="services" buttonText="view services" />
      <div>
        <ServicesCarousel />
      </div>
    </div>
  );
};

export default HomeServices;
