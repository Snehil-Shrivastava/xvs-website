// import Video from "next-video";
// import showreel from "@/videos/showreel-final-for-web.mp4";

// const HomeReel = () => {
//   return (
//     <div className="flex justify-center items-center h-full relative">
//       <div className="w-9/10 max-w-450 max-md:w-9/10 max-sm:max-w-120 sm:max-md:max-w-180 lg:max-xl:max-w-200 xl:max-1440p:max-w-250 1440p:max-2xl:max-w-260 2xl:max-1728p:max-w-300 1728p:max-1920p:max-w-340 1920p:max-2240p:max-w-380 md:max-1440p:w-9/10 1440p:max-2xl:w-9/10 relative z-10 drop-shadow-[0_0_40px_#0000004d]">
//         <div className="container-clip-both">
//           <Video
//             src={showreel}
//             className="video-container p-px shadow-[0_0_10px_8px_rgba(255,173,64,0.1)] content-clip-both"
//             controls={false}
//             disableTracking
//             autoPlay
//             loop
//             muted
//             playsInline
//           />
//           <div className="absolute inset-0 bg-white/50 -z-1" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeReel;

// ----------------------------- mute/unmute

"use client";

import { useEffect, useRef, useState } from "react";
import Video from "next-video";
import showreel from "@/videos/showreel-final-for-web.mp4";
import { Volume2, VolumeX } from "lucide-react";

const HomeReel = () => {
  // Direct ref to the Video component (it forwards this to the underlying media element)
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);

  // Keep the underlying player properties synchronized with React state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = volume;
    video.muted = isMuted;
  }, [volume, isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);

    if (newVolume > 0) {
      setIsMuted(false);
    } else {
      setIsMuted(true);
    }
  };

  const effectiveVolume = isMuted ? 0 : volume;

  return (
    <div className="flex justify-center items-center h-full relative">
      <div className="w-9/10 max-w-450 max-md:w-9/10 max-sm:max-w-120 sm:max-md:max-w-180 lg:max-xl:max-w-200 xl:max-1440p:max-w-250 1440p:max-2xl:max-w-260 2xl:max-1728p:max-w-300 1728p:max-1920p:max-w-340 1920p:max-2240p:max-w-380 md:max-1440p:w-9/10 1440p:max-2xl:w-9/10 relative z-10 drop-shadow-[0_0_40px_#0000004d]">
        <div className="container-clip-both relative group/reel">
          <Video
            ref={videoRef} // Attached directly to the Video player
            src={showreel}
            className="video-container p-px shadow-[0_0_10px_8px_rgba(255,173,64,0.1)] content-clip-both"
            controls={false}
            disableTracking
            autoPlay
            loop
            muted={isMuted} // Controlled dynamically by React state
            playsInline
          />
          <div className="absolute inset-0 bg-white/50 -z-1" />

          {/* Controls overlay */}
          <div
            className="
              absolute sm:bottom-10 max-sm:top-5
              sm:left-1/2 sm:-translate-x-1/2 max-sm:right-5
              flex items-center gap-3
              bg-neutral-600/80 rounded-full
              px-4 py-2 max-sm:px-2 max-sm:py-1
              backdrop-blur-sm
              translate-y-7.5 opacity-0 pointer-events-none
              transition-all duration-300 ease-out
              group-hover/reel:opacity-100 group-hover/reel:translate-y-0 group-hover/reel:pointer-events-auto
              max-sm:opacity-100 max-sm:translate-y-0 max-sm:transition-none max-sm:pointer-events-auto
            "
          >
            <div className="group/vol flex items-center gap-3">
              <button
                className="cursor-pointer text-white w-5 h-5 flex items-center justify-center shrink-0"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX /> : <Volume2 />}
              </button>

              <input
                id="volume-slider"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={effectiveVolume}
                aria-label="volume slider"
                onChange={handleVolumeChange}
                style={
                  {
                    "--val": `${effectiveVolume * 100}%`,
                  } as React.CSSProperties
                }
                className="
                  volume-slider
                  w-0 opacity-0
                  group-hover/vol:w-24 group-hover/vol:opacity-100
                  origin-left appearance-none bg-transparent h-1.5
                  rounded-sm cursor-pointer
                  transition-all duration-300 ease-out
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeReel;
