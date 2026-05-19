"use client";

import { useEffect, useRef } from "react";

interface StarryCanvasProps {
  // children?: React.ReactNode;
  /** Number of stars to render */
  starCount?: number;
  /** Color of the stars */
  starColor?: string;
  /** Minimum floating speed */
  minSpeed?: number;
  /** Maximum floating speed */
  maxSpeed?: number;
  /** Minimum size of a star in pixels */
  minSize?: number;
  /** Maximum size of a star in pixels */
  maxSize?: number;
  /** Maximum pixel distance a star can wander from its origin */
  wanderDistance?: number;
}

export default function StarryCanvas({
  // children,
  starCount = 150,
  starColor = "#ffffff",
  minSpeed = 0.005,
  maxSpeed = 0.015,
  minSize = 0.5,
  maxSize = 1.5,
  wanderDistance = 30,
}: StarryCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let stars: any[] = [];

    // Handles High-DPI (Retina) displays so stars don't look blurry
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          // Base origin position
          baseX: Math.random() * window.innerWidth,
          baseY: Math.random() * window.innerHeight,
          // Current wandering offset (using trig)
          timeX: Math.random() * Math.PI * 2,
          timeY: Math.random() * Math.PI * 2,
          // Independent X/Y speeds for organic movement
          speedX: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          speedY: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          size: Math.random() * (maxSize - minSize) + minSize,
        });
      }
    };

    const render = () => {
      // Clear the previous frame completely
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // We set the color & glow once for all stars for maximum performance
      ctx.fillStyle = starColor;
      ctx.shadowBlur = maxSize * 2;
      ctx.shadowColor = starColor;

      stars.forEach((star) => {
        // Calculate new position using Sine/Cosine waves for smooth wandering
        star.timeX += star.speedX;
        star.timeY += star.speedY;

        const x = star.baseX + Math.sin(star.timeX) * wanderDistance;
        const y = star.baseY + Math.cos(star.timeY) * wanderDistance;

        // Draw the star
        ctx.beginPath();
        ctx.arc(x, y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    // Initialize
    setCanvasSize();
    initStars();
    render();

    // Handle window resizing
    const handleResize = () => {
      setCanvasSize();
      initStars(); // Regenerate stars to fill the new screen size properly
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    starCount,
    starColor,
    minSpeed,
    maxSpeed,
    minSize,
    maxSize,
    wanderDistance,
  ]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-background">
      {/* 
        The canvas takes up exactly 1 DOM node.
        Pointer-events-none ensures it doesn't block clicks on your actual content.
      */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Foreground Content */}
      {/* <div className="relative z-10 w-full h-full">{children}</div> */}
    </div>
  );
}
