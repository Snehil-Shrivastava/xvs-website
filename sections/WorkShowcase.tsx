// "use client";

// import { useState, useEffect } from "react";
// import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
// import WorkCategoryFilter from "@/components/WorkCategoryFilter";
// import WorkMain from "@/components/WorkMain";
// import { WorkCategories } from "@/lib/data";

// const WorkShowcase = () => {
//   const searchParams = useSearchParams() as ReadonlyURLSearchParams;
//   const categoryFromURL = searchParams && searchParams.get("category");

//   const handleCategoryChange = (category: string) => {
//     setActiveCategories(
//       (prev) =>
//         prev.includes(category)
//           ? prev.filter((c) => c !== category) // deselect if already active
//           : [...prev, category], // add if not
//     );
//   };

//   const handleShowAll = () => setActiveCategories([]);

//   const [activeCategories, setActiveCategories] = useState<string[]>(
//     categoryFromURL && WorkCategories.includes(categoryFromURL)
//       ? [categoryFromURL]
//       : [],
//   );

//   useEffect(() => {
//     const cat = searchParams.get("category");
//     setActiveCategories(cat && WorkCategories.includes(cat) ? [cat] : []);
//   }, [searchParams]);

//   return (
//     <>
//       <WorkCategoryFilter
//         categories={WorkCategories}
//         activeCategories={activeCategories}
//         onCategoryChange={handleCategoryChange}
//         onShowAll={handleShowAll}
//       />
//       <WorkMain activeCategories={activeCategories} />
//     </>
//   );
// };

// export default WorkShowcase;

// -----------------------------------------

"use client";

import { useState, useEffect } from "react";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import WorkCategoryFilter from "@/components/WorkCategoryFilter";
import WorkMain from "@/components/WorkMain";
import { WorkCategories } from "@/lib/data";

const WorkShowcase = () => {
  const searchParams = useSearchParams() as ReadonlyURLSearchParams;
  const categoryFromURL = searchParams && searchParams.get("category");

  const [activeCategories, setActiveCategories] = useState<string[]>(
    categoryFromURL && WorkCategories.includes(categoryFromURL)
      ? [categoryFromURL]
      : [],
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
    const cat = searchParams.get("category");
    setActiveCategories(cat && WorkCategories.includes(cat) ? [cat] : []);
    setShouldScroll(false); // Prevent scrolling on initial mount or back/forward actions
  }, [searchParams]);

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
