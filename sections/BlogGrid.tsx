// import Link from "next/link";
// import { ArrowLeft } from "lucide-react";
// import SimilarBlogsCard from "@/components/SimilarBlogsCard";
// import { getBlogsByCategory, getBlogsByTag } from "@/lib/blog-queries";

// interface Props {
//   type: "category" | "tag";
//   value: string; // category ID or tag string
// }

// const FilteredBlogsGrid = async ({ type, value }: Props) => {
//   const { blogs, label } =
//     type === "category"
//       ? await getBlogsByCategory(value)
//       : await getBlogsByTag(value);

//   return (
//     <div className="flex flex-col gap-10">
//       {/* ── Header ── */}
//       <div className="flex flex-col gap-4">
//         {/* Back to all posts */}
//         <Link
//           href="/blogs"
//           className="flex items-center gap-2 text-neutral-500 hover:text-brand-orange transition-colors text-sm w-fit"
//         >
//           <ArrowLeft size={14} />
//           <span>All posts</span>
//         </Link>

//         {/* Filter label + post count */}
//         <div className="flex items-baseline gap-4">
//           <h2 className="font-calSans 1920p:text-3xl xl:text-2xl lg:text-xl text-brand-orange-light">
//             {type === "tag" ? `#${label}` : label}
//           </h2>
//           <span className="text-neutral-500 text-sm font-poppins">
//             {blogs.totalDocs} {blogs.totalDocs === 1 ? "post" : "posts"}
//           </span>
//         </div>
//       </div>

//       {/* ── Grid or empty state ── */}
//       {blogs.docs.length === 0 ? (
//         <p className="text-neutral-400 font-poppins text-sm">
//           No posts found for this {type}.
//         </p>
//       ) : (
//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
//           {blogs.docs.map((blog) => (
//             <SimilarBlogsCard
//               key={blog.id}
//               title={blog.title}
//               // @ts-expect-error category title
//               tag={blog.categories?.[0] ? blog.categories[0].title : "Blog"}
//               // @ts-expect-error url
//               coverImage={blog.coverImage ? blog.coverImage.url : ""}
//               slug={blog.slug}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FilteredBlogsGrid;

// ----------------------------

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SimilarBlogsCard from "@/components/SimilarBlogsCard";

interface Blog {
  id: string;
  title: string;
  slug: string;
  coverImage?: { url: string };
  categories?: Array<{ id: string; title: string }>;
}

interface FilterResult {
  type: "category" | "tag";
  label: string;
  blogs: {
    docs: Blog[];
    totalDocs: number;
  };
}

interface Props {
  type: "category" | "tag";
  value: string;
}

const FilteredBlogsGrid = ({ type, value }: Props) => {
  const [data, setData] = useState<FilterResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setData(null);

    const params = new URLSearchParams({ [type]: value });

    fetch(`/api/blogs/filter?${params}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [type, value]);

  if (loading) return <FilteredGridSkeleton />;

  if (!data) return null;

  const { blogs, label } = data;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-neutral-500 hover:text-brand-orange transition-colors text-sm w-fit"
        >
          <ArrowLeft size={14} />
          <span>All posts</span>
        </Link>

        <div className="flex items-baseline gap-4">
          <h2 className="font-calSans 1920p:text-3xl xl:text-2xl lg:text-xl text-brand-orange-light">
            {type === "tag" ? `#${label}` : label}
          </h2>
          <span className="text-neutral-500 text-sm font-poppins">
            {blogs.totalDocs} {blogs.totalDocs === 1 ? "post" : "posts"}
          </span>
        </div>
      </div>

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
              tag={blog.categories?.[0]?.title ?? "Blog"}
              coverImage={blog.coverImage?.url ?? ""}
              slug={blog.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FilteredGridSkeleton = () => (
  <div className="flex flex-col gap-10 animate-pulse">
    <div className="flex items-center gap-4">
      <div className="h-8 w-40 bg-neutral-600 rounded" />
      <div className="h-4 w-16 bg-neutral-700 rounded" />
    </div>
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

export default FilteredBlogsGrid;
