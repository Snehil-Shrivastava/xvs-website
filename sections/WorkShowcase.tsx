"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
// import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import WorkCategoryFilter from "@/components/WorkCategoryFilter";
import WorkMain from "@/components/WorkMain";
import { WorkCategories } from "@/lib/data";
import CategoryUrlSync from "@/components/CategoryUrlSync";

const toActive = (cat: string | null) =>
  cat && WorkCategories.includes(cat) ? [cat] : [];

const WorkShowcase = () => {
  // const searchParams = useSearchParams() as ReadonlyURLSearchParams;
  // const categoryFromURL = searchParams && searchParams.get("category");

  const [activeCategories, setActiveCategories] = useState<string[]>([]);

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

  // useEffect(() => {
  //   // const cat = searchParams.get("category");
  //   setActiveCategories(toActive(initialCategory));
  //   setShouldScroll(false); // Prevent scrolling on initial mount or back/forward actions
  // }, [initialCategory]);

  // Called when the URL's ?category= changes (footer links, back/forward)
  const syncFromUrl = useCallback((cats: string[]) => {
    setActiveCategories(cats);
    setShouldScroll(false); // no auto-scroll on load or back/forward
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <CategoryUrlSync onChange={syncFromUrl} />
      </Suspense>
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
