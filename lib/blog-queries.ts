// lib/blog-queries.ts
import { cacheTag, cacheLife } from "next/cache";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getFeaturedBlog() {
  "use cache";
  cacheTag("blogs");
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });
  return payload.find({
    collection: "blogs",
    where: { featured: { equals: true } },
    limit: 1,
    depth: 2,
  });
}

export async function getSidebarData() {
  "use cache";
  cacheTag("blogs", "categories");
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });

  // Fetch posts, categories, and tag data all at the same time
  const [recentPosts, categories, allPostsForTags] = await Promise.all([
    payload.find({ collection: "blogs", limit: 3, sort: "-publishedAt" }),
    payload.find({ collection: "categories" }),
    payload.find({
      collection: "blogs",
      limit: 100,
      select: { tags: true, categories: true },
    }),
  ]);

  // ─── Issue 7: Pre-compute category counts here inside the cache function ───
  //
  // Old approach (in BlogSidebar):
  //   categories.docs.map(cat => {
  //     allPostsForTags.docs.filter(post =>               ← ran on every render
  //       post.categories?.some(c => c.id === cat.id)     ← O(n × m) JS loop
  //     ).length
  //   })
  //
  // Problems:
  //   1. Ran on every render, not just once
  //   2. Limited to 100 posts — if you have more than 100 blogs, counts
  //      would be wrong for popular categories
  //
  // New approach: use payload.count() per category in parallel.
  //   - Accurate regardless of post count (no 100-post cap)
  //   - Runs inside the cache function, so it's computed ONCE and stored
  //   - All count queries fire in parallel via Promise.all, so the total
  //     time is the slowest single count query, not sum of all of them
  //   - BlogSidebar receives a plain Record<id, number> and just does
  //     categoryCounts[cat.id] — zero computation on render

  const categoryCountEntries = await Promise.all(
    categories.docs.map(async (cat) => {
      const { totalDocs } = await payload.count({
        collection: "blogs",
        where: { categories: { in: [cat.id] } },
      });
      return [cat.id, totalDocs] as const;
    }),
  );

  const categoryCounts: Record<string | number, number> =
    Object.fromEntries(categoryCountEntries);

  return { recentPosts, categories, allPostsForTags, categoryCounts };
}
