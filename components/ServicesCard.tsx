import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { JSX } from "react";

import "./styles/ServicesCard.css";

interface Services {
  id: number;
  title: string;
  subtitle: string;
  description: JSX.Element;
  image: string;
}

const ServicesCard = ({ services }: { services: Services }) => {
  return (
    <div className="relative 2xl:w-[85%] w-full mx-auto md:pointer-events-none">
      <div className="pin-wrapper">
        <h2 className="font-calSans max-xs:text-[7vw] xs:max-sm:text-[2rem] sm:max-md:text-[2.5rem] md:max-lg:text-[3.5rem] lg:max-xl:text-[4rem] xl:max-1440p:text-[5rem] 1440p:max-2xl:text-[6rem] 2xl:text-[5.5rem] text-brand-orange absolute max-sm:-top-10 sm:max-md:top-[-2.6rem] md:max-lg:-top-15 lg:max-xl:-top-16 xl:max-1440p:-top-21 1440p:max-2xl:-top-25 2xl:-top-23 max-sm:left-1/2 max-sm:translate-x-[-50%] sm:right-0 -z-10 max-sm:w-full text-center">
          {services.title}
        </h2>
        <div
          className="border-top-left bg-[#777474b7] w-[35%] h-3/5 absolute -top-0.5 -left-0.5 -z-15"
          aria-hidden="true"
        />
        <div
          className="border-bottom-right bg-[#f798395d] w-2/5 h-3/5 absolute -bottom-px -right-px content-clip-br"
          aria-hidden="true"
        />
        <div
          //   className={`bg-[rgba(67,67,67,0.36)] backdrop-blur-sm relative card-clip max-sm:h-[60vh] max-sm:min-h-[635px] flex max-sm:flex-col ${getCardHeightClass}`}
          className={`bg-[rgba(67,67,67,0.36)] backdrop-blur-sm relative card-clip max-sm:h-[60vh] max-sm:min-h-158.75 flex max-sm:flex-col`}
        >
          <div className="flex-1" aria-hidden="true" />
          <div className="flex-1">
            <p className="max-sm:text-[15px]/[25px] sm:max-md:text-[0.75rem] md:max-lg:text-[0.85rem]/[1.5rem] lg:max-xl:text-[1rem]/[1.8rem] xl:max-1440p:text-[1.25rem]/[2rem] 1440p:max-2xl:text-[1.25rem]/[2rem] 2xl:text-[1.3rem]/[2rem] 1920p:text-[1.5rem]/[2.3rem] 2240p:text-[1.8rem]/[2.8rem] font-thin max-sm:h-full w-full max-sm:mt-auto sm:ml-auto max-sm:py-8 sm:max-md:py-15 md:max-lg:py-15 lg:max-xl:py-20 xl:max-1440p:py-25 1440p:max-2xl:py-25 2xl:py-30 max-sm:px-8 sm:max-md:pr-10 md:max-lg:pr-12 lg:max-xl:pr-15 xl:max-1440p:pr-20 1440p:max-2xl:pr-20 2xl:pr-25 max-sm:flex max-sm:items-center">
              {services.description}
            </p>
          </div>
        </div>
        <p className="font-apercu-bold max-sm:text-[0.7rem] sm:max-md:text-[6px] md:max-lg:text-[6px] lg:max-xl:text-[0.65rem] xl:max-1440p:text-[0.75rem] 1440p:max-2xl:text-[0.75rem] 2xl:text-[0.875rem] 2240p:tetx-[1.6rem] absolute origin-bottom-left bottom-0 rotate-270 text-brand-cream max-sm:tracking-[10px] sm:max-md:tracking-[6px] md:max-lg:tracking-[6px] 2xl:tracking-[10px] tracking-[8px] uppercase max-xs:w-[200%]">
          {services.subtitle}
        </p>
        {/* {card.image} */}
        <Link
          href={{
            pathname: "/work",
            query: { category: services.subtitle },
          }}
          className="absolute bottom-0 right-0 md:pointer-events-auto"
          aria-label={`View ${services.subtitle} projects`}
          prefetch={false}
        >
          <ArrowUpRight stroke="#f79839" className="scale-300 origin-center" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
