"use client";

import { useEffect, useRef } from "react";
import { WorkCardData } from "@/lib/data";
import ShowcaseCard from "./ShowcaseCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type WorkMainProps = {
  activeCategories: string[];
  shouldScroll: boolean;
  onScrollComplete: () => void;
};

const getScrollOffset = () => {
  if (typeof window === "undefined") return 0;
  const width = window.innerWidth;
  if (width < 640) return 149;
  if (width < 768) return 179;
  if (width < 1024) return 199;
  if (width < 1280) return 209;
  return 319;
};

const WorkMain = ({
  activeCategories,
  shouldScroll,
  onScrollComplete,
}: WorkMainProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run scroll calculations if triggered by a manual filter selection
    if (!shouldScroll) return;

    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      ScrollTrigger.refresh();

      const container = containerRef.current;
      const containerTop =
        container.getBoundingClientRect().top + window.scrollY;

      const filterBar =
        document.querySelector<HTMLElement>("[data-work-filter]");
      const filterHeight = filterBar ? filterBar.offsetHeight : 0;

      const pinOffset = getScrollOffset();

      window.scrollTo({
        top: containerTop - (pinOffset + filterHeight),
        behavior: "smooth",
      });

      // Reset the trigger state
      onScrollComplete();
    }, 50);

    return () => clearTimeout(timer);
  }, [activeCategories, shouldScroll, onScrollComplete]);

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
