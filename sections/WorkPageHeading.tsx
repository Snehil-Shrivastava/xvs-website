"use client";

import PlanetHorizon from "@/components/PlanetHorizon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// 1. Configures GSAP to ignore vertical height changes caused by the mobile address bar
ScrollTrigger.config({
  ignoreMobileResize: true,
});

const WorkPageHeading = () => {
  const mainContainerRef = useRef(null);
  const pinWrapperRef = useRef(null);
  const headingContainerRef = useRef(null);
  const headingRef = useRef(null);
  const arccontainerRef = useRef<HTMLDivElement | null>(null);
  const arcRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // 2. Enable touch-scroll normalization (From your older version)
    // Synchronizes the touch scroll events on the JS thread to completely eliminate mobile jitter.
    ScrollTrigger.normalizeScroll(true);

    const mm = gsap.matchMedia();

    const buildTimeline = (targetHeight: string, targetScale: number) => {
      // 3. PIN THE STATIC WRAPPER (Preserving your original layout)
      gsap.timeline({
        scrollTrigger: {
          trigger: pinWrapperRef.current,
          start: "top top",
          end: "max",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1, // Pre-renders pinning to avoid layout flickering
        },
      });

      // 4. ANIMATE THE INNER CONTAINER (Safely handles scaling and shrinking)
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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: mainContainerRef.current,
            start: "bottom center",
            end: "bottom top+=" + targetHeight,
            scrub: 1,
          },
        })
        .to(headingContainerRef.current, {
          background: "rgba(40,40,40,1)",
        });
    };

    mm.add("(max-width: 639px)", () => buildTimeline("120px", 0.45));
    mm.add("(min-width: 640px) and (max-width: 767px)", () =>
      buildTimeline("180px", 0.8),
    );
    mm.add("(min-width: 768px) and (max-width: 1023px)", () =>
      buildTimeline("200px", 0.45),
    );
    mm.add("(min-width: 1024px) and (max-width: 1279px)", () =>
      buildTimeline("210px", 0.45),
    );
    mm.add("(min-width: 1280px)", () => buildTimeline("240px", 0.45));
  }, []);

  return (
    <div ref={mainContainerRef} className="relative h-full work-heading">
      {/* 
        This is your original static pin wrapper. 
        It is fully preserved here, ensuring the layout never collapses or disappears.
      */}
      <div
        ref={pinWrapperRef}
        className="h-1/2 2xl:min-h-107.5 max-sm:h-[52vh] sm:max-md:h-[52vh] z-10"
      >
        <div
          ref={headingContainerRef}
          className="flex flex-col justify-end h-full relative z-10"
          style={{
            backgroundColor: "rgba(40,40,40,0)",
          }}
        >
          <h1
            ref={headingRef}
            className="font-calSans text-[180px] max-sm:text-5xl sm:max-md:text-6xl md:max-lg:text-7xl lg:max-xl:text-8xl xl:max-1440p:text-[110px] 1440p:max-1920p:text-[140px] relative text-center select-none z-5 origin-bottom"
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
      </div>
      <PlanetHorizon arccontainerRef={arccontainerRef} arcRef={arcRef} />
    </div>
  );
};

export default WorkPageHeading;
