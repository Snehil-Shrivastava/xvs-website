// import FeaturedBlog from "@/sections/FeaturedBlog";
// import BlogSidebar from "./BlogSidebar";
// import { Suspense } from "react";
// import BlogMainClient from "./BlogMainClient";

// // BlogMain is a server component that pre-renders the static slots
// // and passes them as children into the client router.
// // This means FeaturedBlog and BlogSidebar are always server-rendered,
// // and the client component only swaps in FilteredBlogsGrid when filters are active —
// // WITHOUT triggering a server re-render.

// const BlogMain = () => {
//   return (
//     <BlogMainClient
//       hasFeaturedSlot={
//         <Suspense fallback={<FeaturedBlogSkeleton />}>
//           <FeaturedBlog />
//         </Suspense>
//       }
//       hasSidebarSlot={
//         <Suspense fallback={<SidebarSkeleton />}>
//           <BlogSidebar />
//         </Suspense>
//       }
//     />
//   );
// };

// const FeaturedBlogSkeleton = () => (
//   <div className="flex flex-col gap-8 animate-pulse h-screen">
//     <div className="w-full aspect-[1.53] bg-neutral-600" />
//     <div className="h-8 w-3/4 bg-neutral-600 rounded" />
//     <div className="h-4 w-1/2 bg-neutral-600 rounded" />
//     <div className="h-20 w-full bg-neutral-600 rounded" />
//   </div>
// );

// const SidebarSkeleton = () => (
//   <div className="flex flex-col gap-12 animate-pulse">
//     <div className="h-6 w-1/2 bg-neutral-600 rounded" />
//     {[...Array(3)].map((_, i) => (
//       <div key={i} className="h-4 w-full bg-neutral-600 rounded" />
//     ))}
//   </div>
// );

// export default BlogMain;

// --------------------------------------------

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
