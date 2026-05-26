"use client";

import ServicesCard from "@/components/ServicesCard";
import { ServicesCardData } from "@/lib/data";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ServicesMain = () => {
  const servicesCardsData = ServicesCardData;
  const total = servicesCardsData.length;

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    // Wait for ScrollSmoother + ScrollTrigger pins to fully initialize
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();

      const smoother = ScrollSmoother.get();
      const target = document.querySelector(hash);

      if (smoother && target) {
        smoother.scrollTo(target, false); // false = instant, avoids fighting the smoother on load
      }
    }, 300); // 300ms to let all the ServicesCard pins register

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex flex-col gap-80 max-md:gap-50 relative max-w-450 max-md:w-full mx-auto">
      {servicesCardsData.map((services, index) => (
        <ServicesCard
          key={index}
          services={services}
          index={index}
          total={total}
        />
      ))}
    </div>
  );
};

export default ServicesMain;
