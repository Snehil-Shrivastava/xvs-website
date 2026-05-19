import ServicesMain from "@/sections/ServicesMain";

const ServicesPage = () => {
  return (
    <div className="relative z-1">
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <span className="text-[2.2rem] font-extralight">Services</span>
          <h3 className="font-calSans text-[9rem]/[9.5rem] text-brand-cream text-center select-none">
            <span>The right expertise</span>
            <br />
            <span>at every step</span>
          </h3>
        </div>
      </div>
      <div className="min-h-screen py-25">
        <ServicesMain />
      </div>
    </div>
  );
};

export default ServicesPage;
