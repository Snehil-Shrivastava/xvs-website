import BlogMain from "@/sections/BlogMain";
import { Suspense } from "react";

interface BlogsPageProps {
  searchParams: Promise<{ category?: string; tag?: string }>;
}

const BlogsPage = () => {
  return (
    <div className="relative z-1">
      <div className="h-[65vh] max-sm:h-150 sm:max-md:h-150 md:max-lg:h-220">
        <div className="flex flex-col max-sm:gap-4 md:max-lg:gap-5 gap-8 items-center justify-center h-full">
          <h3 className="font-calSans text-[9rem]/[9.5rem] max-sm:text-[40px]/[44px] sm:max-md:text-6xl md:max-lg:text-7xl lg:max-xl:text-8xl xl:max-1440p:text-9xl text-brand-cream text-center select-none">
            <span>Blogs</span>
          </h3>
          <span className="text-[22px] max-sm:text-xl sm:max-md:text-2xl md:max-lg:text-3xl font-poppins font-light">
            Creative insights & design stories
          </span>
        </div>
      </div>
      <div className="min-h-screen max-w-450 pt-50 max-lg:pt-30 sm:max-md:pt-40 pb-50 w-4/5 max-sm:w-9/10 sm:max-md:w-9/10 md:max-lg:w-[85%] mx-auto flex flex-col gap-15">
        <Suspense fallback={<BlogMainSkeleton />}>
          <BlogMain />
        </Suspense>
      </div>
    </div>
  );
};

const BlogMainSkeleton = () => (
  <div className="flex gap-20 max-lg:gap-10 animate-pulse">
    {/* Left Column (Featured Blog) Skeleton */}
    <div className="flex-[0.7] flex flex-col gap-8">
      <div className="w-full aspect-[1.53] bg-neutral-600 rounded-2xl" />
      <div className="h-10 w-3/4 bg-neutral-600 rounded" />
      <div className="h-4 w-1/4 bg-neutral-600 rounded" />
      <div className="h-24 w-full bg-neutral-600 rounded" />
    </div>
    {/* Right Column (Sidebar) Skeleton */}
    <div className="flex-[0.3] max-sm:hidden flex flex-col gap-12">
      <div>
        <div className="h-8 w-1/2 bg-neutral-600 rounded mb-4" />
        <div className="h-4 w-full bg-neutral-600 rounded mb-2" />
        <div className="h-4 w-5/6 bg-neutral-600 rounded" />
      </div>
    </div>
  </div>
);

export default BlogsPage;
