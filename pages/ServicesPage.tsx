import ServicesMain from "@/sections/ServicesMain";

const ServicesPage = () => {
  return (
    <div className="relative z-1">
      <div className="h-screen max-md:h-150">
        <div className="flex flex-col max-sm:gap-4 items-center justify-center h-full">
          <span className="text-[2.2rem] max-sm:text-xl font-extralight">
            Services
          </span>
          <h3 className="font-calSans text-[9rem]/[9.5rem] max-sm:text-[40px]/[44px] text-brand-cream text-center select-none">
            <span>The right expertise</span>
            <br />
            <span>at every step</span>
          </h3>
        </div>
      </div>
      <div className="min-h-screen pt-25 pb-50 max-sm:w-9/10 max-sm:mx-auto">
        <ServicesMain />
      </div>
    </div>
  );
};

export default ServicesPage;
