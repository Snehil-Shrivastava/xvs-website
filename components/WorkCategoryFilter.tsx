"use client";

import { LayoutPanelTop, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

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

  // Handles horizontal scrolling when Chevrons are clicked
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
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
        data-work-filter
        className="sticky top-[149px] sm:top-[179px] md:top-[199px] lg:top-[209px] xl:top-[319px] flex flex-wrap items-center justify-center gap-4 2xl:gap-5 bg-background relative z-10 pb-5 font-poppins"
      >
        <div className="flex flex-col md:flex-row flex-wrap gap-4 max-sm:gap-4 max-sm:w-[95%] max-sm:mx-auto items-center justify-center w-full md:w-auto">
          {/* Mobile Carousel Layout */}
          <div className="flex items-center w-full md:contents gap-1">
            <button
              onClick={() => scroll("left")}
              className="md:hidden shrink-0 p-1 text-[#ffffff] hover:text-brand-orange transition-colors cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex flex-1 min-w-0 md:flex-wrap items-center gap-4 max-sm:gap-2 overflow-x-auto scroll-smooth md:contents [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
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
