import FeaturedBlog from "@/sections/FeaturedBlog";
import BlogSidebar from "./BlogSidebar";
import { Suspense } from "react";
import FilteredBlogsGrid from "./BlogGrid";

interface Props {
  searchParams: { category?: string; tag?: string };
}

const BlogMain = ({ searchParams }: Props) => {
  const { category, tag } = searchParams;
  return (
    <div className="flex gap-20 max-lg:gap-10">
      <div className="sm:flex-[0.7] font-poppins">
        {category ? (
          <Suspense
            key={`category-${category}`}
            fallback={<FilteredGridSkeleton />}
          >
            <FilteredBlogsGrid type="category" value={category} />
          </Suspense>
        ) : tag ? (
          <Suspense key={`tag-${tag}`} fallback={<FilteredGridSkeleton />}>
            <FilteredBlogsGrid type="tag" value={tag} />
          </Suspense>
        ) : (
          <Suspense fallback={<FeaturedBlogSkeleton />}>
            <FeaturedBlog />
          </Suspense>
        )}
      </div>
      <div className="flex-[0.3] max-sm:hidden">
        <Suspense fallback={<SidebarSkeleton />}>
          <BlogSidebar />
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

const FilteredGridSkeleton = () => (
  <div className="flex flex-col gap-10 animate-pulse">
    {/* heading row */}
    <div className="flex items-center gap-4">
      <div className="h-8 w-40 bg-neutral-600 rounded" />
      <div className="h-4 w-16 bg-neutral-700 rounded" />
    </div>
    {/* card grid */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="w-full aspect-[1.53] bg-neutral-600 rounded" />
          <div className="h-5 w-3/4 bg-neutral-600 rounded" />
          <div className="h-4 w-1/4 bg-neutral-700 rounded" />
        </div>
      ))}
    </div>
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
