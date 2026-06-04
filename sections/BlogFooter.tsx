import { getPayload } from "payload";
import configPromise from "@payload-config";
import SimilarBlogsCard from "@/components/SimilarBlogsCard";
import { cacheLife, cacheTag } from "next/cache";

const BlogFooter = async ({ currentPost }: { currentPost: any }) => {
  "use cache";
  cacheTag("blogs");
  cacheLife("hours");
  const payload = await getPayload({ config: configPromise });

  // 1. Extract IDs/Values for the query
  const categoryIds =
    (await currentPost.categories?.map((cat: any) => cat.id)) || [];

  const tagNames = currentPost.tags?.map((t: any) => t.tag) || [];

  // 2. Fetch similar blogs
  // Logic: Find blogs where (Category matches OR Tag matches) AND ID is not current
  const relatedResult = await payload.find({
    collection: "blogs",
    limit: 3,
    where: {
      and: [
        {
          id: { not_equals: currentPost.id }, // Exclude current post
        },
        {
          or: [
            {
              categories: {
                in: categoryIds,
              },
            },
            {
              "tags.tag": {
                in: tagNames,
              },
            },
          ],
        },
      ],
    },
  });

  const similarBlogs = relatedResult.docs;

  if (similarBlogs.length === 0) return null;

  return (
    <div className="py-10 font-poppins border-t border-neutral-800 mt-12">
      <h4 className="text-neutral-400 text-xl font-medium">Similar Blogs</h4>
      <div className="grid grid-cols-1 1920p:grid-cols-3 xl:grid-cols-2 gap-10 pt-12">
        {similarBlogs.map((blog) => (
          <SimilarBlogsCard
            key={blog.id}
            title={blog.title}
            // Show the first category as the tag label
            // @ts-expect-error title
            tag={blog.categories?.[0] ? blog.categories[0].title : "Blog"}
            // @ts-expect-error url
            coverImage={blog.coverImage ? blog.coverImage.url : ""}
            slug={blog.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogFooter;
