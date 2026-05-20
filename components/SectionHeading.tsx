import Link from "next/link";
import "@/app/styles.css";
import { JSX } from "react";

const SectionHeading = ({
  headingText,
  buttonText,
  buttonIcon,
  buttonLink,
  desc,
}: {
  headingText: string;
  buttonText?: string;
  buttonIcon?: JSX.Element;
  buttonLink?: string;
  desc?: string;
}) => {
  const lastIndex = headingText.length - 1;

  return (
    <div className="relative">
      <h2
        className="font-calSans text-[15rem] uppercase font-semibold select-none text-center"
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
      {buttonText && (
        <Link
          href={`${buttonLink ? buttonLink : "#"}`}
          className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 uppercase select-none`}
        >
          <span
            className="text-brand-orange tracking-wider font-medium bg-neutral-900/40 px-8 py-4 backdrop-blur-xs btn-clip flex items-center gap-2"
            style={{
              background:
                "radial-gradient(circle,rgba(247, 152, 57, 0.2) 0%, rgba(255, 173, 64, 0.15) 18%, rgba(100, 100, 100, 0.3) 100%)",
              backdropFilter: "blur(5px)",
            }}
          >
            <span>{buttonText}</span>
            {buttonIcon && <span>{buttonIcon}</span>}
          </span>
        </Link>
      )}
      {desc && (
        <p className="absolute bottom-5 inset-x-0 text-center text-brand-cream 2240p:text-xl select-none">
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
