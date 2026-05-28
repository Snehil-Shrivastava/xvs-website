"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookiesConsent = () => {
  const [showConsent, setShowConsent] = useState(true);

  const cookiesAge = 60 * 60 * 24 * 30;

  useEffect(() => {
    setShowConsent(hasCookie("CookiesConsent") as boolean);
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("CookiesConsent", "true", { maxAge: cookiesAge });
  };

  if (showConsent) {
    return null;
  }
  return (
    <div className="fixed z-666 bottom-20 max-sm:bottom-10 max-md:bottom-15 left-1/2 -translate-x-1/2 w-[90%] lg:max-1440p:w-[70%] 1440p:max-1920p:w-[60%] 1920p:w-1/2 font-poppins">
      <div className="absolute inset-0 bg-white/50 consent-banner-outer-clip" />
      <div className="bg-[#4f4e4c] mx-auto py-2 md:py-3 px-3 sm:max-md:px-5 md:max-xl:px-8 xl:max-2xl:px-10 2xl:px-10 flex justify-between text-[8px] xs:max-sm:text-[10px] sm:max-md:text-xs md:max-lg:text-sm lg:max-2xl:text-base 2xl:text-lg items-center relative backdrop-blur-md consent-banner-clip text-brand-cream">
        <div className="bg-background/50 absolute inset-0 -z-1" />
        <span className="flex-[0.65] 2240p:flex-[0.75]">
          Yes, we use essential <b>cookies</b> on this website.
        </span>
        <div className="flex flex-[0.35] 2240p:flex-[0.25] justify-between items-center">
          <Link
            className="flex-1 border-r border-r-[#F3ECDC]/60"
            href="/cookies-policy"
          >
            View policy
          </Link>
          <button
            className="text-brand-orange font-semibold flex-1 cursor-pointer"
            onClick={() => acceptCookie()}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesConsent;
