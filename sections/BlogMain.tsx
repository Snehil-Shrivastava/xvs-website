import { getFeaturedBlog } from "@/lib/blog-queries";
import BlogSidebar from "./BlogSidebar";
import { Suspense } from "react";
import BlogMainClient from "./BlogMainClient";

const BlogMain = async () => {
  // Retrieve cached Page 1 details (5 posts limit)
  const initialData = await getFeaturedBlog(1);

  return (
    <BlogMainClient
      initialBlogsData={{
        docs: initialData.docs,
        totalPages: initialData.totalPages,
        hasNextPage: initialData.hasNextPage,
        hasPrevPage: initialData.hasPrevPage,
      }}
      hasSidebarSlot={
        <Suspense fallback={<SidebarSkeleton />}>
          <BlogSidebar />
        </Suspense>
      }
    />
  );
};

const SidebarSkeleton = () => (
  <div className="flex flex-col gap-12 animate-pulse">
    <div className="h-6 w-1/2 bg-neutral-600 rounded" />
    {[...Array(3)].map((_, i) => (
      <div key={i} className="h-4 w-full bg-neutral-600 rounded" />
    ))}
  </div>
);

export default BlogMain;
