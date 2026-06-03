import FeaturedBlog from "@/sections/FeaturedBlog";
import BlogSidebar from "./BlogSidebar";
import BlogGrid from "./BlogGrid";

interface BlogMainProps {
  activeCategory?: string;
  activeTag?: string;
}

const BlogMain = ({ activeCategory, activeTag }: BlogMainProps) => {
  const isFiltered = !!activeCategory || !!activeTag;
  return (
    <div className="flex gap-20 max-lg:gap-10">
      <div className="sm:flex-[0.7] font-poppins">
        {isFiltered ? (
          <BlogGrid activeCategory={activeCategory} activeTag={activeTag} />
        ) : (
          <FeaturedBlog />
        )}
      </div>
      <div className="flex-[0.3] max-sm:hidden">
        <BlogSidebar activeCategory={activeCategory} activeTag={activeTag} />
      </div>
    </div>
  );
};

export default BlogMain;
