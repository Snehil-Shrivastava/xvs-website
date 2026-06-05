"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, lazy } from "react";

// These are async server components — we keep them as-is, imported normally.
// BlogGrid is now a client component; no Suspense wrapper needed for it.
import FilteredBlogsGrid from "./BlogGrid";

// Lazy-loaded so the server components can stay server-side rendered
// while this shell is a lightweight client boundary.
// We still need FeaturedBlog and BlogSidebar as server components via Suspense.
// The trick: we put this client component BELOW the server-rendered shell.

// Since this is a client component, we can't directly import server components
// and render them here. Instead, BlogMain becomes a thin router that:
// - shows FilteredBlogsGrid (client) when filters are active
// - renders nothing for the main view (FeaturedBlog is rendered server-side in BlogsPage)

interface Props {
  // Passed from the server component parent
  hasFeaturedSlot: React.ReactNode;
  hasSidebarSlot: React.ReactNode;
}

const BlogMainClient = ({ hasFeaturedSlot, hasSidebarSlot }: Props) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const tag = searchParams.get("tag");

  const isFiltered = !!(category || tag);

  return (
    <div className="flex gap-20 max-lg:gap-10">
      <div className="sm:flex-[0.7] font-poppins">
        {isFiltered ? (
          <FilteredBlogsGrid
            type={category ? "category" : "tag"}
            value={(category ?? tag)!}
          />
        ) : (
          hasFeaturedSlot
        )}
      </div>
      <div className="flex-[0.3] max-sm:hidden">{hasSidebarSlot}</div>
    </div>
  );
};

export default BlogMainClient;
