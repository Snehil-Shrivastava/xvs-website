// app/(frontend)/(app)/blog/category/[id]/page.tsx   -> /blog/category/3
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogsPage from "@/page/BlogsPage";
import FilteredBlogs from "@/sections/FilteredBlogs";
import { getBlogsByCategory, getSidebarData } from "@/lib/blog-queries";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  const { categories } = await getSidebarData();
  const params = categories.docs.map((c) => ({ id: String(c.id) }));
  return params.length ? params : [{ id: "0" }]; // placeholder 404s at render
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const data = await getBlogsByCategory(id); // cached, shared with the page below
  if (!data) return {};
  return {
    title: `${data.label} | Blog | xVS Creations`,
    description: `Articles about ${data.label} from the xVS Creations team.`,
    alternates: { canonical: `/blog/category/${id}` },
  };
}

const CategoryPage = async ({ params }: Props) => {
  const { id } = await params;
  const data = await getBlogsByCategory(id);
  if (!data) notFound();

  return (
    <BlogsPage activeCategory={id}>
      <FilteredBlogs type="category" label={data.label} blogs={data.blogs} />
    </BlogsPage>
  );
};

export default CategoryPage;
