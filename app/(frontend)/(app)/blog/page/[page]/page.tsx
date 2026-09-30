// app/(frontend)/(app)/blog/page/[page]/page.tsx   -> /blog/page/2, /blog/page/3 ...
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogsPage from "@/page/BlogsPage";
import BlogListing from "@/sections/BlogListing";
import { getFeaturedBlog } from "@/lib/blog-queries";

type Props = { params: Promise<{ page: string }> };

export async function generateStaticParams() {
  const { totalPages } = await getFeaturedBlog(1);
  const pages = Array.from({ length: Math.max(totalPages - 1, 0) }, (_, i) => ({
    page: String(i + 2),
  }));
  // Cache Components can reject an empty list; the placeholder 404s at render.
  return pages.length ? pages : [{ page: "2" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog - Page ${page} | xVS Creations`,
    alternates: { canonical: `/blog/page/${page}` },
  };
}

const PaginatedBlogs = async ({ params }: Props) => {
  const { page } = await params;
  const n = Number(page);
  if (!Number.isInteger(n) || n < 2) notFound(); // abc, 0, 1, 2.5 ...

  const data = await getFeaturedBlog(n);
  if (data.docs.length === 0) notFound(); // beyond the last page

  return (
    <BlogsPage>
      <BlogListing posts={data.docs} page={n} totalPages={data.totalPages} />
    </BlogsPage>
  );
};

export default PaginatedBlogs;
