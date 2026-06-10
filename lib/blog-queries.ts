import { cacheTag, cacheLife } from "next/cache";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function getFeaturedBlog(page: number = 1) {
  "use cache";
  cacheTag("blogs");
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });
  return payload.find({
    collection: "blogs",
    limit: 5,
    page: page, // Tells Payload which page offset to retrieve
    depth: 2,
    sort: "-publishedAt",
    select: {
      title: true,
      slug: true,
      excerpt: true,
      coverImage: true,
      categories: true,
      tags: true,
      publishedAt: true,
      readingTime: true,
      author: true,
      body: true,
      id: true,
    },
  });
}

export async function getSidebarData() {
  "use cache";
  cacheTag("blogs", "categories");
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });

  const [recentPosts, categories, allPostsForTags] = await Promise.all([
    payload.find({
      collection: "blogs",
      limit: 3,
      sort: "-publishedAt",
      // Only need title + slug for the recent posts list
      select: { title: true, slug: true },
    }),
    payload.find({ collection: "categories" }),
    payload.find({
      collection: "blogs",
      limit: 100,
      select: { tags: true, categories: true },
    }),
  ]);

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

// These are still exported in case you need them server-side elsewhere,
// but the main blog page no longer calls them directly on navigation.
export async function getBlogsByCategory(categoryId: string) {
  "use cache";
  cacheTag("blogs", `category-${categoryId}`);
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });

  const [blogs, categoryResult] = await Promise.all([
    payload.find({
      collection: "blogs",
      where: { categories: { in: [categoryId] } },
      depth: 1,
      sort: "-publishedAt",
      select: {
        title: true,
        slug: true,
        coverImage: true,
        categories: true,
      },
    }),
    payload
      .findByID({ collection: "categories", id: categoryId })
      .catch(() => null),
  ]);

  return {
    blogs,
    label: categoryResult?.title ?? "Category",
  };
}

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
    select: {
      title: true,
      slug: true,
      coverImage: true,
      categories: true,
    },
  });

  return { blogs, label: tag };
}
