import Video from "next-video";
import showreel from "@/videos/showreel-final-for-web.mp4";

const HomeReel = () => {
  return (
    <div className="flex justify-center items-center h-full relative">
      <div className="bg-white/70 w-9/10 max-md:w-9/10 max-sm:max-w-120 sm:max-md:max-w-180 md:max-1440p:w-9/10 1440p:max-2xl:w-9/10 max-w-450 container-clip-both">
        <Video
          src={showreel}
          className="video-container p-px shadow-[0_0_10px_8px_rgba(255,173,64,0.1)] content-clip-both"
          controls={false}
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default HomeReel;
