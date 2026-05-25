"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayoutPanelTop } from "lucide-react";
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
  const categoryFilterContainerRef = useRef(null);

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
      mm.add("(min-width: 640px)", () => buildTimeline("299px"));
    },
    { scope: categoryFilterContainerRef },
  );

  return (
    <>
      <div
        ref={categoryFilterContainerRef}
        className="flex flex-wrap items-center justify-center gap-4 2xl:gap-5 bg-background relative z-10 pb-5"
      >
        <div className="flex flex-wrap gap-4 max-sm:gap-1 max-sm:w-[90%] max-sm:mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`pr-8 py-2 rounded-4xl font-medium transition-colors cursor-pointer select-none text-base 2xl:text-lg
              ${activeCategories.includes(cat) ? "text-brand-orange" : "text-[#ffffff] hover:text-brand-orange"}`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={onShowAll}
            className={`px-4 py-2 rounded-4xl font-medium transition-colors flex items-center gap-2 cursor-pointer select-none ${
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
