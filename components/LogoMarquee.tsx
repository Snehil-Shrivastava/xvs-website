type Logo = {
  src: string;
  alt: string;
  imgClass: string;
};

type LogoMarqueeProps = {
  logos: Logo[];
  speed?: number; // seconds for one full loop
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  gap?: number; // px gap between logo slots
};

export default function LogoMarquee({
  logos,
  speed = 50,
  pauseOnHover = true,
  direction = "left",
  gap = 100,
}: LogoMarqueeProps) {
  // Duplicate the list so the seam is invisible
  const track = [...logos, ...logos];

  return (
    <>
      {/* Inject the keyframe once — safe to repeat, browser dedupes */}
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-track {
          animation-name: ${direction === "right" ? "marquee-right" : "marquee-left"};
          animation-duration: ${speed}s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        ${
          pauseOnHover
            ? `.marquee-root:hover .marquee-track { animation-play-state: paused; }`
            : ""
        }
      `}</style>

      {/*
        Outer container:
          - overflow-hidden clips the scrolling strip
          - mask fades logos in/out at the edges for a polished look
      */}
      <div className="marquee-root relative w-full overflow-hidden">
        {/* Scrolling track — rendered twice inside to create seamless loop */}
        <div className="marquee-track flex w-max" style={{ gap: `${gap}px` }}>
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center justify-center"
              style={{ minWidth: 120 }} // keeps logos from squishing
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`h-10 w-auto object-contain transition-all duration-300 ${logo.imgClass}`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
