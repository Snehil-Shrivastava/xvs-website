// sections/BlogListing.tsx  (presentational server component; the route does the fetching/404s)
import FeaturedBlog from "./FeaturedBlog";
import BlogPagination from "@/components/BlogPagination";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  posts: any[]; // narrowed by FeaturedBlog's PostType; swap for your payload-types Blog type when convenient
  page: number;
  totalPages: number;
};

const BlogListing = ({ posts, page, totalPages }: Props) => {
  if (posts.length === 0) {
    return (
      <p className="text-neutral-400 text-sm">
        No posts have been published yet.
      </p>
    );
  }
  return (
    <>
      <FeaturedBlog posts={posts} />
      <BlogPagination page={page} totalPages={totalPages} />
    </>
  );
};

export default BlogListing;
