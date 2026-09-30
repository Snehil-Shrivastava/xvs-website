// app/(frontend)/(app)/blog/tag/[tag]/page.tsx   -> /blog/tag/branding
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogsPage from "@/page/BlogsPage";
import FilteredBlogs from "@/sections/FilteredBlogs";
import { getBlogsByTag, getSidebarData } from "@/lib/blog-queries";

type Props = { params: Promise<{ tag: string }> };

const safeDecode = (v: string) => {
  try {
    return decodeURIComponent(v);
  } catch {
    return v;
  }
};

export async function generateStaticParams() {
  const { tags } = await getSidebarData();
  return tags.length ? tags.map((tag) => ({ tag })) : [{ tag: "none" }]; // placeholder 404s
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = safeDecode((await params).tag);
  const data = await getBlogsByTag(tag);
  if (!data) return {};
  return {
    title: `#${tag} | Blog | xVS Creations`,
    description: `Articles tagged ${tag} from the xVS Creations team.`,
    alternates: { canonical: `/blog/tag/${encodeURIComponent(tag)}` },
  };
}

const TagPage = async ({ params }: Props) => {
  const tag = safeDecode((await params).tag);
  const data = await getBlogsByTag(tag);
  if (!data) notFound();

  return (
    <BlogsPage activeTag={tag}>
      <FilteredBlogs type="tag" label={data.label} blogs={data.blogs} />
    </BlogsPage>
  );
};

export default TagPage;
