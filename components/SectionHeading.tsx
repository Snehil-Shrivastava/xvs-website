import Link from "next/link";
import React from "react";

const SectionHeading = ({
  headingText,
  buttonText,
  buttonIcon,
}: {
  headingText: string;
  buttonText: string;
  buttonIcon?: string;
}) => {
  const lastIndex = headingText.length - 1;

  return (
    <div className="relative">
      <h2
        className="font-calSans text-[15rem] uppercase font-semibold"
        style={{
          maskImage:
            "linear-gradient(rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0) 78%, rgba(0, 0, 0, 0) 90%)",
        }}
      >
        {headingText.split("").map((letter, index) => (
          <span key={index} className={`${index === lastIndex ? "" : "mr-14"}`}>
            {letter}
          </span>
        ))}
      </h2>
      <Link
        href={`#`}
        className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 uppercase`}
      >
        <span
          className="text-brand-orange tracking-wider font-medium bg-neutral-900/40 px-8 py-4 backdrop-blur-xs"
          style={{
            background:
              "radial-gradient(circle,rgba(247, 152, 57, 0.2) 0%, rgba(255, 173, 64, 0.15) 18%, rgba(100, 100, 100, 0.3) 100%)",
            backdropFilter: "blur(5px)",
          }}
        >
          {buttonText}
        </span>
      </Link>
    </div>
  );
};

export default SectionHeading;
