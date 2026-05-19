import BgVideo from "@/components/BgVideo";
import ServicesPage from "@/pages/ServicesPage";
import servicsBg from "@/videos/services-light.mp4";

const Services = () => {
  return (
    <div>
      <div className="h-screen absolute z-0 inset-x-0 overflow-hidden brightness-50">
        <BgVideo bgVideo={servicsBg} />
      </div>
      <ServicesPage />
    </div>
  );
};

export default Services;
