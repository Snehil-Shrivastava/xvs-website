import { getPayload } from "payload";
import configPromise from "@payload-config";
import { notFound } from "next/navigation";
import Image from "next/image";
import { RichText } from "@/components/RichTextRender";
import BlogFooter from "@/sections/BlogFooter";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });

  const result = await payload.find({
    collection: "blogs",
    where: { slug: { equals: slug } },
  });

  const post = result.docs[0];
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | xVS Creations`,
    description: post.excerpt,
  };
}

const IndividualBlog = async ({ params }: PageProps) => {
  const { slug } = await params;
  const payload = await getPayload({ config: configPromise });

  // 1. Fetch the specific blog post
  const result = await payload.find({
    collection: "blogs",
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
  });

  const post = result.docs[0];

  // 2. Handle 404
  if (!post) {
    return notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div className="max-w-450 w-4/5 max-sm:w-9/10 sm:max-md:w-9/10 md:max-lg:w-[85%] mx-auto pt-50 max-xl:pt-40 pb-50 font-poppins">
        <div className="flex flex-col gap-25 max-xl:gap-15">
          <div className="flex flex-col gap-8">
            <div className="flex max-md:flex-col max-md:items-start items-center gap-12 max-md:gap-4 justify-between">
              <h1 className="font-calSans text-[42px]/[50px] max-2xl:text-4xl max-lg:text-3xl max-md:text-2xl flex-[0.6]">
                {post.title}
              </h1>
              <div className="flex gap-5 justify-center text-xl max-2xl:text-lg max-lg:text-sm text-neutral-400 flex-[0.4]">
                {post.tags?.map((tag, i) => (
                  <span key={i}>#{tag.tag}</span>
                ))}
              </div>
            </div>
            <p className="text-brand-orange text-2xl max-2xl:text-xl max-lg:text-lg max-md:text-sm">
              {/* @ts-expect-error category title */}
              {post.categories?.map((cat) => cat.title).join(", ")}
            </p>
          </div>
          <div className="relative w-full aspect-[2.3]">
            <Image
              // @ts-expect-error url
              src={post.coverImage.url}
              alt={`image`}
              fill
              className="object-cover content-clip-both"
            />
          </div>
          <div className="blog-body max-xl:font-light">
            <RichText data={post.body} />
          </div>
          <div className="flex gap-12 justify-between py-10 border-y border-y-neutral-600">
            <div className="flex flex-col">
              <span className="text-neutral-400">Publication Date</span>
              <span>{formattedDate}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-neutral-400">Author Name</span>
              {/* @ts-expect-error author name */}
              <span>{post.author.name}</span>
            </div>
          </div>
          <Suspense fallback={null}>
            <BlogFooter currentPost={post} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default IndividualBlog;
