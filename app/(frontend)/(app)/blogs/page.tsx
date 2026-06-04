import BlogPageSkeleton from "@/components/BlogPageSkeleton";
import BlogsPage from "@/page/BlogsPage";
import blogBg from "@/videos/blog.mp4";
import Video from "next-video";
import { Suspense } from "react";

interface PageProps {
  searchParams: Promise<{ category?: string; tag?: string }>;
}

const Blogs = async ({ searchParams }: PageProps) => {
  return (
    <Suspense fallback={<BlogPageSkeleton />}>
      <div>
        <div
          className="h-auto max-sm:h-150 sm:max-lg:h-220 absolute z-0 inset-x-0 overflow-hidden brightness-50"
          style={{
            maskImage:
              "linear-gradient(to bottom, black, transparent 95% 100%)",
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
        <BlogsPage searchParams={searchParams} />
      </div>
    </Suspense>
  );
};

export default Blogs;
