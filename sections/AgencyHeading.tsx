import React from "react";

const AgencyHeading = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-8 max-md:gap-4 select-none max-md:py-50">
      <h3 className="capitalize text-brand-cream text-[100px]/[110px] max-sm:text-3xl font-bold">
        <span>a creative partner</span>
        <br />
        <span>built for agencies</span>
      </h3>
      <p className="text-3xl max-sm:text-sm w-[45%] max-md:w-9/10 text-center font-extralight">
        White-label branding UI/UX, motion and digital execution support for
        agencies, media houses, and growing brands.
      </p>
    </div>
  );
};

export default AgencyHeading;
