// "use client";

// import ServicesCard from "@/components/ServicesCard";
// import { ServicesCardData } from "@/lib/data";
// import gsap from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const ServicesMain = () => {
//   const servicesCardsData = ServicesCardData;
//   const total = servicesCardsData.length;

//   useEffect(() => {
//     const hash = window.location.hash;
//     if (!hash) return;

//     // Wait for ScrollSmoother + ScrollTrigger pins to fully initialize
//     const timeout = setTimeout(() => {
//       ScrollTrigger.refresh();

//       const smoother = ScrollSmoother.get();
//       const target = document.querySelector(hash);

//       if (smoother && target) {
//         smoother.scrollTo(target, false); // false = instant, avoids fighting the smoother on load
//       }
//     }, 300); // 300ms to let all the ServicesCard pins register

//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className="flex flex-col gap-80 max-lg:gap-50 relative max-w-450 max-lg:w-full mx-auto">
//       {servicesCardsData.map((services, index) => (
//         <ServicesCard
//           key={index}
//           services={services}
//           index={index}
//           total={total}
//         />
//       ))}
//     </div>
//   );
// };

// export default ServicesMain;

// --------------------------------- scroll

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
    const handleScrollToHash = (
      currentHash: string,
      smooth: boolean = false,
    ) => {
      if (!currentHash) return;

      // Force GSAP to recalculate actual layout start/end offsets after DOM updates
      ScrollTrigger.refresh();

      const smoother = ScrollSmoother.get();
      if (!smoother) return;

      const cleanId = currentHash.replace("#", "");
      const st = ScrollTrigger.getById(cleanId);

      const isMobile = window.innerWidth < 768;

      if (st && isMobile) {
        // st.start is the exact calculated scroll position where the card meets your "top+=220px" criteria
        smoother.scrollTo(st.start, smooth);
      } else {
        const target = document.querySelector(currentHash);
        if (target) {
          // Fallback if ScrollTrigger is not registered (e.g. the last card, which has isLast=true)
          // "top 220px" aligns the element's top to be 220px down from the top of the viewport
          const offset = isMobile ? "top 20px" : "top 220px";
          smoother.scrollTo(target, smooth, offset);
        }
      }
    };

    // 1. Handle on load transitions (we scroll instantly with false to avoid visual shifts)
    const hash = window.location.hash;
    let timeout: NodeJS.Timeout;
    if (hash) {
      timeout = setTimeout(() => {
        handleScrollToHash(hash, false);
      }, 300); // Wait for Child components to register their ScrollTriggers
    }

    // 2. Handle subsequent anchor changes while remaining on the same page (use smooth scroll)
    const handleHashChange = () => {
      handleScrollToHash(window.location.hash, true);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      if (timeout) clearTimeout(timeout);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="flex flex-col gap-80 max-lg:gap-50 relative max-w-450 max-lg:w-full mx-auto">
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
