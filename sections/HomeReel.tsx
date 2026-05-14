import Video from "next-video";
import showreel from "@/videos/showreel.mp4";

const HomeReel = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Video
        src={showreel}
        className="w-3/5 max-w-350 video-container bg-white p-0.5 shadow-[0_0_10px_8px_rgba(255,173,64,0.1)]"
        controls={false}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default HomeReel;
