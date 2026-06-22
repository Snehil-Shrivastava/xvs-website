import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface WorkCardType {
  id: number;
  heading: string;
  description: React.JSX.Element;
  image: StaticImageData;
  tags: string[];
  category: string[];
  keywords: string[];
  links: {
    linkTo: string;
    linkURL: string;
  }[];
}

const ShowcaseCard = ({
  card,
  index,
  btnTxt,
}: {
  card: WorkCardType;
  index: number;
  btnTxt?: string;
}) => {
  return (
    <div
      className={`flex max-xl:flex-col justify-between gap-25 max-sm:gap-10 sm:max-lg:gap-8 lg:max-xl:gap-10 xl:max-1440p:gap-15 font-poppins xl:max-1440p:h-96 1440p:max-2xl:h-111.25 2xl:max-1920p:h-130 1920p:max-2240p:h-152.5 2240p:h-162.5 ${index % 2 !== 0 ? "xl:flex-row-reverse" : ""}`}
    >
      <div
        className={`h-inherit max-sm:h-50 sm:max-lg:h-100 lg:max-xl:h-120 xl:max-1440p:min-h-90 xl:flex-[1.5] relative select-none`}
      >
        <Image
          src={card.image}
          alt={`${card.heading}`}
          fill
          className="object-cover content-clip-both"
        />
      </div>
      <div className="flex-1 flex flex-col max-sm:gap-6 sm:max-md:gap-8 md:max-lg:gap-8 lg:gap-6 xl:max-1440p:gap-3 1440p:max-2xl:gap-6 2xl:max-1920p:gap-8 1920p:max-2240p:gap-10 2240p:gap-10 1440p:h-full xl:max-1440p:h-inherit">
        <div className="flex flex-col xl:gap-1.5 2240p:gap-4">
          <h2 className="font-calSans text-brand-cream max-sm:text-lg sm:max-md:text-xl md:max-lg:text-2xl lg:max-xl:text-3xl xl:max-1440p:text-2xl 1440p:max-2xl:text-3xl 2xl:text-[2rem] 1920p:text-[2.5rem] 2240p:text-5xl">
            {card.heading}
          </h2>
          <div className="max-sm:text-[14px] sm:max-md:text-[14px] md:max-lg:text-[16px] lg:max-xl:text-[18px] xl:max-1440p:text-[15px] 1440p:max-2xl:text-sm 2xl:text-base 1920p:text-[22px] 2240p:text-2xl font-light text-brand-orange">
            {card.keywords.map((kaeyword, index, array) =>
              index < array.length - 1 ? kaeyword + ", " : kaeyword,
            )}
          </div>
        </div>
        {card.description}
        {card.links.length > 0 && !btnTxt && (
          <div className="flex gap-5 1920p:gap-10 mt-auto">
            {card.links.map((link, index) => (
              <Link
                key={index}
                href={link.linkURL}
                target="_blank"
                className={`font-extralight text-brand-orange cursor-pointer uppercase btn-clip select-none`}
              >
                <span
                  className="text-brand-orange tracking-wider font-medium bg-neutral-900/40 px-8 max-md:px-4 py-4 max-md:py-1.5 md:max-lg:py-2.5 backdrop-blur-xs flex gap-2 max-sm:gap-1 max-sm:text-[10px] sm:max-md:text-sm items-center"
                  style={{
                    background:
                      "radial-gradient(circle,rgba(247, 152, 57, 0.2) 0%, rgba(255, 173, 64, 0.15) 18%, rgba(100, 100, 100, 0.3) 100%)",
                    backdropFilter: "blur(5px)",
                  }}
                >
                  <span className="text-nowrap">{link.linkTo}</span>
                  <span className="text-nowrap">
                    <ArrowUpRight className="max-sm:w-4 sm:max-lg:w-5" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
        )}
        {btnTxt && (
          <div className="flex gap-5 1920p:gap-10 mt-auto">
            <Link
              key={index}
              href={`#`}
              target="_blank"
              className={`font-extralight text-brand-orange cursor-pointer uppercase btn-clip select-none`}
            >
              <span
                className="text-brand-orange tracking-wider font-medium bg-neutral-900/40 px-8 max-md:px-4 py-4 max-md:py-1.5 md:max-lg:py-2.5 backdrop-blur-xs flex gap-2 max-sm:gap-1 max-sm:text-[10px] sm:max-md:text-sm items-center"
                style={{
                  background:
                    "radial-gradient(circle,rgba(247, 152, 57, 0.2) 0%, rgba(255, 173, 64, 0.15) 18%, rgba(100, 100, 100, 0.3) 100%)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <span className="text-nowrap">{btnTxt}</span>
                <span className="text-nowrap">
                  <ArrowUpRight className="max-sm:w-4 sm:max-lg:w-5" />
                </span>
              </span>
            </Link>
          </div>
        )}
        <div className="max-sm:text-[12px] sm:max-md:text-[14px] md:max-lg:text-[14px] lg:max-xl:text-[16px] xl:max-1440p:text-sm 1440p:max-2xl:text-sm 2xl:text-base 1920p:text-lg 2240p:text-xl font-light text-brand-orange flex gap-4 mt-auto">
          {card.tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
