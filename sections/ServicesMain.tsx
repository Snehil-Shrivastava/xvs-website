import ServicesCard from "@/components/ServicesCard";
import { ServicesCardData } from "@/lib/data";

const ServicesMain = () => {
  const servicesCardsData = ServicesCardData;
  return (
    <div className="flex flex-col gap-80 max-sm:gap-50 relative max-w-450 mx-auto">
      {servicesCardsData.map((services, index) => (
        <ServicesCard key={index} services={services} />
      ))}
    </div>
  );
};

export default ServicesMain;
