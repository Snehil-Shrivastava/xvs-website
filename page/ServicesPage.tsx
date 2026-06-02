import ServicesMain from "@/sections/ServicesMain";

const ServicesPage = () => {
  return (
    <div className="relative z-1">
      <div className="h-screen max-sm:h-150 sm:max-md:h-150 md:max-lg:h-220">
        <div className="flex flex-col max-sm:gap-4 md:max-lg:gap-5 items-center justify-center h-full">
          <span className="text-[2.2rem] max-sm:text-xl sm:max-md:text-2xl md:max-lg:text-3xl font-poppins font-extralight">
            Services
          </span>
          <h3 className="font-calSans text-[9rem]/[9.5rem] max-sm:text-[40px]/[44px] sm:max-md:text-6xl md:max-lg:text-7xl lg:max-xl:text-8xl xl:max-1440p:text-9xl text-brand-cream text-center select-none">
            <span>The right expertise</span>
            <br />
            <span>at every step</span>
          </h3>
        </div>
      </div>
      <div className="min-h-screen pt-25 sm:max-md:pt-40 pb-50 w-4/5 max-sm:w-9/10 sm:max-md:w-4/5 md:max-lg:w-[85%] mx-auto">
        <ServicesMain />
      </div>
    </div>
  );
};

export default ServicesPage;
