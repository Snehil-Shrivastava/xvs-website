"use client";

import { useState, useEffect } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import WorkCategoryFilter from "@/components/WorkCategoryFilter";
import WorkMain from "@/components/WorkMain";
import { WorkCategories } from "@/lib/data";

const WorkShowcase = () => {
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;
  const categoryFromURL = searchParams && searchParams.get("category");

  const handleCategoryChange = (category: string) => {
    setActiveCategories(
      (prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // deselect if already active
          : [...prev, category], // add if not
    );
  };

  const handleShowAll = () => setActiveCategories([]);

  const [activeCategories, setActiveCategories] = useState<string[]>(
    categoryFromURL && WorkCategories.includes(categoryFromURL)
      ? [categoryFromURL]
      : [],
  );

  useEffect(() => {
    const cat = searchParams.get("category");
    setActiveCategories(cat && WorkCategories.includes(cat) ? [cat] : []);
  }, [searchParams]);

  return (
    <>
      <WorkCategoryFilter
        categories={WorkCategories}
        activeCategories={activeCategories}
        onCategoryChange={handleCategoryChange}
        onShowAll={handleShowAll}
      />
      <WorkMain activeCategories={activeCategories} />
    </>
  );
};

export default WorkShowcase;
