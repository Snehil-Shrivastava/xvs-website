"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LayoutPanelTop } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const WorkCategoryFilter = ({ categories }: { categories: string[] }) => {
  const categoryFilterContainerRef = useRef(null);

  const isShowAll = true;

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
      <div
        ref={categoryFilterContainerRef}
        className="flex flex-wrap items-center justify-center gap-4 2xl:gap-5 max-md:hidden bg-background relative z-10 pb-5"
      >
        {/* Regular category buttons */}
        <div className="flex flex-wrap gap-4 max-sm:gap-1">
          {categories.map((cat) => {
            // const isActive = activeCategories?.includes(cat);
            const base =
              "pr-8 py-2 rounded-[32px] font-medium transition-colors cursor-pointer";
            // const state = isActive
            //   ? "text-brand text-base 2xl:text-lg font-extralight"
            //   : "text-[#ffffff] hover:text-brand text-base 2xl:text-lg font-extralight";
            return (
              <button
                key={cat}
                // onClick={() => handleCategoryClick(cat)}
                className={`${base} text-[#ffffff] hover:text-brand text-base 2xl:text-lg font-extralight`}
              >
                {cat}
              </button>
            );
          })}
          <button
            // onClick={() => setActiveCategories(null)}
            className={`px-4 py-2 rounded-4xl font-medium transition-colors flex items-center gap-2 cursor-pointer ${
              isShowAll
                ? "bg-brand-orange text-white text-xs 2xl:text-base"
                : "text-[#7b7b7b] hover:bg-brand hover:text-white text-xs 2xl:text-base"
            }`}
          >
            {/* <ShowAllBtn /> */}
            <LayoutPanelTop size={16} fill="#fff" />
            <span>Show All</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkCategoryFilter;
