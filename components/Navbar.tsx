"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NavMenu from "./NavMenu";
import Image from "next/image";

import xvslogo from "@/public/svg/xvs-logo-svg.svg";
import xvslogowhite from "@/public/svg/xvs-logo-white-svg.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle Scroll Locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup function to ensure scrolling is restored if component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav>
      <div className="flex justify-between px-30 pt-18">
        {/* Navbar Logo */}
        <Link
          href="./"
          className="h-full z-50"
          aria-label="home page logo"
          title="home page logo"
        >
          {isOpen ? (
            <Image
              src={xvslogowhite}
              alt=""
              className="max-sm:w-10.5 sm:max-md:w-12 md:max-lg:w-18 lg:max-1440p:w-20 1440p:max-2xl:w-20 2xl:w-22 1920p:w-18 2240p:w-22"
            />
          ) : (
            <Image
              src={xvslogo}
              alt=""
              className="max-sm:w-10.5 sm:max-md:w-12 md:max-lg:w-18 lg:max-1440p:w-20 1440p:max-2xl:w-20 2xl:w-22 1920p:w-18 2240p:w-22"
            />
          )}
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 flex flex-col justify-center gap-1.5 outline-none cursor-pointer"
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

        {/* Fullscreen Circular Menu */}
        <div
          className="fixed inset-0 z-40 bg-brand-dark flex justify-center items-center pointer-events-none"
          style={{
            // The magic: Animates from a 0px circle to a 150vw circle.
            // calc(100% - 9rem) 3rem aligns the circle's origin perfectly with the hamburger button.
            clipPath: isOpen
              ? "circle(200vw at calc(100% - 9rem) 7rem)"
              : "circle(0px at calc(100% - 9rem) 7rem)",
            transition: "clip-path 0.8s cubic-bezier(0.76, 0, 0.24, 1)",
            willChange: "clip-path",
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          <NavMenu />
        </div>
      </div>
    </nav>
  );
}
