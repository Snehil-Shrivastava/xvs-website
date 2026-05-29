import Video from "next-video";
import { Asset } from "next-video/dist/assets.js";

const BgVideo = ({ bgVideo }: { bgVideo: Asset }) => {
  return (
    <div
      className="overflow-hidden max-sm:w-[250vw] sm:max-md:w-[180vw] md:max-xl:w-[200vw]"
      style={{
        maskImage: "linear-gradient(to bottom, black, transparent 95% 100%)",
      }}
    >
      <Video
        src={bgVideo}
        className="-scale-x-100 services-bg-container h-[95vh] max-xl:h-full"
        controls={false}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default BgVideo;
