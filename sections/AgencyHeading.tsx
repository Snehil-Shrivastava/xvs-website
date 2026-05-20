import React from "react";

const AgencyHeading = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-8 select-none">
      <h3 className="capitalize text-brand-cream text-[100px]/[110px] font-bold">
        <span>a creative partner</span>
        <br />
        <span>built for agencies</span>
      </h3>
      <p className="text-3xl w-[45%] text-center font-extralight">
        White-label branding UI/UX, motion and digital execution support for
        agencies, media houses, and growing brands.
      </p>
    </div>
  );
};

export default AgencyHeading;
