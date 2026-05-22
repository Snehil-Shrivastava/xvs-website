// PulsingDots.tsx
// Drop this anywhere — it fills 100% of its parent (position: absolute, inset-0).
// Control dots via the `dots` prop: an array of { x, y } percentages (0–100).
// Each dot blinks at its own random duration so they're never in sync.

import React, { useMemo } from "react";

export interface DotPosition {
  /** Horizontal position as a percentage of the container width (0–100) */
  x: number;
  /** Vertical position as a percentage of the container height (0–100) */
  y: number;
  /** Optional unique key; defaults to index */
  key?: string;
}

interface BlinkingDotsProps {
  dots?: DotPosition[];
  /** Dot diameter in px (default: 10) */
  dotSize?: number;
  /** Dot color (default: #f79839 — matches ContactPage orange) */
  color?: string;
  /**
   * Min/max range in seconds for each dot's random blink duration.
   * Each dot picks its own value in this range. (default: [0.6, 2.2])
   */
  durationRange?: [number, number];
}

const DEFAULT_DOTS: DotPosition[] = [
  { x: 13, y: 40 },
  { x: 30, y: 75 },
  { x: 55, y: 20 },
  { x: 82, y: 45 },
  { x: 88, y: 30 },
  { x: 45, y: 40 },
  { x: 60, y: 85 },
];

/** Seeded pseudo-random so durations are stable across re-renders */
function seededRandom(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const BlinkingDots: React.FC<BlinkingDotsProps> = ({
  dots = DEFAULT_DOTS,
  dotSize = 10,
  color = "#f79839",
  durationRange = [4, 6],
}) => {
  const [minDur, maxDur] = durationRange;

  // One stable random duration per dot, derived from its index as a seed
  const durations = useMemo(
    () =>
      dots.map((_, i) => {
        const t = seededRandom(i);
        return +(minDur + t * (maxDur - minDur)).toFixed(3);
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dots.length, minDur, maxDur],
  );

  return (
    <>
      <style>{`
        @keyframes pd-blink {
          0%   { opacity: 0; }
          50%  { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 4,
          overflow: "hidden",
        }}
        aria-hidden="true"
      >
        {dots.map((dot, i) => (
          <span
            key={dot.key ?? i}
            style={{
              position: "absolute",
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              transform: "translate(-50%, -50%)",
              width: dotSize,
              height: dotSize,
              borderRadius: "50%",
              backgroundColor: color,
              boxShadow: `0 0 15px 5px ${color}`,
              opacity: 0,
              animation: `pd-blink ${durations[i]}s ease-in-out infinite`,
              willChange: "opacity",
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default BlinkingDots;
