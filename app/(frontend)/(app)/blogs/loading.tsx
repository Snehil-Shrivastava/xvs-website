import blogBg from "@/videos/blog.mp4";
import Video from "next-video";

const BlogPageLoading = () => {
  return (
    <div className="loading-skeleton">
      <div
        className="h-auto max-sm:h-150 sm:max-lg:h-220 absolute z-0 inset-x-0 overflow-hidden brightness-50"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent 95% 100%)",
        }}
      >
        <div className="overflow-hidden max-sm:w-[250vw] sm:max-md:w-[180vw] md:max-xl:w-[200vw] w-[200vw]">
          <Video
            src={blogBg}
            className="-scale-x-100 services-bg-container h-[90vh] max-xl:h-full"
            controls={false}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
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
          <div className="flex gap-20 max-lg:gap-10 h-screen">
            <div className="sm:flex-[0.7] font-poppins">
              <div className="flex flex-col gap-8 animate-pulse">
                <div className="w-full aspect-[1.53] bg-neutral-800" />
                <div className="h-8 w-3/4 bg-neutral-800 rounded" />
                <div className="h-4 w-1/2 bg-neutral-800 rounded" />
                <div className="h-20 w-full bg-neutral-800 rounded" />
              </div>
            </div>
            <div className="flex-[0.3] max-sm:hidden">
              <div className="flex flex-col gap-12 animate-pulse">
                <div className="h-6 w-1/2 bg-neutral-800 rounded" />
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 w-full bg-neutral-800 rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageLoading;
