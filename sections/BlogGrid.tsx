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
