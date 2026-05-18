"use client";

import React, { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";

// Configuration
const CONFIG = {
  GRID_SIZE: 25,
  GLOW_COLOR: "#f79839", // Brand Orange
  DEFAULT_CELL_FILL: "#282828", // Dark Grey
  DEFAULT_CELL_STROKE: "rgba(243, 237, 222, 0.2)", // Light border
  CELL_LIT_DURATION: 2, // Seconds (GSAP uses seconds)
  ANIMATION_INTERVALS: [1, 1.5, 2, 2.5], // Seconds
  MAX_ATTEMPTS: 5, // Limit attempts to find an empty spot
} as const;

const AboutGrid: React.FC = () => {
  const activeMatrix = useRef<boolean[][]>([]);
  const containerRef = useRef<SVGSVGElement>(null);

  if (activeMatrix.current.length === 0) {
    for (let i = 0; i < CONFIG.GRID_SIZE; i++) {
      activeMatrix.current[i] = new Array(CONFIG.GRID_SIZE).fill(false);
    }
  }

  const isCellAvailable = (row: number, col: number) => {
    if (activeMatrix.current[row][col]) return false;

    for (let rOffset = -1; rOffset <= 1; rOffset++) {
      for (let cOffset = -1; cOffset <= 1; cOffset++) {
        const nRow = row + rOffset;
        const nCol = col + cOffset;

        if (
          nRow >= 0 &&
          nRow < CONFIG.GRID_SIZE &&
          nCol >= 0 &&
          nCol < CONFIG.GRID_SIZE
        ) {
          if (activeMatrix.current[nRow][nCol]) return false;
        }
      }
    }
    return true;
  };

  const pulseRandomCell = () => {
    if (!containerRef.current) return;

    let attempts = 0;
    let found = false;
    let r = 0,
      c = 0;

    while (attempts < CONFIG.MAX_ATTEMPTS && !found) {
      r = Math.floor(Math.random() * CONFIG.GRID_SIZE);
      c = Math.floor(Math.random() * CONFIG.GRID_SIZE);
      if (isCellAvailable(r, c)) {
        found = true;
      }
      attempts++;
    }

    if (found) {
      activeMatrix.current[r][c] = true;

      const cellId = `#cell-${r}-${c}`;

      gsap.to(cellId, {
        fill: CONFIG.GLOW_COLOR,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(cellId, {
            fill: CONFIG.DEFAULT_CELL_FILL,
            duration: 1,
            delay: CONFIG.CELL_LIT_DURATION,
            ease: "power2.in",
            onComplete: () => {
              activeMatrix.current[r][c] = false;
            },
          });
        },
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      CONFIG.ANIMATION_INTERVALS.forEach((interval) => {
        const loop = () => {
          pulseRandomCell();
          gsap.delayedCall(interval, loop);
        };
        loop();
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (e: React.MouseEvent<SVGRectElement>) => {
    const target = e.currentTarget;
    gsap.killTweensOf(target);

    gsap.to(target, {
      fill: CONFIG.GLOW_COLOR,
      duration: 0.3,
      ease: "power1.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<SVGRectElement>) => {
    const target = e.currentTarget;
    const ids = target.id.split("-");
    const r = parseInt(ids[1]);
    const c = parseInt(ids[2]);

    activeMatrix.current[r][c] = false;

    gsap.to(target, {
      fill: CONFIG.DEFAULT_CELL_FILL,
      duration: 0.5,
      ease: "power1.out",
    });
  };

  const gridItems = useMemo(() => {
    const items = [];
    for (let row = 0; row < CONFIG.GRID_SIZE; row++) {
      for (let col = 0; col < CONFIG.GRID_SIZE; col++) {
        items.push(
          <rect
            key={`${row}-${col}`}
            id={`cell-${row}-${col}`}
            x={col}
            y={row}
            width={1}
            height={1}
            fill={CONFIG.DEFAULT_CELL_FILL}
            stroke={CONFIG.DEFAULT_CELL_STROKE}
            strokeWidth="0.01"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ willChange: "fill" }}
          />,
        );
      }
    }
    return items;
  }, []);

  return (
    <svg
      ref={containerRef}
      width="100%"
      height="100%"
      viewBox={`0 0 ${CONFIG.GRID_SIZE} ${CONFIG.GRID_SIZE}`}
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-2xl"
      style={{
        maskImage: "radial-gradient(ellipse, black, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse, black, transparent 70%)",

        transform: "translate3d(0,0,0)",
      }}
      role="img"
      aria-label="Animated grid with glowing cells"
    >
      {gridItems}
    </svg>
  );
};

export default AboutGrid;
