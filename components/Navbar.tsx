"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavMenu from "./NavMenu";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import xvslogo from "@/public/svg/xvs-logo-svg.svg";
import xvslogowhite from "@/public/svg/xvs-logo-white-svg.svg";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoWhite, setIsLogoWhite] = useState(false);

  const backdropRef = useRef<HTMLDivElement>(null);

  // Handle Scroll Locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen) {
      timer = setTimeout(() => {
        setIsLogoWhite(true);
      }, 550);
    } else {
      timer = setTimeout(() => {
        setIsLogoWhite(false);
      }, 400);
    }

    return () => clearTimeout(timer);
  }, [isOpen]);

  // GSAP ScrollTrigger — fade in backdrop layer on scroll
  useGSAP(() => {
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top", // starts animating immediately on scroll
          end: "+=150", // fully faded in after 150px of scroll
          scrub: true, // ties opacity directly to scroll position
        },
      },
    );
  }, []);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 pointer-events-none h-42 max-sm:h-22 sm:max-md:h-30 md:max-xl:h-35">
        {/* GSAP-controlled backdrop layer — starts invisible, fades in on scroll */}
        <div
          ref={backdropRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0,
            backgroundImage:
              "linear-gradient(to bottom, rgba(10, 10, 10, 1), transparent)",
            backdropFilter: "blur(12px)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
          }}
        />

        {/* Fullscreen Circular Menu */}
        <div
          className={`fixed inset-0 z-9999 bg-brand-dark flex justify-center items-center pointer-events-none
            
            [--menu-origin-x:calc(100%-9rem)] [--menu-origin-y:7rem] [--menu-radius:200vw]
            
            max-sm:[--menu-origin-x:calc(100%-2.5rem)] max-sm:[--menu-origin-y:2.5rem] max-sm:[--menu-radius:120vh]

            sm:max-md:[--menu-origin-x:calc(100%-3rem)] sm:max-md:[--menu-origin-y:3.5rem] sm:max-md:[--menu-radius:180vh]
            
            md:max-lg:[--menu-origin-x:calc(100%-4rem)] md:max-lg:[--menu-origin-y:5rem]

            lg:max-xl:[--menu-origin-x:calc(100%-4rem)] lg:max-xl:[--menu-origin-y:6rem]

            xl:max-1440p:[--menu-origin-x:calc(100%-4rem)] xl:max-1440p:[--menu-origin-y:6rem]

            1440p:max-2xl:[--menu-origin-x:calc(100%-5rem)] 1440p:max-2xl:[--menu-origin-y:7rem]

            2xl:max-2240p:[--menu-origin-x:calc(100%-5rem)] 2xl:max-2240p:[--menu-origin-y:7rem]
            
          `}
          style={{
            clipPath: isOpen
              ? "circle(var(--menu-radius) at var(--menu-origin-x) var(--menu-origin-y))"
              : "circle(0px at var(--menu-origin-x) var(--menu-origin-y))",
            transition: "clip-path 1s cubic-bezier(0.76, 0, 0.24, 1)",
            willChange: "clip-path",
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          <NavMenu closeMenu={() => setIsOpen(false)} />
        </div>
      </nav>

      {/* Navbar Logo */}
      <Link
        href="./"
        className="h-21.25 z-50 fixed left-30 top-18 max-sm:left-[20] lg:max-xl:top-[50] xl:max-1440p:top-[60] sm:max-md:left-[40] md:max-lg:left-[40] lg:max-xl:left-[50] xl:max-1440p:left-[60] 1440p:max-2xl:left-[70] 2xl:max-2240p:left-[80] max-md:top-[30] md:max-lg:top-[40] max-sm:h-10.25 sm:max-md:h-14.5 md:max-xl:h-auto"
        aria-label="home page logo"
        title="home page logo"
        onClick={() => setIsOpen(false)}
      >
        {isLogoWhite ? (
          <Image
            src={xvslogowhite}
            alt="xvs logo"
            className="max-sm:w-10.5 sm:max-md:w-15 md:max-lg:w-18 lg:max-1440p:w-20 1440p:max-2xl:w-20 2xl:w-22 1920p:w-18 2240p:w-22"
          />
        ) : (
          <Image
            src={xvslogo}
            alt="xvs logo"
            className="max-sm:w-10.5 sm:max-md:w-15 md:max-lg:w-18 lg:max-1440p:w-20 1440p:max-2xl:w-20 2xl:w-22 1920p:w-18 2240p:w-22"
          />
        )}
      </Link>

      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-18 right-30 z-50 flex flex-col justify-center gap-1.5 outline-none cursor-pointer h-21.25 max-md:top-[30] md:max-lg:top-[40] lg:max-xl:top-[50] xl:max-1440p:top-[60] max-sm:right-[20] sm:max-md:right-[40] md:max-lg:right-[40] lg:max-xl:right-[50] xl:max-1440p:right-[60] 1440p:max-2xl:right-[70] 2xl:max-2240p:right-[80] max-sm:h-10.25 sm:max-md:h-14.5 md:max-lg:h-17.5"
        aria-label="Toggle Menu"
        title="Toggle Hamburger Menu"
      >
        {isOpen ? (
          // Close Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="18"
            viewBox="0 0 25 25"
            fill="none"
            className="w-3 h-3 sm:max-lg:w-7.5 sm:max-lg:h-5 lg:max-2xl:w-7 lg:max-2xl:h-4.5 min-[1536px]:max-[1905px]:w-7 min-[1536px]:max-[1905px]:h-4.5 min-[1905px]:w-8 min-[1905px]:h-6"
          >
            <path
              d="M1 1L24 24M24 1L1 24"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            className="w-[18.5px] max-sm:w-6.75 max-sm:h-4.5 h-3 sm:max-lg:w-7.5 sm:max-lg:h-5 lg:max-2xl:w-7 lg:max-2xl:h-4.5 min-[1536px]:max-[1905px]:w-7 min-[1536px]:max-[1905px]:h-4.5 min-[1905px]:w-8 min-[1905px]:h-6 2240p:w-9 2240p:h-9"
          >
            <g clipPath="url(#clip0_2340_560)">
              <path
                d="M12.1067 7.48649L13.8371 10.5254H27.5324V7.47607L12.1067 7.48649Z"
                fill="#F79839"
              />
              <path
                d="M7.85083 0.0125014L9.55207 2.99931H27.5323V0L7.85083 0.0125014Z"
                fill="#F79839"
              />
              <path
                d="M16.3894 15.0078L18.0677 17.956L27.5324 17.9998V15.0005L16.3894 15.0078Z"
                fill="#F79839"
              />
              <path
                d="M0 0L5.07663 8.97187L0 17.9292H5.06204L7.63422 13.437L10.2064 17.9292H15.2674L5.06204 0H0Z"
                fill="#F3EDDE"
              />
            </g>
            <defs>
              <clipPath id="clip0_2340_560">
                <rect width="27.5324" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </button>
    </>
  );
}
