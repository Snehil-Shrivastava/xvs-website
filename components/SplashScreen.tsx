"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "@/public/gifs/spinning-lambda.webp";

// ─── Timing ───────────────────────────────────────────────────────────────────
const INITIAL_DELAY = 0.1; // wait for main page to render before measuring
const HOLD_DURATION = 0.5; // how long gif sits centered before moving
const MOVE_DURATION = 1.0; // gif travel + bg fade duration
const FADE_DURATION = 0.35; // final bg fade-out after gif lands
const EASE = "power3.inOut";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const splashRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const splashLogoRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const splashLogo = splashLogoRef.current;
      const bg = bgRef.current;

      const fadeOutAndComplete = () => {
        gsap.to(bg, {
          opacity: 0,
          duration: FADE_DURATION,
          ease: "power1.inOut",
          onComplete: () => {
            gsap.delayedCall(0.05, onComplete);
          },
        });
      };

      gsap.delayedCall(INITIAL_DELAY, () => {
        const mainLogo = document.getElementById("main-logo");

        if (!mainLogo || !splashLogo) {
          console.warn("main-logo not found — falling back to simple fade");
          gsap.delayedCall(1, fadeOutAndComplete);
          return;
        }

        // Hide the real logo — clone stands in for it during the animation
        gsap.set(mainLogo, { opacity: 0 });

        // Measure positions
        const splashRect = splashLogo.getBoundingClientRect();
        const targetRect = mainLogo.getBoundingClientRect();

        const dx =
          targetRect.left +
          targetRect.width / 2 -
          (splashRect.left + splashRect.width / 2);
        const dy =
          targetRect.top +
          targetRect.height / 2 -
          (splashRect.top + splashRect.height / 2);
        const scaleX = targetRect.width / splashRect.width;
        const scaleY = targetRect.height / splashRect.height;

        const tl = gsap.timeline({ delay: HOLD_DURATION });

        // Clone gif travels to the real logo's position and scales to match
        tl.to(splashLogo, {
          x: dx,
          y: dy,
          scaleX,
          scaleY,
          duration: MOVE_DURATION,
          ease: EASE,
          transformOrigin: "center center",
        });

        tl.to(
          bg,
          {
            opacity: 0,
            duration: MOVE_DURATION,
            ease: EASE,
          },
          "-=0.5",
        );

        // On landing: hide clone, reveal real logo, fade out remaining bg
        tl.call(() => {
          gsap.set(splashLogo, { opacity: 0 });
          gsap.set(mainLogo, { opacity: 1 });
          fadeOutAndComplete();
        });
      });
    },
    { scope: splashRef },
  );

  return (
    // Outer wrapper — needed for useGSAP scope, no visual role
    <div ref={splashRef} className="fixed inset-0 z-99 pointer-events-none">
      {/* Background — collapses independently from the gif */}
      <div ref={bgRef} className="absolute inset-0 bg-background" />

      {/* Clone gif — centered, travels to heading on animate */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          ref={splashLogoRef}
          src={logo}
          alt="Splash Screen logo"
          unoptimized
          priority
          className="w-37.5 md:w-55 2xl:w-67.5 will-change-transform"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
