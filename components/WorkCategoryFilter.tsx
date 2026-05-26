"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayoutPanelTop, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type CategoryProps = {
  categories: string[];
  activeCategories: string[];
  onCategoryChange: (category: string) => void;
  onShowAll: () => void;
};

const WorkCategoryFilter = ({
  categories,
  activeCategories,
  onCategoryChange,
  onShowAll,
}: CategoryProps) => {
  const categoryFilterContainerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const buildTimeline = (offset: string) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: categoryFilterContainerRef.current,
            start: `top top+=${offset}`,
            end: "max",
            pin: true,
            pinSpacing: false,
            scrub: 1,
          },
        });
      };

      mm.add("(max-width: 639px)", () => buildTimeline("149px"));
      mm.add("(min-width: 640px) and (max-width: 767px)", () =>
        buildTimeline("179px"),
      );
      mm.add("(min-width: 768px)", () => buildTimeline("299px"));
    },
    { scope: categoryFilterContainerRef },
  );

  // Handles the horizontal scroll when Chevrons are clicked
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200; // You can adjust scroll distance here
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        ref={categoryFilterContainerRef}
        className="flex flex-wrap items-center justify-center gap-4 2xl:gap-5 bg-background relative z-10 pb-5"
      >
        {/* Main Layout: Flex-Col on Mobile (Show All on bottom), Flex-Wrap on Desktop */}
        <div className="flex flex-col md:flex-row flex-wrap gap-4 max-sm:gap-4 max-sm:w-[95%] max-sm:mx-auto items-center justify-center w-full md:w-auto">
          {/* Mobile Carousel Layout */}
          <div className="flex items-center w-full md:contents gap-1">
            {/* Left Chevron (Mobile Only) */}
            <button
              onClick={() => scroll("left")}
              className="md:hidden shrink-0 p-1 text-[#ffffff] hover:text-brand-orange transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Scrollable Container */}
            <div
              ref={scrollContainerRef}
              className="flex flex-1 min-w-0 md:flex-wrap items-center gap-4 max-sm:gap-2 overflow-x-auto scroll-smooth md:contents [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  // Added `whitespace-nowrap flex-shrink-0` to prevent text wrapping on mobile
                  className={`pr-8 py-2 rounded-4xl font-medium transition-colors cursor-pointer select-none text-base 2xl:text-lg whitespace-nowrap shrink-0
                  ${
                    activeCategories.includes(cat)
                      ? "text-brand-orange"
                      : "text-[#ffffff] hover:text-brand-orange"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Chevron (Mobile Only) */}
            <button
              onClick={() => scroll("right")}
              className="md:hidden shrink-0 p-1 text-[#ffffff] hover:text-brand-orange transition-colors cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Show All Button */}
          <button
            onClick={onShowAll}
            // Added `whitespace-nowrap flex-shrink-0` here as well
            className={`px-4 py-2 rounded-4xl font-medium transition-colors flex items-center gap-2 cursor-pointer select-none whitespace-nowrap shrink-0 ${
              activeCategories.length === 0
                ? "bg-brand-orange text-white text-xs 2xl:text-base"
                : "text-[#7b7b7b] hover:bg-brand hover:text-white text-xs 2xl:text-base"
            }`}
          >
            <LayoutPanelTop
              size={16}
              fill={`${activeCategories.length === 0 ? "#fff" : "transparent"}`}
            />
            <span>Show All</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkCategoryFilter;
