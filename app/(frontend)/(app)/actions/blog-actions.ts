"use server";

import { getFeaturedBlog } from "@/lib/blog-queries";

export async function fetchPaginatedBlogsAction(page: number) {
  return getFeaturedBlog(page);
}
