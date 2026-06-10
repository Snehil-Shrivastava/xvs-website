import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

const BlogButton = ({
  buttonLink,
  buttonText,
  buttonIcon,
}: {
  buttonLink?: string;
  buttonText?: string;
  buttonIcon?: JSX.Element;
}) => {
  return (
    <div
      // href={`${buttonLink ? buttonLink : "#"}`}
      className={`uppercase select-none inline-block`}
    >
      <span
        className="text-brand-orange tracking-wider font-medium font-apercu-regular bg-neutral-900/40 px-8 max-md:px-4 md:max-lg:px-6 lg:max-1440p:px-4 py-3.5 max-sm:py-0.5 sm:max-md:py-1.5 md:max-lg:py-2 lg:max-1440p:py-2.5 backdrop-blur-xs btn-clip flex items-center gap-2 max-sm:text-[8px] sm:max-md:text-[10px] md:max-lg:text-sm lg:max-1440p:text-sm"
        style={{
          background:
            "radial-gradient(circle,rgba(247, 152, 57, 0.2) 0%, rgba(255, 173, 64, 0.15) 18%, rgba(100, 100, 100, 0.5) 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <span>{buttonText}</span>
        {buttonIcon ? (
          <span>{buttonIcon}</span>
        ) : (
          <ArrowDown className="max-1440p:w-4 max-md:w-3" />
        )}
      </span>
    </div>
  );
};

export default BlogButton;
