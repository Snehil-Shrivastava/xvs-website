/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useSearchParams } from "next/navigation";

// // These are async server components — we keep them as-is, imported normally.
// // BlogGrid is now a client component; no Suspense wrapper needed for it.
// import FilteredBlogsGrid from "./BlogGrid";

// // Lazy-loaded so the server components can stay server-side rendered
// // while this shell is a lightweight client boundary.
// // We still need FeaturedBlog and BlogSidebar as server components via Suspense.
// // The trick: we put this client component BELOW the server-rendered shell.

// // Since this is a client component, we can't directly import server components
// // and render them here. Instead, BlogMain becomes a thin router that:
// // - shows FilteredBlogsGrid (client) when filters are active
// // - renders nothing for the main view (FeaturedBlog is rendered server-side in BlogsPage)

// interface Props {
//   // Passed from the server component parent
//   hasFeaturedSlot: React.ReactNode;
//   hasSidebarSlot: React.ReactNode;
// }

// const BlogMainClient = ({ hasFeaturedSlot, hasSidebarSlot }: Props) => {
//   const searchParams = useSearchParams();
//   const category = searchParams.get("category");
//   const tag = searchParams.get("tag");

//   const isFiltered = !!(category || tag);

//   return (
//     <div className="flex gap-20 max-lg:gap-10">
//       <div className="sm:flex-[0.7] font-poppins flex flex-col gap-50">
//         {isFiltered ? (
//           <FilteredBlogsGrid
//             type={category ? "category" : "tag"}
//             value={(category ?? tag)!}
//           />
//         ) : (
//           hasFeaturedSlot
//         )}
//       </div>
//       <div className="flex-[0.3] max-sm:hidden">{hasSidebarSlot}</div>
//     </div>
//   );
// };

// export default BlogMainClient;

// -------------------------------------

"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import FilteredBlogsGrid from "./BlogGrid";
import FeaturedBlog from "./FeaturedBlog";
import { fetchPaginatedBlogsAction } from "@/app/(frontend)/(app)/actions/blog-actions";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  initialBlogsData: {
    docs: any[];
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
  hasSidebarSlot: React.ReactNode;
}

const BlogMainClient = ({ initialBlogsData, hasSidebarSlot }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const tag = searchParams.get("tag");
  const pageParam = searchParams.get("page");
  const currentPage = parseInt(pageParam || "1", 10);

  const isFiltered = !!(category || tag);

  const [blogsData, setBlogsData] = useState(initialBlogsData);
  const [isLoading, setIsLoading] = useState(false);

  // Triggered on page updates. Avoids querying client-side if we are on page 1.
  useEffect(() => {
    if (isFiltered) return;

    if (currentPage === 1) {
      setBlogsData(initialBlogsData);
      return;
    }

    const fetchPageData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchPaginatedBlogsAction(currentPage);
        setBlogsData({
          docs: response.docs,
          totalPages: response.totalPages,
          hasNextPage: response.hasNextPage,
          hasPrevPage: response.hasPrevPage,
        });
      } catch (err) {
        console.error("Failed to load paginated page:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPageData();
  }, [currentPage, isFiltered, initialBlogsData]);

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams?.toString());
    params.set("page", newPage.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  };

  return (
    <div className="flex gap-20 max-lg:gap-10">
      <div className="sm:flex-[0.7] font-poppins flex flex-col gap-50">
        {isFiltered ? (
          <FilteredBlogsGrid
            type={category ? "category" : "tag"}
            value={(category ?? tag)!}
          />
        ) : (
          <div className="flex flex-col gap-25 relative">
            {isLoading ? (
              <div className="min-h-[50vh] flex flex-col gap-8 items-center justify-center">
                <div className="w-10 h-10 border-2 border-brand-orange border-t-transparent rounded-full animate-spin" />
                <span className="text-neutral-400 text-sm">
                  Loading page {currentPage}...
                </span>
              </div>
            ) : (
              <>
                <FeaturedBlog posts={blogsData.docs} />

                {/* Pagination Navigation */}
                {blogsData.totalPages > 1 && (
                  <div className="flex justify-between items-center gap-4 mt-20 pt-10 border-t border-t-neutral-800">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={!blogsData.hasPrevPage || isLoading}
                      className={`flex gap-2 items-center px-6 py-2.5 rounded-full border border-neutral-700 max-md:border-none text-sm max-md:text-[10px] uppercase tracking-wider font-medium transition-colors ${
                        !blogsData.hasPrevPage || isLoading
                          ? "text-neutral-600 border-neutral-800 cursor-not-allowed"
                          : "text-brand-cream md:hover:bg-neutral-800 hover:text-brand-orange hover:border-brand-orange cursor-pointer"
                      }`}
                    >
                      <ArrowLeft size={15} className="max-md:w-3" />
                      <span>Previous</span>
                    </button>
                    <span className="text-sm max-md:text-[10px] text-neutral-400 font-light">
                      Page {currentPage} of {blogsData.totalPages}
                    </span>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={!blogsData.hasNextPage || isLoading}
                      className={`flex gap-2 items-center px-6 py-2.5 rounded-full border border-neutral-700 max-md:border-none text-sm max-md:text-[10px] uppercase tracking-wider font-medium transition-colors ${
                        !blogsData.hasNextPage || isLoading
                          ? "text-neutral-600 border-neutral-800 cursor-not-allowed"
                          : "text-brand-cream md:hover:bg-neutral-800 hover:text-brand-orange hover:border-brand-orange cursor-pointer"
                      }`}
                    >
                      <span>Next</span>
                      <ArrowRight size={15} className="max-md:w-3" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
      <div className="flex-[0.3] max-sm:hidden relative">{hasSidebarSlot}</div>
    </div>
  );
};

export default BlogMainClient;
