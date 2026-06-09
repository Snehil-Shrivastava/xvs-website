// type Logo = {
//   src: string;
//   alt: string;
//   imgClass: string;
// };

// type LogoMarqueeProps = {
//   logos: Logo[];
//   speed?: number; // seconds for one full loop
//   pauseOnHover?: boolean;
//   direction?: "left" | "right";
//   mobileSpeed?: number;
// };

// export default function LogoMarquee({
//   logos,
//   speed = 50,
//   pauseOnHover = true,
//   direction = "left",
//   mobileSpeed,
// }: LogoMarqueeProps) {
//   // Duplicate the list so the seam is invisible
//   const track = [...logos, ...logos];

//   return (
//     <>
//       {/* Inject the keyframe once — safe to repeat, browser dedupes */}
//       <style>{`
//         @keyframes marquee-left {
//           from { transform: translateX(0); }
//           to   { transform: translateX(-50%); }
//         }
//         @keyframes marquee-right {
//           from { transform: translateX(-50%); }
//           to   { transform: translateX(0); }
//         }
//         .marquee-track {
//           animation-name: ${direction === "right" ? "marquee-right" : "marquee-left"};
//           animation-duration: ${speed}s;
//           animation-timing-function: linear;
//           animation-iteration-count: infinite;
//         }
//         @media (max-width: 767px) {
//           .marquee-track {
//             animation-duration: ${mobileSpeed ? `${mobileSpeed}s` : "20s"};
//           }
//         }
//         ${
//           pauseOnHover
//             ? `.marquee-root:hover .marquee-track { animation-play-state: paused; }`
//             : ""
//         }
//       `}</style>

//       {/*
//         Outer container:
//           - overflow-hidden clips the scrolling strip
//           - mask fades logos in/out at the edges for a polished look
//       */}
//       <div className="marquee-root relative w-full overflow-hidden">
//         {/* Scrolling track — rendered twice inside to create seamless loop */}
//         <div
//           className={`marquee-track flex w-max select-none gap-25 max-sm:gap-0 sm:max-md:gap-5 md:max-lg:gap-8 lg:max-xl:gap-10`}
//           // style={{ gap: `${gap}px` }}
//         >
//           {track.map((logo, i) => (
//             <div
//               key={i}
//               className="flex shrink-0 items-center justify-center"
//               style={{ minWidth: 120 }} // keeps logos from squishing
//             >
//               <img
//                 src={logo.src}
//                 alt={logo.alt}
//                 className={` object-cover transition-all duration-300 ${logo.imgClass}`}
//                 draggable={false}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// ------------------------------------ testing

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
  mobileSpeed?: number;
};

export default function LogoMarquee({
  logos,
  speed = 50,
  pauseOnHover = true,
  direction = "left",
  mobileSpeed,
}: LogoMarqueeProps) {
  // Duplicate the list so the seam is invisible
  const track = [...logos, ...logos];

  return (
    <>
      {/* 
        This style block is now 100% static. No JS string interpolation is used.
        It relies on CSS variables defined inline on the parent container.
      */}
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
          animation-name: var(--marquee-direction);
          animation-duration: var(--marquee-speed);
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @media (max-width: 767px) {
          .marquee-track {
            animation-duration: var(--marquee-mobile-speed);
          }
        }
        .marquee-root:hover .marquee-track {
          animation-play-state: var(--marquee-hover-state);
        }
      `}</style>

      {/*
        Outer container:
          - We pass the dynamic properties as locally scoped CSS variables
      */}
      <div
        className="marquee-root relative w-full overflow-hidden"
        style={
          {
            "--marquee-speed": `${speed}s`,
            "--marquee-mobile-speed": `${mobileSpeed ?? 20}s`,
            "--marquee-direction":
              direction === "right" ? "marquee-right" : "marquee-left",
            "--marquee-hover-state": pauseOnHover ? "paused" : "running",
          } as React.CSSProperties
        }
      >
        {/* Scrolling track */}
        <div className="marquee-track flex w-max select-none gap-25 max-sm:gap-0 sm:max-md:gap-5 md:max-lg:gap-8 lg:max-xl:gap-10">
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center justify-center"
              style={{ minWidth: 120 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`object-cover transition-all duration-300 ${logo.imgClass}`}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
