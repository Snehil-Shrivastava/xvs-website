import { getPayload } from "payload";
import configPromise from "@payload-config";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import recentPostsBullet from "@/public/svg/recent-post-bullet.svg";

const BlogSidebar = async () => {
  const payload = await getPayload({ config: configPromise });

  // 1. Fetch 3 Recent Posts
  const recentPostsResult = await payload.find({
    collection: "blogs",
    limit: 3,
    sort: "-publishedAt",
  });

  // 2. Fetch all Categories
  const categoriesResult = await payload.find({
    collection: "categories",
  });

  // 3. Fetch all Blogs to extract unique tags (Since tags are an array field in Blogs)
  // Note: In a huge site, you'd want a separate "Tags" collection,
  // but for now, we extract them from the posts.
  const allPostsForTags = await payload.find({
    collection: "blogs",
    limit: 100,
    select: { tags: true, categories: true }, // Only fetch what we need
  });

  // Extract unique tags
  const uniqueTags = Array.from(
    new Set(
      allPostsForTags.docs.flatMap(
        (post) => post.tags?.map((t) => t.tag) || [],
      ),
    ),
  ).filter(Boolean);

  // Helper to count posts per category
  const getCategoryCount = (catId: string | number) => {
    return allPostsForTags.docs.filter((post) =>
      post.categories?.some((c) =>
        typeof c === "object" ? c.id === catId : c === catId,
      ),
    ).length;
  };

  return (
    <aside className="flex flex-col gap-12 w-full font-poppins">
      {/* ── todo: search bar ── */}
      {/* <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent border border-neutral-700 rounded-full py-2 px-4 focus:outline-none focus:border-brand-orange transition-colors"
        />
        <span className="absolute right-4 top-2.5 text-neutral-500">🔍</span>
      </div> */}

      {/* ── RECENT POSTS ── */}
      <section>
        <div className="flex w-full pb-8 gap-4">
          <h3 className="text-brand-orange-light font-calSans text-3xl border-b border-neutral-800">
            Recent Posts
          </h3>
          <div className="border-b border-b-brand-orange flex-1 h-6" />
        </div>
        <div className="flex flex-col gap-6">
          {recentPostsResult.docs.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.id}
              className="flex gap-3 group items-start"
            >
              <Image src={recentPostsBullet} alt="bullet" />
              <p className="text-base leading-snug group-hover:text-brand-orange transition-colors">
                {post.title}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section>
        <div className="flex w-full pb-8 gap-4">
          <h3 className="text-brand-orange-light font-calSans text-3xl border-b border-neutral-800">
            Categories
          </h3>
          <div className="border-b border-b-brand-orange flex-1 h-6" />
        </div>
        <div className="flex flex-col gap-6">
          {categoriesResult.docs.map((cat) => {
            const count = getCategoryCount(cat.id);
            return (
              <div
                // href={`/category/${cat.slug}`}
                key={cat.id}
                className="flex items-center gap-2 group text-neutral-300 hover:text-white transition-colors"
              >
                <ArrowRight className="text-brand-orange" />
                <span className="text-base">{cat.title}</span>
                <sup className="text-[12px] text-neutral-500 ml-1">{count}</sup>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── TAGS ── */}
      <section>
        <div className="flex w-full pb-8 gap-4">
          <h3 className="text-brand-orange-light font-calSans text-3xl border-b border-neutral-800">
            Tags
          </h3>
          <div className="border-b border-b-brand-orange flex-1 h-6" />
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {uniqueTags.map((tag) => (
            <div
              //   href={`/tag/${tag}`}
              key={tag}
              className="text-sm text-neutral-500 hover:text-brand-orange transition-colors"
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
