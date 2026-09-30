"use client";

// components/StickySidebar.tsx
// Pins the sidebar while the post list scrolls, and releases it when the bottom of the
// sidebar meets the bottom of the list. Uses a ScrollTrigger pin because
// `position: sticky` does not work inside ScrollSmoother's transformed wrapper.

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TOP_OFFSET = 200; // px from the top of the viewport, same as the old pin

const StickySidebar = ({ children }: { children: React.ReactNode }) => {
  const columnRef = useRef<HTMLDivElement>(null); // stretches to the height of the post list
  const pinRef = useRef<HTMLDivElement>(null); // the part that stays in view

  useGSAP(
    () => {
      const column = columnRef.current;
      const pinned = pinRef.current;
      if (!column || !pinned) return;

      const mm = gsap.matchMedia();

      // The sidebar is hidden below 640px (max-sm:hidden), so don't pin there
      mm.add("(min-width: 640px)", () => {
        ScrollTrigger.create({
          trigger: column,
          pin: pinned,
          pinSpacing: false,
          start: `top top+=${TOP_OFFSET}`,
          // release when the column's bottom edge meets the pinned sidebar's bottom edge
          end: () => `bottom top+=${TOP_OFFSET + pinned.offsetHeight}`,
          invalidateOnRefresh: true,
        });

        // Images and the streamed-in sidebar change heights after mount.
        // Coalesce bursts of resize events into one refresh per frame.
        let raf = 0;
        const ro = new ResizeObserver(() => {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => ScrollTrigger.refresh());
        });
        ro.observe(column);
        ro.observe(pinned);

        return () => {
          cancelAnimationFrame(raf);
          ro.disconnect();
        };
      });
    },
    { scope: columnRef },
  );

  return (
    <div ref={columnRef} className="flex-[0.3] max-sm:hidden">
      <div ref={pinRef}>{children}</div>
    </div>
  );
};

export default StickySidebar;
