// import { cacheTag, cacheLife } from "next/cache";
// import { getPayload } from "payload";
// import configPromise from "@payload-config";

// export async function getFeaturedBlog(page: number = 1) {
//   "use cache";
//   cacheTag("blogs");
//   cacheLife("minutes");

//   const payload = await getPayload({ config: configPromise });
//   return payload.find({
//     collection: "blogs",
//     limit: 5,
//     page: page, // Tells Payload which page offset to retrieve
//     depth: 2,
//     sort: "-publishedAt",
//     select: {
//       title: true,
//       slug: true,
//       excerpt: true,
//       coverImage: true,
//       categories: true,
//       tags: true,
//       publishedAt: true,
//       readingTime: true,
//       author: true,
//       body: true,
//       id: true,
//     },
//   });
// }

// export async function getSidebarData() {
//   "use cache";
//   cacheTag("blogs", "categories");
//   cacheLife("minutes");

//   const payload = await getPayload({ config: configPromise });

//   const [recentPosts, categories, allPostsForTags] = await Promise.all([
//     payload.find({
//       collection: "blogs",
//       limit: 3,
//       sort: "-publishedAt",
//       // Only need title + slug for the recent posts list
//       select: { title: true, slug: true },
//     }),
//     payload.find({ collection: "categories" }),
//     payload.find({
//       collection: "blogs",
//       limit: 100,
//       select: { tags: true, categories: true },
//     }),
//   ]);

//   const categoryCountEntries = await Promise.all(
//     categories.docs.map(async (cat) => {
//       const { totalDocs } = await payload.count({
//         collection: "blogs",
//         where: { categories: { in: [cat.id] } },
//       });
//       return [cat.id, totalDocs] as const;
//     }),
//   );

//   const categoryCounts: Record<string | number, number> =
//     Object.fromEntries(categoryCountEntries);

//   return { recentPosts, categories, allPostsForTags, categoryCounts };
// }

// // These are still exported in case you need them server-side elsewhere,
// // but the main blog page no longer calls them directly on navigation.
// export async function getBlogsByCategory(categoryId: string) {
//   "use cache";
//   cacheTag("blogs", `category-${categoryId}`);
//   cacheLife("minutes");

//   const payload = await getPayload({ config: configPromise });

//   const [blogs, categoryResult] = await Promise.all([
//     payload.find({
//       collection: "blogs",
//       where: { categories: { in: [categoryId] } },
//       depth: 1,
//       sort: "-publishedAt",
//       select: {
//         title: true,
//         slug: true,
//         coverImage: true,
//         categories: true,
//       },
//     }),
//     payload
//       .findByID({ collection: "categories", id: categoryId })
//       .catch(() => null),
//   ]);

//   return {
//     blogs,
//     label: categoryResult?.title ?? "Category",
//   };
// }

// export async function getBlogsByTag(tag: string) {
//   "use cache";
//   cacheTag("blogs", `tag-${tag}`);
//   cacheLife("minutes");

//   const payload = await getPayload({ config: configPromise });

//   const blogs = await payload.find({
//     collection: "blogs",
//     where: { "tags.tag": { in: [tag] } },
//     depth: 1,
//     sort: "-publishedAt",
//     select: {
//       title: true,
//       slug: true,
//       coverImage: true,
//       categories: true,
//     },
//   });

//   return { blogs, label: tag };
// }

// ------------------------------ blogs not crawlable fix ------------------------------------

import { cacheTag, cacheLife } from "next/cache";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export const POSTS_PER_PAGE = 5;
// Filtered pages are not paginated yet. If a category ever exceeds this, add pagination.
export const FILTER_POSTS_LIMIT = 50;

export async function getFeaturedBlog(page: number = 1) {
  "use cache";
  cacheTag("blogs");
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });
  return payload.find({
    collection: "blogs",
    limit: POSTS_PER_PAGE,
    page,
    depth: 1, // enough to populate coverImage, author and categories
    sort: "-publishedAt",
    // `body` removed: the listing only needs the excerpt, and the body was being
    // serialized into the page for every post.
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
    },
  });
}

export async function getSidebarData() {
  "use cache";
  cacheTag("blogs", "categories");
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });

  const [recentPosts, categories, postsForMeta] = await Promise.all([
    payload.find({
      collection: "blogs",
      limit: 3,
      depth: 0,
      sort: "-publishedAt",
      select: { title: true, slug: true },
    }),
    // Payload's default limit is 10, so categories beyond the 10th used to disappear
    payload.find({
      collection: "categories",
      limit: 100,
      depth: 0,
      sort: "title",
    }),
    payload.find({
      collection: "blogs",
      limit: 500,
      depth: 0,
      select: { tags: true, categories: true },
    }),
  ]);

  // Derive counts and tags from one query instead of one count() per category
  const categoryCounts: Record<string, number> = {};
  const tagSet = new Set<string>();
  for (const post of postsForMeta.docs) {
    for (const c of post.categories ?? []) {
      const id = String(typeof c === "object" && c !== null ? c.id : c);
      categoryCounts[id] = (categoryCounts[id] ?? 0) + 1;
    }
    for (const t of post.tags ?? []) if (t.tag) tagSet.add(t.tag);
  }

  return { recentPosts, categories, tags: [...tagSet], categoryCounts };
}

// Returns null for an unknown category so the route can 404
export async function getBlogsByCategory(categoryId: string) {
  "use cache";
  cacheTag("blogs", `category-${categoryId}`);
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });

  const category = await payload
    .findByID({ collection: "categories", id: categoryId, depth: 0 })
    .catch(() => null); // invalid or unknown id
  if (!category) return null;

  const blogs = await payload.find({
    collection: "blogs",
    where: { categories: { in: [categoryId] } },
    depth: 1,
    limit: FILTER_POSTS_LIMIT,
    sort: "-publishedAt",
    select: { title: true, slug: true, coverImage: true, categories: true },
  });

  return { blogs, label: category.title };
}

// Returns null when no post has the tag, so arbitrary /blog/tag/xyz URLs 404
// instead of creating cache entries.
export async function getBlogsByTag(tag: string) {
  "use cache";
  cacheTag("blogs", `tag-${tag}`);
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });

  const blogs = await payload.find({
    collection: "blogs",
    where: { "tags.tag": { in: [tag] } },
    depth: 1,
    limit: FILTER_POSTS_LIMIT,
    sort: "-publishedAt",
    select: { title: true, slug: true, coverImage: true, categories: true },
  });
  if (blogs.totalDocs === 0) return null;

  return { blogs, label: tag };
}
