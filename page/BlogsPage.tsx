import BlogMain from "@/sections/BlogMain";

interface BlogsPageProps {
  activeCategory?: string;
  activeTag?: string;
}

const BlogsPage = ({ activeCategory, activeTag }: BlogsPageProps) => {
  return (
    <div className="relative z-1">
      <div className="h-[65vh] max-sm:h-150 sm:max-md:h-150 md:max-lg:h-220">
        <div className="flex flex-col max-sm:gap-4 md:max-lg:gap-5 gap-8 items-center justify-center h-full">
          <h3 className="font-calSans text-[9rem]/[9.5rem] max-sm:text-[40px]/[44px] sm:max-md:text-6xl md:max-lg:text-7xl lg:max-xl:text-8xl xl:max-1440p:text-9xl text-brand-cream text-center select-none">
            <span>Blogs</span>
          </h3>
          <span className="text-[22px] max-sm:text-xl sm:max-md:text-2xl md:max-lg:text-3xl font-poppins font-light">
            Creative insights & design stories
          </span>
        </div>
      </div>
      <div className="min-h-screen max-w-450 pt-50 max-lg:pt-30 sm:max-md:pt-40 pb-50 w-4/5 max-sm:w-9/10 sm:max-md:w-9/10 md:max-lg:w-[85%] mx-auto flex flex-col gap-15">
        <BlogMain activeCategory={activeCategory} activeTag={activeTag} />
      </div>
    </div>
  );
};

export default BlogsPage;
