"use client";

import PlanetHorizon from "@/components/PlanetHorizon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WorkPageHeading = () => {
  const headingContainerRef = useRef(null);
  const headingRef = useRef(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: headingRef.current,
        markers: true,
        start: "top top+=250px",
        end: "bottom top+=250px",
        scrub: 1,
        //   pin: true,
      },
    });
    //   .to(headingRef.current, {
    //     top: "15%",
    //     scale: 0.4,
    //   });
    // gsap.to(headingRef.current, {
    //   scrollTrigger: {
    //     trigger: headingRef.current,
    //     markers: true,
    //     start: "top top+=250px",
    //     end: "bottom top+=250px",
    //     scrub: 1,
    //     pin: true,
    //   },
    //   top: "15%",
    //   scale: 0.4,
    // });
  }, []);

  return (
    <div ref={headingContainerRef} className="h-150 flex flex-col justify-end">
      <h1
        ref={headingRef}
        className="font-semibold text-[180px] relative text-center select-none z-5"
      >
        {"SHOWCASE".split("").map((letter, index) => (
          <span
            key={index}
            className={`${
              index === 0
                ? ""
                : "max-sm:ml-3 sm:max-md:ml-4.5 md:max-lg:ml-7 lg:max-xl:ml-10.5 xl:max-1440p:ml-13 1440p:max-2xl:ml-13 2xl:ml-15.5 2240p:ml-18"
            }`}
          >
            {letter}
          </span>
        ))}
      </h1>
      <PlanetHorizon />
    </div>
  );
};

export default WorkPageHeading;
