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
    const mm = gsap.matchMedia();

    const buildTimeline = (targetHeight: string, targetScale: number) => {
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
          },
        })
        .to(headingContainerRef.current, {
          height: targetHeight,
        })
        .to(
          headingRef.current,
          {
            scale: targetScale,
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
    };

    mm.add("(max-width: 639px)", () => buildTimeline("150px", 0.45));
    mm.add("(min-width: 640px) and (max-width: 767px)", () =>
      buildTimeline("180px", 0.8),
    );
    mm.add("(min-width: 768px) and (max-width: 1023px)", () =>
      buildTimeline("200px", 0.45),
    );
    mm.add("(min-width: 1024px) and (max-width: 1279px)", () =>
      buildTimeline("210px", 0.45),
    );
    mm.add("(min-width: 1280px)", () => buildTimeline("300px", 0.45));
  }, []);

  return (
    <div ref={mainContainerRef} className="relative h-full work-heading">
      <div
        ref={headingContainerRef}
        className="flex flex-col justify-end h-150 max-sm:h-[52vh] sm:max-md:h-[52vh] relative z-5 bg-background/0"
      >
        <h1
          ref={headingRef}
          className="font-calSans text-[180px] max-sm:text-5xl sm:max-md:text-6xl md:max-lg:text-8xl lg:max-xl:text-9xl xl:max-1440p:text-[150px] relative text-center select-none z-5"
        >
          {"SHOWCASE".split("").map((letter, index) => (
            <span
              key={index}
              className={`${
                index === 0
                  ? ""
                  : "max-sm:ml-1.5 sm:max-md:ml-4.5 md:max-lg:ml-7 lg:max-xl:ml-9 xl:max-1440p:ml-13 1440p:max-2xl:ml-13 2xl:ml-15.5 2240p:ml-18"
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
