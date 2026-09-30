"use client";

import { useState, useEffect } from "react";
// import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import WorkCategoryFilter from "@/components/WorkCategoryFilter";
import WorkMain from "@/components/WorkMain";
import { WorkCategories } from "@/lib/data";

const toActive = (cat: string | null) =>
  cat && WorkCategories.includes(cat) ? [cat] : [];

const WorkShowcase = ({
  initialCategory,
}: {
  initialCategory: string | null;
}) => {
  // const searchParams = useSearchParams() as ReadonlyURLSearchParams;
  // const categoryFromURL = searchParams && searchParams.get("category");

  const [activeCategories, setActiveCategories] = useState<string[]>(
    toActive(initialCategory),
  );

  // Track if the change was initiated by a user click
  const [shouldScroll, setShouldScroll] = useState(false);

  const handleCategoryChange = (category: string) => {
    setShouldScroll(true); // User click triggers scroll
    setActiveCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleShowAll = () => {
    setShouldScroll(true); // User click triggers scroll
    setActiveCategories([]);
  };

  useEffect(() => {
    // const cat = searchParams.get("category");
    setActiveCategories(toActive(initialCategory));
    setShouldScroll(false); // Prevent scrolling on initial mount or back/forward actions
  }, [initialCategory]);

  return (
    <>
      <WorkCategoryFilter
        categories={WorkCategories}
        activeCategories={activeCategories}
        onCategoryChange={handleCategoryChange}
        onShowAll={handleShowAll}
      />
      <WorkMain
        activeCategories={activeCategories}
        shouldScroll={shouldScroll}
        onScrollComplete={() => setShouldScroll(false)}
      />
    </>
  );
};

export default WorkShowcase;
