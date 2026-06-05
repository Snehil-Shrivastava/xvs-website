// import { getPayload } from "payload";
// import configPromise from "@payload-config";
// import SimilarBlogsCard from "@/components/SimilarBlogsCard"; // Reusable card!
// import { cacheLife, cacheTag } from "next/cache";

// interface BlogGridProps {
//   activeCategory?: string;
//   activeTag?: string;
// }

// const BlogGrid = async ({ activeCategory, activeTag }: BlogGridProps) => {
//   "use cache";
//   cacheTag("blogs", "categories");
//   cacheLife("minutes");
//   const payload = await getPayload({ config: configPromise });

//   let whereQuery: any = {};

//   // 1. Build Query for Category
//   if (activeCategory) {
//     // Find the category ID by its slug first
//     const categoryDoc = await payload.find({
//       collection: "categories",
//       where: { slug: { equals: activeCategory } },
//       limit: 1,
//     });

//     const catId = categoryDoc.docs[0]?.id;

//     if (catId) {
//       whereQuery = {
//         categories: {
//           contains: catId,
//         },
//       };
//     }
//   }

//   // 2. Build Query for Tag
//   if (activeTag) {
//     whereQuery = {
//       "tags.tag": {
//         equals: activeTag,
//       },
//     };
//   }

//   // 3. Fetch filtered posts
//   const result = await payload.find({
//     collection: "blogs",
//     where: whereQuery,
//     sort: "-publishedAt",
//     depth: 2,
//   });

//   const posts = result.docs;

//   // Title of the filter view
//   const filterTitle = activeCategory
//     ? `Category : ${activeCategory.replace("-", " ")}`
//     : `Tag: #${activeTag}`;

//   return (
//     <div className="flex flex-col gap-10">
//       <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
//         <h2 className="text-2xl max-xl:text-lg max-lg:text-base font-poppins font-medium text-neutral-300 uppercase select-none">
//           {filterTitle}
//         </h2>
//         <span className="text-neutral-500 text-sm">
//           {posts.length} {posts.length === 1 ? "post" : "posts"} found
//         </span>
//       </div>

//       {posts.length === 0 ? (
//         <p className="text-neutral-500 py-10">
//           No blogs found matching this filter.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
//           {posts.map((post) => (
//             <SimilarBlogsCard
//               key={post.id}
//               title={post.title}
//               // @ts-expect-error title
//               tag={post.categories?.[0] ? post.categories[0].title : "Blog"}
//               // @ts-expect-error url
//               coverImage={post.coverImage ? post.coverImage.url : ""}
//               slug={post.slug}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BlogGrid;

// -------------------------------------- new

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SimilarBlogsCard from "@/components/SimilarBlogsCard";
import { getBlogsByCategory, getBlogsByTag } from "@/lib/blog-queries";

interface Props {
  type: "category" | "tag";
  value: string; // category ID or tag string
}

const FilteredBlogsGrid = async ({ type, value }: Props) => {
  const { blogs, label } =
    type === "category"
      ? await getBlogsByCategory(value)
      : await getBlogsByTag(value);

  return (
    <div className="flex flex-col gap-10">
      {/* ── Header ── */}
      <div className="flex flex-col gap-4">
        {/* Back to all posts */}
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-neutral-500 hover:text-brand-orange transition-colors text-sm w-fit"
        >
          <ArrowLeft size={14} />
          <span>All posts</span>
        </Link>

        {/* Filter label + post count */}
        <div className="flex items-baseline gap-4">
          <h2 className="font-calSans 1920p:text-3xl xl:text-2xl lg:text-xl text-brand-orange-light">
            {type === "tag" ? `#${label}` : label}
          </h2>
          <span className="text-neutral-500 text-sm font-poppins">
            {blogs.totalDocs} {blogs.totalDocs === 1 ? "post" : "posts"}
          </span>
        </div>
      </div>

      {/* ── Grid or empty state ── */}
      {blogs.docs.length === 0 ? (
        <p className="text-neutral-400 font-poppins text-sm">
          No posts found for this {type}.
        </p>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {blogs.docs.map((blog) => (
            <SimilarBlogsCard
              key={blog.id}
              title={blog.title}
              // @ts-expect-error category title
              tag={blog.categories?.[0] ? blog.categories[0].title : "Blog"}
              // @ts-expect-error url
              coverImage={blog.coverImage ? blog.coverImage.url : ""}
              slug={blog.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilteredBlogsGrid;
