// sections/FilteredBlogs.tsx  (server component; replaces the client-side BlogGrid.tsx)
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SimilarBlogsCard from "@/components/SimilarBlogsCard";

type Props = {
  type: "category" | "tag";
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  blogs: { docs: any[]; totalDocs: number };
};

const FilteredBlogs = ({ type, label, blogs }: Props) => {
  const { docs, totalDocs } = blogs;

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Link
          href="/blog"
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
            {totalDocs} {totalDocs === 1 ? "post" : "posts"}
            {totalDocs > docs.length && ` (showing ${docs.length})`}
          </span>
        </div>
      </div>

      {docs.length === 0 ? (
        <p className="text-neutral-400 font-poppins text-sm">
          No posts found for this {type}.
        </p>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {docs.map((blog) => (
            <SimilarBlogsCard
              key={blog.id}
              title={blog.title}
              tag={blog.categories?.[0]?.title ?? "Blog"}
              coverImage={blog.coverImage?.url ?? ""} // check SimilarBlogsCard copes with ""
              slug={blog.slug}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilteredBlogs;
