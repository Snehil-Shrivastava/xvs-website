import { getPayload } from "payload";
import configPromise from "@payload-config";
import { NextRequest, NextResponse } from "next/server";
import { cacheTag, cacheLife } from "next/cache";

// Cached data-fetchers — params are plain strings so they're safe in the cache runtime
async function getCategoryBlogs(categoryId: string) {
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
      select: { title: true, slug: true, coverImage: true, categories: true },
    }),
    payload
      .findByID({ collection: "categories", id: categoryId })
      .catch(() => null),
  ]);

  return {
    type: "category" as const,
    label: categoryResult?.title ?? "Category",
    blogs,
  };
}

async function getTagBlogs(tag: string) {
  "use cache";
  cacheTag("blogs", `tag-${tag}`);
  cacheLife("minutes");

  const payload = await getPayload({ config: configPromise });

  const blogs = await payload.find({
    collection: "blogs",
    where: { "tags.tag": { in: [tag] } },
    depth: 1,
    sort: "-publishedAt",
    select: { title: true, slug: true, coverImage: true, categories: true },
  });

  return { type: "tag" as const, label: tag, blogs };
}

// Route handler itself has no "use cache" — it just reads params and delegates
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const category = searchParams.get("category");
  const tag = searchParams.get("tag");

  if (!category && !tag) {
    return NextResponse.json(
      { error: "Missing filter param" },
      { status: 400 },
    );
  }

  const data = category
    ? await getCategoryBlogs(category)
    : await getTagBlogs(tag!);

  return NextResponse.json(data);
}
