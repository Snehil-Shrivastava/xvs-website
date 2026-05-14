"use client";

import { useEffect, useRef, useId } from "react";

// ─── Constants ────────────────────────────────────────────────────────
const LERP_SPEED = 0.08;
const BASE_OPACITY = 0.3;
const BASE_OPACITY_HOVER = 0.18;
const GLOW_RADIUS = 200;
const GLOW_RADIUS_LG = 400;
const LG_BREAKPOINT = 1920;

const BASE_STROKE = "gray";
const GLOW_STROKE = "#ffaf5f";
const GLOW_FILTER =
  "drop-shadow(0 0 8px #fa8b1d) drop-shadow(0 0 15px #fa8b1d)";

const PATTERN_W = 220;
const PATTERN_H = 1600;

const LAMBDA_D =
  "M0,0 L28.656,0 L42.985,25.233 L57.313,0 L85.97,0 L57.313,50.485 L85.97,100.93 L57.313,100.93 Z";
const LAMBDA_W = 85.97;
const LAMBDA_H = 100.93;

const MOTIF_USES = [
  { x: 50, y: -90 },
  { x: 0, y: 0 },
  { x: -65, y: 90 },
  { x: 155, y: 90 },
  { x: 90, y: 190 },
  { x: -130, y: 190 },
  { x: 25, y: 260 },
  { x: -20, y: 370 },
  { x: 200, y: 370 },
  { x: 130, y: 440 },
  { x: -90, y: 440 },
  { x: 80, y: 530 },
  { x: -140, y: 530 },
  { x: 10, y: 600 },
  { x: -20, y: 710 },
  { x: 200, y: 710 },
  { x: 140, y: 800 },
  { x: -80, y: 800 },
  { x: 80, y: 890 },
  { x: 265, y: 890 },
  { x: 30, y: 990 },
  { x: 0, y: 1100 },
  { x: 160, y: 1180 },
  { x: -60, y: 1180 },
];

// ─── Motif SVG (Unchanged, already optimal) ───────────────────────────
function MotifSVG({ uid, stroke }: { uid: string; stroke: string }) {
  const gradNId = `${uid}-gn`;
  const gradFId = `${uid}-gf`;
  const maskNId = `${uid}-mn`;
  const maskFId = `${uid}-mf`;
  const motifId = `${uid}-motif`;
  const patternId = `${uid}-pat`;

  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id={gradNId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="65%" stopColor="black" />
        </linearGradient>
        <mask id={maskNId}>
          <rect
            x="0"
            y="0"
            width={LAMBDA_W}
            height={LAMBDA_H}
            fill={`url(#${gradNId})`}
          />
        </mask>
        <linearGradient id={gradFId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="black" />
          <stop offset="65%" stopColor="white" />
        </linearGradient>
        <mask id={maskFId}>
          <rect
            x="0"
            y="0"
            width={LAMBDA_W}
            height={LAMBDA_H}
            fill={`url(#${gradFId})`}
          />
        </mask>
        <g id={motifId}>
          <path
            fill="none"
            stroke={stroke}
            strokeWidth="1"
            d={LAMBDA_D}
            mask={`url(#${maskNId})`}
          />
          <g transform="translate(80,50)">
            <path
              fill="none"
              stroke={stroke}
              strokeWidth="1"
              d={LAMBDA_D}
              transform={`translate(${LAMBDA_W},${LAMBDA_H}) scale(-1,-1)`}
              mask={`url(#${maskFId})`}
            />
          </g>
        </g>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={PATTERN_W}
          height={PATTERN_H}
          patternUnits="userSpaceOnUse"
        >
          {MOTIF_USES.map(({ x, y }, i) => (
            <use key={i} href={`#${motifId}`} x={x} y={y} />
          ))}
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#${patternId})`}
      />
    </svg>
  );
}

// ─── Main Component ───────────────────────────────────────────────────
const RepeatingLambdaBg = ({ className = "" }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Performance caches
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const glowX = useRef(0);
  const glowY = useRef(0);
  const inside = useRef(false);
  const isAnimating = useRef(false);
  const radius = useRef(GLOW_RADIUS); // Cached radius to prevent layout thrashing

  const rawUid = useId();
  const uid = rawUid.replace(/:/g, "");

  // 1. Handle window resize independently (Eliminates layout thrashing)
  useEffect(() => {
    const handleResize = () => {
      radius.current =
        window.innerWidth >= LG_BREAKPOINT ? GLOW_RADIUS_LG : GLOW_RADIUS;
    };
    handleResize(); // Init
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animate = () => {
    // Lerp calculation
    glowX.current += (mouseX.current - glowX.current) * LERP_SPEED;
    glowY.current += (mouseY.current - glowY.current) * LERP_SPEED;

    if (glowRef.current && inside.current) {
      const mask = `radial-gradient(circle ${radius.current}px at ${glowX.current}px ${glowY.current}px, black 20%, transparent 100%)`;
      glowRef.current.style.maskImage = mask;
      glowRef.current.style.webkitMaskImage = mask;
    }

    // 2. Bail out of the loop if distance is tiny and mouse left (Saves Battery)
    const dist =
      Math.abs(mouseX.current - glowX.current) +
      Math.abs(mouseY.current - glowY.current);

    if (inside.current || dist > 0.5) {
      requestAnimationFrame(animate);
    } else {
      isAnimating.current = false; // Gracefully shut down the loop
    }
  };

  const triggerAnimation = () => {
    if (!isAnimating.current) {
      isAnimating.current = true;
      requestAnimationFrame(animate);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.current = e.clientX - rect.left;
    mouseY.current = e.clientY - rect.top;
    triggerAnimation(); // Ensure loop is running
  };

  const handleMouseEnter = () => {
    inside.current = true;
    if (baseRef.current)
      baseRef.current.style.opacity = String(BASE_OPACITY_HOVER);
    if (glowRef.current) glowRef.current.style.opacity = "1";
    triggerAnimation(); // Boot up the loop when mouse enters
  };

  const handleMouseLeave = () => {
    inside.current = false;
    if (baseRef.current) baseRef.current.style.opacity = String(BASE_OPACITY);
    if (glowRef.current) glowRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`absolute inset-0 md:h-[95vh] max-md:h-80 z-0 select-none overflow-hidden ${className}`}
    >
      <div
        ref={baseRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out"
        style={{ opacity: BASE_OPACITY }}
      >
        <MotifSVG uid={`${uid}-base`} stroke={BASE_STROKE} />
      </div>

      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out"
        style={{
          opacity: 0,
          filter: GLOW_FILTER,
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
          willChange: "mask-image, opacity", // 3. Promotes rendering directly to the GPU
        }}
      >
        <MotifSVG uid={`${uid}-glow`} stroke={GLOW_STROKE} />
      </div>
    </div>
  );
};

export default RepeatingLambdaBg;
