"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayoutPanelTop } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type CategoryProps = {
  categories: string[];
  activeCategory: string | null;
  onCategoryChange: (category: string | null) => void;
};

const WorkCategoryFilter = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryProps) => {
  const categoryFilterContainerRef = useRef(null);

  // const isShowAll = true;

  useGSAP(
    () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: categoryFilterContainerRef.current,
          start: "top top+=299px",
          end: "max",
          pin: true,
          pinSpacing: false,
          scrub: 1,
          // markers: true,
        },
      });
    },
    { scope: categoryFilterContainerRef },
  );

  return (
    <>
      {/* <div
        ref={categoryFilterContainerRef}
        className="flex flex-wrap items-center justify-center gap-4 2xl:gap-5 max-md:hidden bg-background relative z-10 pb-5"
      >
        <div className="flex flex-wrap gap-4 max-sm:gap-1">
          {categories.map((cat) => {
            const base =
              "pr-8 py-2 rounded-[32px] font-medium transition-colors cursor-pointer";
            return (
              <button
                key={cat}
                className={`${base} text-[#ffffff] hover:text-brand text-base 2xl:text-lg font-extralight select-none`}
              >
                {cat}
              </button>
            );
          })}
          <button
            className={`px-4 py-2 rounded-4xl font-medium transition-colors flex items-center gap-2 cursor-pointer select-none ${
              isShowAll
                ? "bg-brand-orange text-white text-xs 2xl:text-base"
                : "text-[#7b7b7b] hover:bg-brand hover:text-white text-xs 2xl:text-base"
            }`}
          >
            <LayoutPanelTop size={16} fill="#fff" />
            <span>Show All</span>
          </button>
        </div>
      </div> */}

      <div
        ref={categoryFilterContainerRef}
        className="flex flex-wrap items-center justify-center gap-4 2xl:gap-5 max-md:hidden bg-background relative z-10 pb-5"
      >
        <div className="flex flex-wrap gap-4 max-sm:gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`pr-8 py-2 rounded-4xl font-medium transition-colors cursor-pointer select-none text-base 2xl:text-lg
              ${activeCategory === cat ? "text-brand-orange" : "text-[#ffffff] hover:text-brand-orange"}`}
            >
              {cat}
            </button>
          ))}
          <button
            onClick={() => onCategoryChange(null)}
            className={`px-4 py-2 rounded-4xl font-medium transition-colors flex items-center gap-2 cursor-pointer select-none ${
              activeCategory === null
                ? "bg-brand-orange text-white text-xs 2xl:text-base"
                : "text-[#7b7b7b] hover:bg-brand hover:text-white text-xs 2xl:text-base"
            }`}
          >
            <LayoutPanelTop
              size={16}
              fill={`${activeCategory === null ? "#fff" : "transparent"}`}
            />
            <span>Show All</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkCategoryFilter;
