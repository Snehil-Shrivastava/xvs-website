import BlogsPage from "@/page/BlogsPage";
import blogBg from "@/videos/blog.mp4";
import Video from "next-video";

const Blogs = () => {
  return (
    <div>
      <div
        className="h-auto max-sm:h-150 sm:max-lg:h-220 absolute z-0 inset-x-0 overflow-hidden brightness-50"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent 95% 100%)",
        }}
      >
        <div className="overflow-hidden max-sm:w-[250vw] sm:max-md:w-[180vw] md:max-xl:w-[200vw] w-screen">
          <Video
            src={blogBg}
            className="-scale-x-100 services-bg-container h-[90vh] max-xl:h-full"
            controls={false}
            autoPlay
            loop
            muted
          />
        </div>
      </div>
      <BlogsPage />
    </div>
  );
};

export default Blogs;
