import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

import "@/app/styles.css";

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
}: {
  card: WorkCardType;
  index: number;
}) => {
  return (
    <div
      className={`flex justify-between gap-25 ${index % 2 !== 0 ? "xl:flex-row-reverse" : ""}`}
    >
      <div className={`h-inherit flex-[1.5] relative`}>
        <Image
          src={card.image}
          alt={`${card.heading}`}
          fill
          className="object-cover content-clip-both"
        />
      </div>
      <div className="flex-1 flex flex-col max-sm:gap-6 sm:max-md:gap-3 md:max-lg:gap-4 lg:gap-6 xl:max-1440p:gap-3 1440p:max-2xl:gap-6 2xl:max-1920p:gap-8 1920p:max-2240p:gap-10 2240p:gap-10 h-full">
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
        <div className="flex gap-5 1920p:gap-10 mt-auto">
          {card.links.map((link, index) => (
            <Link
              key={index}
              href={link.linkURL}
              target="_blank"
              className={`font-extralight text-brand-orange cursor-pointer uppercase btn-clip`}
            >
              <span
                className="text-brand-orange tracking-wider font-medium bg-neutral-900/40 px-8 py-4 backdrop-blur-xs flex gap-2"
                style={{
                  background:
                    "radial-gradient(circle,rgba(247, 152, 57, 0.2) 0%, rgba(255, 173, 64, 0.15) 18%, rgba(100, 100, 100, 0.3) 100%)",
                  backdropFilter: "blur(5px)",
                }}
              >
                <span className="text-nowrap">{link.linkTo}</span>
                <span className="text-nowrap">
                  <ArrowUpRight />
                </span>
              </span>
            </Link>
          ))}
        </div>
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
