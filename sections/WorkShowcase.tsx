"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import WorkCategoryFilter from "@/components/WorkCategoryFilter";
import WorkMain from "@/components/WorkMain";
import { WorkCategories } from "@/lib/data";

const WorkShowcase = () => {
  const searchParams = useSearchParams();
  const categoryFromURL = searchParams && searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState<string | null>(
    WorkCategories.includes(categoryFromURL ?? "") ? categoryFromURL : null,
  );

  // Sync if user navigates back/forward
  useEffect(() => {
    const cat = searchParams && searchParams.get("category");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setActiveCategory(WorkCategories.includes(cat ?? "") ? cat : null);
  }, [searchParams]);

  return (
    <>
      <WorkCategoryFilter
        categories={WorkCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <WorkMain activeCategory={activeCategory} />
    </>
  );
};

export default WorkShowcase;
