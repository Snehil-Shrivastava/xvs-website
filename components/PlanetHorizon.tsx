import React, { RefObject } from "react";

export default function PlanetHorizon({
  arccontainerRef,
  arcRef,
}: {
  arccontainerRef: RefObject<HTMLDivElement | null>;
  arcRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    // The container holds the mask and prevents the giant circle from causing horizontal scroll
    <div
      ref={arccontainerRef}
      className="absolute inset-x-0 bottom-0 h-full min-h-75 overflow-hidden pointer-events-none select-none z-0"
    >
      {/* 
        2. The highly-performant CSS shape replacing your SVG <path>
        We make it 2x the width of the screen (200vw) to get that shallow elliptical curve.
      */}
      <div
        ref={arcRef}
        className="absolute top-[60%] left-1/2 w-[200vw] sm:w-[150vw] h-550 -translate-x-1/2 rounded-[100%]"
        style={{
          // Maps exactly to your SVG <path> fill
          backgroundColor: "#282828",

          // Maps exactly to your SVG <path> stroke
          borderTop: "1.5px solid #fe9227b3",

          // Replaces the heavy 250px SVG filter with optimized CSS box-shadows.
          // By combining a wide ambient glow and a tight edge glow, you get the same
          // intense bloom effect but at zero performance cost.
          boxShadow: `
            0 -40px 150px -20px rgba(247, 152, 57, 0.4), /* Wide ambient glow */
            0 -10px 30px -5px rgba(247, 152, 57, 0.6)    /* Sharp bright edge glow */
          `,
        }}
      />
    </div>
  );
}
