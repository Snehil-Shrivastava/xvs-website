"use client";

import PlanetHorizon from "@/components/PlanetHorizon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WorkPageHeading = () => {
  const mainContainerRef = useRef(null);
  const headingContainerRef = useRef(null);
  const headingRef = useRef(null);
  const arccontainerRef = useRef<HTMLDivElement | null>(null);
  const arcRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: headingContainerRef.current,
        start: "top top",
        end: "max",
        scrub: 1,
        pin: true,
        pinSpacing: false,
        // markers: true,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "top top",
          end: "bottom center",
          scrub: 1,
          // markers: true,
        },
      })
      .to(headingContainerRef.current, {
        height: "300px",
      })
      .to(
        headingRef.current,
        {
          scale: 0.45,
        },
        "<",
      )
      .to(
        headingContainerRef.current,
        {
          background: "#282828",
        },
        "<",
      )
      .to(
        arccontainerRef.current,
        {
          opacity: 0,
        },
        "<",
      )
      .to(
        arcRef.current,
        {
          scale: 2.5,
        },
        "<-=0.1",
      );
  }, []);

  return (
    <div ref={mainContainerRef} className="relative h-full work-heading">
      <div
        ref={headingContainerRef}
        className="flex flex-col justify-end h-150 relative z-5 bg-background/0"
      >
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
      </div>
      <PlanetHorizon arccontainerRef={arccontainerRef} arcRef={arcRef} />
    </div>
  );
};

export default WorkPageHeading;
