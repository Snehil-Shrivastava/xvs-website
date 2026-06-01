import React from "react";

const AgencyHeading = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-8 max-md:gap-4 select-none max-lg:py-50">
      <h3 className="capitalize font-calSans text-brand-cream text-[100px]/[110px] max-sm:text-3xl sm:max-md:text-4xl md:max-lg:text-6xl lg:max-xl:text-7xl">
        <span>a creative partner</span>
        <br />
        <span>built for agencies</span>
      </h3>
      <p className="text-3xl max-sm:text-sm sm:max-md:text-base md:max-lg:text-lg lg:max-xl:text-xl w-4/5 max-w-250 text-center font-extralight font-poppins">
        White-label branding UI/UX, motion and digital execution support for
        agencies, media houses, and growing brands.
      </p>
    </div>
  );
};

export default AgencyHeading;
