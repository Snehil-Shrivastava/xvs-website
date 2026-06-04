"use client";

import { useSearchParams } from "next/navigation";

// Just a shell — imports the server components as children via props
const BlogMainClient = ({
  featuredSlot,
  sidebarSlot,
  gridSlot,
}: {
  featuredSlot: React.ReactNode;
  sidebarSlot: React.ReactNode;
  gridSlot: React.ReactNode;
}) => {
  const searchParams = useSearchParams();
  const isFiltered =
    !!searchParams.get("category") || !!searchParams.get("tag");

  return (
    <div className="flex gap-20 max-lg:gap-10">
      <div className="sm:flex-[0.7] font-poppins">
        {isFiltered ? gridSlot : featuredSlot}
      </div>
      <div className="flex-[0.3] max-sm:hidden">{sidebarSlot}</div>
    </div>
  );
};

export default BlogMainClient;
