import { getPayload } from "payload";
import configPromise from "@payload-config";
import Image from "next/image";
import BlogButton from "@/components/BlogButton";
import BlogFooter from "./BlogFooter";

const FeaturedBlog = async () => {
  const payload = await getPayload({ config: configPromise });
  const result = await payload.find({
    collection: "blogs",
    where: {
      featured: {
        equals: true,
      },
    },
    limit: 1,
    depth: 2,
  });

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
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-12 justify-between items-center">
            <h2 className="font-calSans text-3xl flex-[0.65]">{post.title}</h2>
            <div className="flex flex-col items-center">
              <div>{/* todo: add like, views and share buttons */}</div>
              <div className="flex gap-5 justify-center text-sm text-neutral-400 flex-[0.35]">
                {post.tags?.map((tag, i) => (
                  <span key={i}>#{tag.tag}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-brand-orange text-lg">
            {/* @ts-expect-error category title */}
            {post.categories?.map((cat) => cat.title).join(", ")}
          </p>
          <p className="whitespace-pre-line text-lg">{post.excerpt}</p>
        </div>
        <div className="flex gap-12 justify-between py-10 border-y border-y-neutral-600">
          <div className="flex flex-col">
            <span className="text-neutral-400">Publication Date</span>
            <span>{formattedDate}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-neutral-400">Reading Time</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="flex flex-col">
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
