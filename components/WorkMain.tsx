"use client";

import { useEffect, useRef } from "react";
import { WorkCardData } from "@/lib/data";
import ShowcaseCard from "./ShowcaseCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type WorkMainProps = {
  activeCategories: string[];
};

// Helper function to match your exact GSAP pin offsets
const getScrollOffset = () => {
  if (typeof window === "undefined") return 0;
  const width = window.innerWidth;
  if (width < 640) return 149;
  if (width < 768) return 179;
  if (width < 1024) return 199;
  if (width < 1280) return 209;
  return 319;
};

const WorkMain = ({ activeCategories }: WorkMainProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    // Skip scrolling on initial mount
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Use a small timeout to allow React to finish painting the new list of cards
    // to the DOM before we calculate positions and scroll.
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      // 1. Force GSAP ScrollTrigger to recalculate layout since the card count changed the page height
      ScrollTrigger.refresh();

      const container = containerRef.current;

      // 2. Get absolute top position of the cards container
      const containerTop =
        container.getBoundingClientRect().top + window.scrollY;

      // 3. Query the filter bar to get its exact height
      const filterBar =
        document.querySelector<HTMLElement>("[data-work-filter]");
      const filterHeight = filterBar ? filterBar.offsetHeight : 0;

      // 4. Get the active GSAP pin offset for this screen width
      const pinOffset = getScrollOffset();

      // 5. Scroll to the top of the cards container, subtracting both the pin offset and the filter height
      window.scrollTo({
        top: containerTop - (pinOffset + filterHeight),
        behavior: "smooth",
      });
    }, 50); // 50ms is enough to let React update the layout smoothly

    return () => clearTimeout(timer);
  }, [activeCategories]);

  const workCards =
    activeCategories.length === 0
      ? WorkCardData
      : WorkCardData.filter((card) =>
          activeCategories.some((cat) => card.category.includes(cat)),
        );

  return (
    <div
      ref={containerRef}
      className="w-9/10 lg:max-xl:w-4/5 max-w-450 mx-auto pt-20 pb-40"
    >
      <div className="flex flex-col gap-30">
        {workCards.map((card, index) => (
          <ShowcaseCard key={index} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkMain;
