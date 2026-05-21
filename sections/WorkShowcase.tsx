"use client";

import WorkCategoryFilter from "@/components/WorkCategoryFilter";
import WorkMain from "@/components/WorkMain";
import { WorkCategories } from "@/lib/data";
import { useState } from "react";

const WorkShowcase = () => {
  const workCategories = WorkCategories;
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  return (
    <>
      <WorkCategoryFilter
        categories={workCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <WorkMain activeCategory={activeCategory} />
    </>
  );
};

export default WorkShowcase;
