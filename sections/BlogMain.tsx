import FeaturedBlog from "@/sections/FeaturedBlog";
import BlogSidebar from "./BlogSidebar";

const BlogMain = () => {
  return (
    <div className="flex gap-20">
      <div className="flex-[0.7] font-poppins">
        <FeaturedBlog />
      </div>
      <div className="flex-[0.3]">
        <BlogSidebar />
      </div>
    </div>
  );
};

export default BlogMain;
