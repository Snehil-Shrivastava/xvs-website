import Video from "next-video";
import showreel from "@/videos/showreel-final-for-web.mp4";

const HomeReel = () => {
  return (
    <div className="flex justify-center items-center h-full relative">
      <div className="w-9/10 max-md:w-9/10 max-sm:max-w-120 sm:max-md:max-w-180 md:max-1440p:w-9/10 1440p:max-2xl:w-9/10 max-w-450 relative z-10 drop-shadow-[0_0_40px_#0000004d]">
        <div className="container-clip-both">
          <Video
            src={showreel}
            className="video-container p-px shadow-[0_0_10px_8px_rgba(255,173,64,0.1)] content-clip-both"
            controls={false}
            disableTracking
            autoPlay
            loop
            muted
          />
          <div className="absolute inset-0 bg-white/50 -z-1" />
        </div>
      </div>
    </div>
  );
};

export default HomeReel;
