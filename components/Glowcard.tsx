"use client";

import React, { useRef, useState } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  cardStyle?: string;
  contentStyle?: string;
  cardGlowRadius?: string;
  cardGlowIntensity?: string;
}

export default function GlowCard({
  children,
  className = "",
  cardStyle,
  contentStyle,
  cardGlowRadius = "850px",
  cardGlowIntensity = "0.2",
}: GlowCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // ==========================================
  // DESKTOP MOUSE EVENTS
  // ==========================================
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  // ==========================================
  // MOBILE TOUCH EVENTS (iOS & Android)
  // ==========================================
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    setIsHovered(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      // Desktop listeners
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Mobile listeners (works flawlessly on iOS and Android)
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={`relative group p-px bg-neutral-200/10 ${className ? className : "overflow-hidden"}`}
    >
      {/* 1. Glowing Border */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(
            700px circle at var(--mouse-x) var(--mouse-y),
            rgba(255,173,64,0.8),
            transparent 40%
          )`,
        }}
      />

      {/* Inner Card Container */}
      <div
        className={`relative h-full w-full overflow-hidden content-clip-path ${
          cardStyle ? cardStyle : "bg-brand-dark backdrop-blur-md py-25 px-15"
        }`}
      >
        {/* 2. Glowing Background */}
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: `radial-gradient(
              ${cardGlowRadius} circle at var(--mouse-x) var(--mouse-y),
              rgba(247,152,57,${cardGlowIntensity}),
              transparent 40%
            )`,
          }}
        />

        {/* Content */}
        <div
          className={`relative z-10 text-neutral-100 ${
            contentStyle ? contentStyle : "flex justify-between"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
