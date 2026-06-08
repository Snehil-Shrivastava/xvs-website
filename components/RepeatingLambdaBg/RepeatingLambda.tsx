"use client";

import { useEffect, useRef } from "react";
import styles from "./RepeatingLambdaBg.module.css";

const MotifSVG = ({ className }: { className?: string }) => {
  return (
    <svg width="100%" height="800px" className={className}>
      <defs>
        <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="white" />
          <stop offset="65%" stopColor="black" />
        </linearGradient>
        <mask id="motifFadeMask">
          <rect
            x="0"
            y="0"
            width="170"
            height="170"
            fill="url(#fadeGradient)"
          />
        </mask>

        <linearGradient id="fadeGradientInvered" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="black" />
          <stop offset="65%" stopColor="white" />
        </linearGradient>
        <mask id="motifFadeMaskInverted">
          <rect
            x="0"
            y="0"
            width="170"
            height="170"
            fill="url(#fadeGradientInvered)"
          />
        </mask>
        <g id="motif">
          <path
            fill="none"
            strokeWidth="1px"
            d="M0,0 L28.656,0 L42.985,25.233 L57.313,0 L85.97,0 L57.313,50.485 L85.97,100.93 L57.313,100.93 Z"
            mask="url(#motifFadeMask)"
            stroke="gray"
          ></path>
          <g transform="translate(80, 50)">
            <path
              fill="none"
              strokeWidth="1px"
              d="M0,0 L28.656,0 L42.985,25.233 L57.313,0 L85.97,0 L57.313,50.485 L85.97,100.93 L57.313,100.93 Z"
              transform="translate(85.97, 100.93) scale(-1 -1)"
              mask="url(#motifFadeMaskInverted)"
              stroke="gray"
            ></path>
          </g>
        </g>

        <pattern
          id="staggeredPattern"
          x="0"
          y="0"
          width="220"
          height="1600"
          patternUnits="userSpaceOnUse"
        >
          <use href="#motif" x="50" y="-90" />
          <use href="#motif" x="0" y="0" />
          <use href="#motif" x="-65" y="90" />
          <use href="#motif" x="155" y="90" />
          <use href="#motif" x="90" y="190" />
          <use href="#motif" x="-130" y="190" />
          <use href="#motif" x="25" y="260" />
          <use href="#motif" x="-20" y="370" />
          <use href="#motif" x="200" y="370" />
          <use href="#motif" x="130" y="440" />
          <use href="#motif" x="-90" y="440" />
          <use href="#motif" x="80" y="530" />
          <use href="#motif" x="-140" y="530" />
          <use href="#motif" x="10" y="600" />

          <use href="#motif" x="-20" y="710" />
          <use href="#motif" x="200" y="710" />
          <use href="#motif" x="140" y="800" />
          <use href="#motif" x="-80" y="800" />
          <use href="#motif" x="80" y="890" />
          <use href="#motif" x="265" y="890" />
          <use href="#motif" x="30" y="990" />

          <use href="#motif" x="0" y="1100" />
          <use href="#motif" x="160" y="1180" />
          <use href="#motif" x="-60" y="1180" />
        </pattern>
      </defs>

      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#staggeredPattern)"
      ></rect>
    </svg>
  );
};

const RepeatingLambdaBg = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const glowX = useRef(0);
  const glowY = useRef(0);

  // update target mouse coords
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    mouseX.current = e.clientX - rect.left;
    mouseY.current = e.clientY - rect.top;
  };

  // animate glow coords smoothly
  useEffect(() => {
    let frame: number;

    const animate = () => {
      glowX.current += (mouseX.current - glowX.current) * 0.08; // adjust 0.08 for lag speed
      glowY.current += (mouseY.current - glowY.current) * 0.08;

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--mouse-x",
          `${glowX.current}px`,
        );
        containerRef.current.style.setProperty(
          "--mouse-y",
          `${glowY.current}px`,
        );
      }

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`absolute -top-2.5 left-0 right-0 md:h-screen max-md:h-150 md:max-lg:h-200 z-0 select-none ${styles.repeatingBgContainer}`}
    >
      <div
        className={`${styles.baseLayer} absolute top-0 left-0 w-full h-full pointer-events-none opacity-30 transition-opacity duration-300 ease-in-out`}
      >
        <MotifSVG className="2240p:h-full h-full" />
      </div>

      <div
        className={`${styles.glowLayer} absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 transition-opacity duration-300 ease-in-out`}
      >
        <MotifSVG className="2240p:h-full h-full" />
      </div>
    </div>
  );
};

export default RepeatingLambdaBg;
