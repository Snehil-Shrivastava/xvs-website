// lib/blog-queries.ts
import { cacheTag, cacheLife } from "next/cache";
import { getPayload } from "payload";
import configPromise from "@payload-config";

// ─────────────────────────────────────────────────────────────────────────────
// Featured blog (used on the main listing page)
// ─────────────────────────────────────────────────────────────────────────────
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

// ─────────────────────────────────────────────────────────────────────────────
// Sidebar data — recent posts, categories, tags, and pre-computed counts
// ─────────────────────────────────────────────────────────────────────────────
export async function getSidebarData() {
  "use cache";
  cacheTag("blogs", "categories");
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });

  const [recentPosts, categories, allPostsForTags] = await Promise.all([
    payload.find({ collection: "blogs", limit: 3, sort: "-publishedAt" }),
    payload.find({ collection: "categories" }),
    payload.find({
      collection: "blogs",
      limit: 100,
      select: { tags: true, categories: true },
    }),
  ]);

  // Pre-compute category counts here inside the cache function (issue 7).
  // payload.count() per category in parallel — accurate (no 100-post cap)
  // and never repeated on render since the result lives in the cache.
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

// ─────────────────────────────────────────────────────────────────────────────
// Filtered view — all blogs in a given category
// ─────────────────────────────────────────────────────────────────────────────
export async function getBlogsByCategory(categoryId: string) {
  "use cache";
  // Tag with both "blogs" and a per-category tag so you can surgically
  // invalidate a single category's cache when a post is updated:
  //   revalidateTag(`category-${categoryId}`)
  cacheTag("blogs", `category-${categoryId}`);
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });

  // Fetch the matching blogs and the category's display name in parallel
  const [blogs, categoryResult] = await Promise.all([
    payload.find({
      collection: "blogs",
      where: { categories: { in: [categoryId] } },
      depth: 1, // depth 1 is enough — we only need coverImage.url and categories[0].title
      sort: "-publishedAt",
    }),
    payload
      .findByID({ collection: "categories", id: categoryId })
      .catch(() => null), // guard against a stale/invalid ID in the URL
  ]);

  return {
    blogs,
    label: categoryResult?.title ?? "Category",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// Filtered view — all blogs with a given tag
// ─────────────────────────────────────────────────────────────────────────────
export async function getBlogsByTag(tag: string) {
  "use cache";
  cacheTag("blogs", `tag-${tag}`);
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });

  const blogs = await payload.find({
    collection: "blogs",
    where: { "tags.tag": { in: [tag] } },
    depth: 1,
    sort: "-publishedAt",
  });

  return { blogs, label: tag };
}
