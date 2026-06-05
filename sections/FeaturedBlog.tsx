import Image from "next/image";
import BlogButton from "@/components/BlogButton";
import BlogFooter from "./BlogFooter";
import { getFeaturedBlog } from "@/lib/blog-queries";

const FeaturedBlog = async () => {
  const result = await getFeaturedBlog();

  const post = result.docs[0];
  if (!post) return null;

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="relative w-full aspect-[1.53]">
          <Image
            // @ts-expect-error url
            src={post.coverImage.url}
            alt={`image`}
            fill
            className="object-cover content-clip-both"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AJYAf//Z"
          />
        </div>
        <div className="flex flex-col gap-8 max-xl:gap-4">
          <div className="flex max-lg:flex-col max-lg:items-start gap-12 max-2xl:gap-8 max-lg:gap-2 justify-between items-center">
            <h2 className="font-calSans 1920p:text-3xl xl:text-2xl lg:text-xl max-lg:text-lg flex-[0.65]">
              {post.title}
            </h2>
            <div className="flex flex-col items-center flex-[0.35]">
              <div>{/* todo: add like, views and share buttons */}</div>
              <div className="flex gap-5 justify-center text-sm max-xl:text-[12px] text-neutral-400 flex-[0.35]">
                {post.tags?.map((tag, i) => (
                  <span key={i}>#{tag.tag}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-brand-orange text-lg max-xl:text-sm">
            {/* @ts-expect-error category title */}
            {post.categories?.map((cat) => cat.title).join(", ")}
          </p>
          <p className="whitespace-pre-line text-lg max-xl:text-sm">
            {post.excerpt}
          </p>
        </div>
        <div className="flex gap-12 flex-wrap justify-between py-10 border-y border-y-neutral-600">
          <div className="flex flex-col max-1440p:text-sm">
            <span className="text-neutral-400">Publication Date</span>
            <span>{formattedDate}</span>
          </div>
          <div className="flex flex-col max-1440p:text-sm">
            <span className="text-neutral-400">Reading Time</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="flex flex-col max-1440p:text-sm">
            <span className="text-neutral-400">Author Name</span>
            {/* @ts-expect-error author name */}
            <span>{post.author.name}</span>
          </div>
          <BlogButton
            buttonText="Read Full Blog"
            buttonLink={`/blogs/${post.slug}`}
          />
        </div>
      </div>
      <BlogFooter currentPost={post} />
    </>
  );
};

export default FeaturedBlog;
