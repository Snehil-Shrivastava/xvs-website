import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import recentPostsBullet from "@/public/svg/recent-post-bullet.svg";
import { getSidebarData } from "@/lib/blog-queries";

interface Props {
  activeCategory?: string; // category ID currently selected, if any
  activeTag?: string; // tag string currently selected, if any
}

const BlogSidebar = async ({ activeCategory, activeTag }: Props) => {
  const { recentPosts, categories, allPostsForTags, categoryCounts } =
    await getSidebarData();

  // Extract unique tags from the cached post list
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
            // Each post is now a link to its individual page
            <Link
              key={post.id}
              href={`/blogs/${post.slug}`}
              className="flex gap-3 group items-start"
            >
              <Image src={recentPostsBullet} alt="bullet" />
              <p className="1920p:text-base xl:text-sm lg:text-[12px] max-lg:text-[10px] leading-snug group-hover:text-brand-orange transition-colors">
                {post.title}
              </p>
            </Link>
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
          {categories.docs.map((cat) => {
            const isActive = activeCategory === String(cat.id);

            return (
              <Link
                key={cat.id}
                // Clicking an already-active category deselects it (goes back
                // to the featured post). Clicking a new one filters by it.
                href={isActive ? "/blogs" : `/blogs?category=${cat.id}`}
                className={`flex items-center gap-2 group transition-colors ${
                  isActive
                    ? "text-brand-orange"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                <ArrowRight
                  className={
                    isActive
                      ? "text-brand-orange"
                      : "text-brand-orange/50 group-hover:text-brand-orange transition-colors"
                  }
                />
                <span className="1920p:text-base xl:text-sm lg:text-[12px] max-lg:text-[10px]">
                  {cat.title}
                </span>
                {/* Count from pre-computed map — zero computation on render */}
                <sup
                  className={`text-[12px] ml-1 ${
                    isActive ? "text-brand-orange/70" : "text-neutral-500"
                  }`}
                >
                  {categoryCounts[cat.id] ?? 0}
                </sup>
              </Link>
            );
          })}
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
          {uniqueTags.map((tag) => {
            const isActive = activeTag === tag;

            return (
              <Link
                key={tag}
                // Same toggle-off pattern as categories
                href={
                  isActive ? "/blogs" : `/blogs?tag=${encodeURIComponent(tag!)}`
                }
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-brand-orange"
                    : "text-neutral-500 hover:text-brand-orange"
                }`}
              >
                #{tag}
              </Link>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default BlogSidebar;
