"use client";

import React, { useRef } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  cardStyle?: string;
  contentStyle?: string;
}

export default function GlowCard({
  children,
  className = "",
  cardStyle,
  contentStyle,
}: GlowCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    // Get the bounding rectangle of the card
    const rect = containerRef.current.getBoundingClientRect();

    // Calculate the mouse's X and Y coordinates relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set CSS variables for the coordinates
    containerRef.current.style.setProperty("--mouse-x", `${x}px`);
    containerRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`relative group p-0.5 bg-neutral-200/10 overflow-hidden ${className}`}
    >
      {/* 1. Glowing Border */}
      {/* This div is behind the inner card. It shows a radial gradient that tracks the mouse. */}
      {/* Because the inner card covers it (except for the 1px padding), it acts as a glowing border! */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(
            700px circle at var(--mouse-x) var(--mouse-y),
            rgba(255,173,64,0.8),
            transparent 40%
          )`,
        }}
      />

      {/* Inner Card Container */}
      {/* Notice the slightly smaller border radius (11px vs outer 12px) for perfect nesting */}
      <div
        className={`relative h-full w-full py-25 px-15 overflow-hidden ${cardStyle ? cardStyle : "bg-brand-dark backdrop-blur-md"}`}
      >
        {/* 2. Glowing Background */}
        {/* This creates the softer illumination on the background of the card */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(
              850px circle at var(--mouse-x) var(--mouse-y),
              rgba(247,152,57,0.2),
              transparent 40%
            )`,
          }}
        />

        {/* Content */}
        {/* z-10 ensures your text and elements stay above the background glow */}
        <div
          className={`relative z-10 text-neutral-100 ${contentStyle ? contentStyle : "flex justify-between"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
