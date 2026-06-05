import FeaturedBlog from "@/sections/FeaturedBlog";
import BlogSidebar from "./BlogSidebar";
import BlogGrid from "./BlogGrid";
import { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ category?: string; tag?: string }>;
}

const BlogMain = async () => {
  return (
    <div className="flex gap-20 max-lg:gap-10">
      <div className="sm:flex-[0.7] font-poppins">
        <Suspense fallback={<FeaturedBlogSkeleton />}>
          {/* {isFiltered ? (
            <BlogGrid
              activeCategory={resolvedParams.category}
              activeTag={resolvedParams.tag}
            />
          ) : ( */}
          <FeaturedBlog />
          {/* )} */}
        </Suspense>
      </div>
      <div className="flex-[0.3] max-sm:hidden">
        <Suspense fallback={<SidebarSkeleton />}>
          <BlogSidebar
          // activeCategory={resolvedParams.category}
          // activeTag={resolvedParams.tag}
          />
        </Suspense>
      </div>
    </div>
  );
};

const FeaturedBlogSkeleton = () => (
  <div className="flex flex-col gap-8 animate-pulse h-screen">
    <div className="w-full aspect-[1.53] bg-neutral-600" />
    <div className="h-8 w-3/4 bg-neutral-600 rounded" />
    <div className="h-4 w-1/2 bg-neutral-600 rounded" />
    <div className="h-20 w-full bg-neutral-600 rounded" />
  </div>
);

const SidebarSkeleton = () => (
  <div className="flex flex-col gap-12 animate-pulse">
    <div className="h-6 w-1/2 bg-neutral-600 rounded" />
    {[...Array(3)].map((_, i) => (
      <div key={i} className="h-4 w-full bg-neutral-600 rounded" />
    ))}
  </div>
);

export default BlogMain;
