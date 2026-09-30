// import Image from "next/image";
// import BlogButton from "@/components/BlogButton";
// import Link from "next/link";

// interface PostType {
//   title: string;
//   slug: string;
//   excerpt: string;
//   coverImage: {
//     url: string;
//   };
//   tags?: { tag: string }[];
//   categories?: { title: string }[];
//   publishedAt: string;
//   readingTime: string;
//   author: {
//     name: string;
//   };
// }

// const FeaturedBlog = ({ posts }: { posts: PostType[] }) => {
//   if (!posts || posts.length === 0) return null;
//   return (
//     <>
//       {posts.map((post, index) => (
//         <Link
//           key={index}
//           href={`/blog/${post.slug}`}
//           className="flex flex-col gap-8"
//         >
//           <div className="relative w-full aspect-[1.53]">
//             <Image
//               src={post.coverImage.url}
//               alt={post.title}
//               fill
//               className="object-cover content-clip-both"
//               placeholder="blur"
//               blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AJYAf//Z"
//             />
//           </div>
//           <div className="flex flex-col gap-8 max-xl:gap-4">
//             <div className="flex max-1440p:flex-col max-1440p:items-start gap-12 max-2xl:gap-8 max-xl:gap-2 justify-between items-center">
//               <h2 className="font-calSans 1920p:text-3xl xl:text-2xl lg:text-xl max-lg:text-lg flex-[0.65]">
//                 {post.title}
//               </h2>
//               {post.tags?.length !== 0 && (
//                 <div className="flex-[0.35] flex gap-5 gap-y-0.5 flex-wrap text-sm max-xl:text-[12px] text-neutral-400">
//                   {post.tags?.map((tag, i) => (
//                     <span key={i}>#{tag.tag}</span>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <p className="text-brand-orange text-lg max-xl:text-sm">
//               {post.categories?.map((cat) => cat.title).join(", ")}
//             </p>
//             <p className="whitespace-pre-line text-lg max-xl:text-sm">
//               {post.excerpt}
//             </p>
//           </div>
//           <div className="flex gap-12 flex-wrap justify-between py-10 border-y border-y-neutral-600">
//             <div className="flex flex-col max-1440p:text-sm">
//               <span className="text-neutral-400">Publication Date</span>
//               <span>
//                 {new Date(post.publishedAt).toLocaleDateString("en-US", {
//                   year: "numeric",
//                   month: "long",
//                   day: "numeric",
//                 })}
//               </span>
//             </div>
//             <div className="flex flex-col max-1440p:text-sm">
//               <span className="text-neutral-400">Reading Time</span>
//               <span>{post.readingTime}</span>
//             </div>
//             <div className="flex flex-col max-1440p:text-sm">
//               <span className="text-neutral-400">Author Name</span>
//               <span>{post.author.name}</span>
//             </div>
//             <BlogButton
//               buttonText="Read Full Blog"
//               buttonLink={`/blog/${post.slug}`}
//             />
//           </div>
//         </Link>
//       ))}
//     </>
//   );
// };

// export default FeaturedBlog;

// ------------------------------ blogs not crawlable fix ------------------------------------

import Image from "next/image";
import Link from "next/link";
import BlogButton from "@/components/BlogButton";

interface PostType {
  id?: string | number;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: { url: string } | null;
  tags?: { tag: string }[] | null;
  categories?: { title: string }[] | null;
  publishedAt: string;
  readingTime: string;
  author?: { name: string } | null;
}

const BLUR =
  "data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAKAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/AJYAf//Z";

const FeaturedBlog = ({ posts }: { posts: PostType[] }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <>
      {posts.map((post) => (
        // <article> + "stretched link" instead of wrapping everything in <Link>:
        // the old markup nested BlogButton's link inside another link (invalid HTML).
        <article
          key={post.id ?? post.slug}
          className="relative flex flex-col gap-8"
        >
          {post.coverImage?.url && (
            <div className="relative w-full aspect-[1.53]">
              <Image
                src={post.coverImage.url}
                alt={post.title}
                fill
                className="object-cover content-clip-both"
                placeholder="blur"
                blurDataURL={BLUR}
              />
            </div>
          )}

          <div className="flex flex-col gap-8 max-xl:gap-4">
            <div className="flex max-1440p:flex-col max-1440p:items-start gap-12 max-2xl:gap-8 max-xl:gap-2 justify-between items-center">
              <h2 className="font-calSans 1920p:text-3xl xl:text-2xl lg:text-xl max-lg:text-lg flex-[0.65]">
                {/* the ::after overlay makes the whole card clickable */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="after:absolute after:inset-0"
                >
                  {post.title}
                </Link>
              </h2>
              {post.tags && post.tags.length > 0 && (
                <div className="flex-[0.35] flex gap-5 gap-y-0.5 flex-wrap text-sm max-xl:text-[12px] text-neutral-400">
                  {post.tags.map((t) => (
                    <span key={t.tag}>#{t.tag}</span>
                  ))}
                </div>
              )}
            </div>
            <p className="text-brand-orange text-lg max-xl:text-sm">
              {post.categories?.map((c) => c.title).join(", ")}
            </p>
            <p className="whitespace-pre-line text-lg max-xl:text-sm">
              {post.excerpt}
            </p>
          </div>

          <div className="flex gap-12 flex-wrap justify-between py-10 border-y border-y-neutral-600">
            <div className="flex flex-col max-1440p:text-sm">
              <span className="text-neutral-400">Publication Date</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex flex-col max-1440p:text-sm">
              <span className="text-neutral-400">Reading Time</span>
              <span>{post.readingTime}</span>
            </div>
            {post.author?.name && (
              <div className="flex flex-col max-1440p:text-sm">
                <span className="text-neutral-400">Author Name</span>
                <span>{post.author.name}</span>
              </div>
            )}
            <div className="relative z-10">
              <BlogButton
                buttonText="Read Full Blog"
                buttonLink={`/blog/${post.slug}`}
              />
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default FeaturedBlog;
