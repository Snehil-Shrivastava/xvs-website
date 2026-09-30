// import BlogsPage from "@/page/BlogsPage";
// import blogBg from "@/videos/blog.mp4";
// import Video from "next-video";

// // No searchParams prop — page is now statically renderable.
// // Filter state lives entirely in the URL and is read client-side.

// const Blogs = () => {
//   return (
//     <div>
//       <div
//         className="h-auto max-sm:h-150 sm:max-lg:h-220 absolute z-0 inset-x-0 overflow-hidden brightness-50"
//         style={{
//           maskImage: "linear-gradient(to bottom, black, transparent 95% 100%)",
//         }}
//       >
//         <div className="overflow-hidden max-sm:w-[250vw] sm:max-md:w-[180vw] md:max-xl:w-[200vw] w-[200vw]">
//           <Video
//             src={blogBg}
//             className="-scale-x-100 services-bg-container h-[90vh] max-xl:h-full"
//             controls={false}
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//         </div>
//       </div>
//       <BlogsPage />
//     </div>
//   );
// };

// export default Blogs;

// ------------------------------ blogs not crawlable fix ------------------------------------

import type { Metadata } from "next";
import BlogsPage from "@/page/BlogsPage";
import BlogListing from "@/sections/BlogListing";
import { getFeaturedBlog } from "@/lib/blog-queries";

export const metadata: Metadata = {
  title: "Blog | xVS Creations",
  description:
    "Creative insights and design stories on branding, UI/UX and motion graphics from the xVS Creations team.", // edit to taste
  alternates: { canonical: "/blog" }, // needs metadataBase in the root layout
};

const Blogs = async () => {
  const data = await getFeaturedBlog(1);
  return (
    <BlogsPage>
      <BlogListing posts={data.docs} page={1} totalPages={data.totalPages} />
    </BlogsPage>
  );
};

export default Blogs;
