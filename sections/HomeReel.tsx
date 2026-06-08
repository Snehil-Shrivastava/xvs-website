import Video from "next-video";
import showreel from "@/videos/showreel-final-for-web.mp4";

const HomeReel = () => {
  return (
    <div className="flex justify-center items-center h-full relative">
      <div className="w-9/10 max-w-450 max-md:w-9/10 max-sm:max-w-120 sm:max-md:max-w-180 lg:max-xl:max-w-200 xl:max-1440p:max-w-250 1440p:max-2xl:max-w-260 2xl:max-1728p:max-w-300 1728p:max-1920p:max-w-340 1920p:max-2240p:max-w-380 md:max-1440p:w-9/10 1440p:max-2xl:w-9/10 relative z-10 drop-shadow-[0_0_40px_#0000004d]">
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
