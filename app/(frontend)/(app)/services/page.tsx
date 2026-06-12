import BgVideo from "@/components/BgVideo";
import SchemaMarkup from "@/components/SchemaMarkup";
import ServicesPage from "@/page/ServicesPage";
import servicsBg from "@/videos/services-light.mp4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | xVS Creations",
  description:
    "Explore expert creative services at xVS Creations — branding, graphic design, UI/UX, web & app development, motion graphics, and 3D animation for global brands. Learn more!",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact xVS Creations",
  url: "https://xvscreations.com/services",
  description: "Explore expert creative services at xVS Creations",
};

const Services = () => {
  return (
    <div>
      <SchemaMarkup schema={schema} />
      <div
        className="h-screen max-sm:h-150 sm:max-lg:h-220 absolute z-0 inset-x-0 overflow-hidden brightness-50"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent 95% 100%)",
        }}
      >
        <BgVideo bgVideo={servicsBg} />
      </div>
      <ServicesPage />
    </div>
  );
};

export default Services;
