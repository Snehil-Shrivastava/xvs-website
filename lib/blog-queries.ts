// lib/blog-queries.ts
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const getFeaturedBlog = unstable_cache(
  async () => {
    const payload = await getPayload({ config: configPromise });
    return payload.find({
      collection: "blogs",
      where: { featured: { equals: true } },
      limit: 1,
      depth: 2,
    });
  },
  ["featured-blog"], // cache key
  { revalidate: 600, tags: ["blogs"] }, // matches your page's revalidate
);

export const getSidebarData = unstable_cache(
  async () => {
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
    return { recentPosts, categories, allPostsForTags };
  },
  ["sidebar-data"],
  { revalidate: 600, tags: ["blogs", "categories"] },
);
