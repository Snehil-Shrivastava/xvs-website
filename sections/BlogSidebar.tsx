import { ArrowRight } from "lucide-react";
import Image from "next/image";

import recentPostsBullet from "@/public/svg/recent-post-bullet.svg";
import { getSidebarData } from "@/lib/blog-queries";

const BlogSidebar = async () => {
  // categoryCounts is now included — pre-computed inside getSidebarData's
  // cache function so there's zero computation work here on render
  const { recentPosts, categories, allPostsForTags, categoryCounts } =
    await getSidebarData();

  // Extract unique tags (still done here since it's just a Set dedup on
  // already-fetched data, not an extra DB call)
  const uniqueTags = Array.from(
    new Set(
      allPostsForTags.docs.flatMap(
        (post) => post.tags?.map((t) => t.tag) || [],
      ),
    ),
  ).filter(Boolean);

  return (
    <aside className="flex flex-col gap-12 w-full font-poppins">
      {/* ── RECENT POSTS ── */}
      <section>
        <div className="flex w-full pb-8 gap-4">
          <h3 className="text-brand-orange-light font-calSans 1920p:text-3xl xl:text-2xl lg:text-xl max-lg:text-lg border-b border-neutral-800">
            Recent Posts
          </h3>
          <div className="border-b border-b-brand-orange flex-1 h-6" />
        </div>
        <div className="flex flex-col gap-6">
          {recentPosts.docs.map((post) => (
            <div key={post.id} className="flex gap-3 group items-start">
              <Image src={recentPostsBullet} alt="bullet" />
              <p className="1920p:text-base xl:text-sm lg:text-[12px] max-lg:text-[10px] leading-snug group-hover:text-brand-orange transition-colors">
                {post.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section>
        <div className="flex w-full pb-8 gap-4">
          <h3 className="text-brand-orange-light font-calSans 1920p:text-3xl xl:text-2xl lg:text-xl max-lg:text-lg border-b border-neutral-800">
            Categories
          </h3>
          <div className="border-b border-b-brand-orange flex-1 h-6" />
        </div>
        <div className="flex flex-col gap-6">
          {categories.docs.map((cat) => (
            <div
              key={cat.id}
              className="flex items-center gap-2 group transition-colors text-neutral-300 hover:text-white"
            >
              <ArrowRight className="text-brand-orange/50 group-hover:text-brand-orange" />
              <span className="1920p:text-base xl:text-sm lg:text-[12px] max-lg:text-[10px]">
                {cat.title}
              </span>
              {/* No more .filter() loop — just a direct lookup on the pre-computed map */}
              <sup className="text-[12px] ml-1 text-neutral-500">
                {categoryCounts[cat.id] ?? 0}
              </sup>
            </div>
          ))}
        </div>
      </section>

      {/* ── TAGS ── */}
      <section>
        <div className="flex w-full pb-8 gap-4">
          <h3 className="text-brand-orange-light font-calSans 1920p:text-3xl xl:text-2xl lg:text-xl max-lg:text-lg border-b border-neutral-800">
            Tags
          </h3>
          <div className="border-b border-b-brand-orange flex-1 h-6" />
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {uniqueTags.map((tag) => (
            <div
              key={tag}
              className="text-sm transition-colors text-neutral-500 hover:text-brand-orange"
            >
              #{tag}
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default BlogSidebar;
