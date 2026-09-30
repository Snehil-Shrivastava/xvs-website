// components/BlogPagination.tsx  (server component, real <a href> links crawlers can follow)
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const hrefFor = (p: number) => (p <= 1 ? "/blog" : `/blog/page/${p}`);

const base =
  "flex gap-2 items-center px-6 py-2.5 rounded-full border border-neutral-700 max-md:border-none text-sm max-md:text-[10px] uppercase tracking-wider font-medium transition-colors";
const enabled =
  "text-brand-cream md:hover:bg-neutral-800 hover:text-brand-orange hover:border-brand-orange";
const disabled = "text-neutral-600 border-neutral-800 cursor-not-allowed";

const BlogPagination = ({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) => {
  if (totalPages <= 1) return null;
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return (
    <nav
      aria-label="Blog pagination"
      className="flex justify-between items-center gap-4 mt-20 pt-10 border-t border-t-neutral-800"
    >
      {hasPrev ? (
        <Link
          href={hrefFor(page - 1)}
          rel="prev"
          className={`${base} ${enabled}`}
        >
          <ArrowLeft size={15} className="max-md:w-3" />
          <span>Previous</span>
        </Link>
      ) : (
        <span aria-disabled="true" className={`${base} ${disabled}`}>
          <ArrowLeft size={15} className="max-md:w-3" />
          <span>Previous</span>
        </span>
      )}

      <span className="text-sm max-md:text-[10px] text-neutral-400 font-light">
        Page {page} of {totalPages}
      </span>

      {hasNext ? (
        <Link
          href={hrefFor(page + 1)}
          rel="next"
          className={`${base} ${enabled}`}
        >
          <span>Next</span>
          <ArrowRight size={15} className="max-md:w-3" />
        </Link>
      ) : (
        <span aria-disabled="true" className={`${base} ${disabled}`}>
          <span>Next</span>
          <ArrowRight size={15} className="max-md:w-3" />
        </span>
      )}
    </nav>
  );
};

export default BlogPagination;
