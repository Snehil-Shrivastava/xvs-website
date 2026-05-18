import Video from "next-video";
import showreel from "@/videos/showreel.mp4";

const HomeReel = () => {
  return (
    <div className="flex justify-center items-center h-full relative">
      <div className="bg-white container-clip-both">
        <Video
          src={showreel}
          className="w-3/5 max-w-400 video-container p-0.5 shadow-[0_0_10px_8px_rgba(255,173,64,0.1)] content-clip-both"
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
