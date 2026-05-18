"use client";

import { useRef, useState } from "react";
import ClutchLogo from "./ClutchLogo";
import Link from "next/link";
import { ClientTestimonialData } from "@/lib/data";
import SortlistLogo from "./SortlistLogo";
import { Star } from "lucide-react";

const ClientTestimonials = () => {
  const [isClutchHovered, setIsClutchHovered] = useState(false);
  const [isSortlistHovered, setIsSortlistHovered] = useState(false);
  const [tabSelected, setTabSelected] = useState("clutch");

  const clientTestimonialData = ClientTestimonialData;

  const filteredData =
    tabSelected === "clutch"
      ? clientTestimonialData.clutch
      : clientTestimonialData.sortlist;

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-10 py-10 relative">
      <div className="flex gap-10 justify-center sm:max-md:items-center items-stretch">
        <div
          className="relative border-b border-[#34343417] pb-2 cursor-pointer"
          onMouseEnter={() => setIsClutchHovered(true)}
          onMouseLeave={() => setIsClutchHovered(false)}
          onClick={() => setTabSelected("clutch")}
        >
          <ClutchLogo
            // className="max-sm:w-13 sm:max-md:w-8 md:max-lg:w-9.5 lg:max-xl:w-12 xl:max-1440p:w-15.5 1440p:max-2xl:w-15.5 max-sm:h-auto sm:max-md:h-[9px] md:max-lg:h-[11px] lg:max-xl:h-[15px] xl:max-1440p:h-[18px] 1440p:max-2xl:h-[18px] 2xl:h-[22px]"
            fill={`${
              isClutchHovered || tabSelected === "clutch" ? "#0F0D0A" : "white"
            }`}
          />
        </div>
        <div
          className="flex items-end relative border-b border-[#34343417] pb-2 cursor-pointer"
          onMouseEnter={() => setIsSortlistHovered(true)}
          onMouseLeave={() => setIsSortlistHovered(false)}
          onClick={() => setTabSelected("sortlist")}
        >
          <SortlistLogo
            // className="max-sm:w-13 sm:max-md:w-8 md:max-lg:w-[38px] lg:max-xl:w-12 xl:max-1440p:w-[62px] 1440p:max-2xl:w-[62px] max-sm:h-auto sm:max-md:h-[9px] md:max-lg:h-[9px] lg:max-xl:h-[13px] xl:max-1440p:h-4 1440p:max-2xl:h-4 2xl:h-[22px]"
            fill={`${
              isSortlistHovered || tabSelected === "sortlist"
                ? "#0F0D0A"
                : "white"
            }`}
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-15 w-4/5 mx-auto">
        <div
          ref={scrollContainerRef}
          className="scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex gap-12 justify-between w-auto">
            <>
              {filteredData.map((client, index) => (
                <Link
                  key={index}
                  href={client.reviewLink}
                  target="_blank"
                  className="flex flex-col text-black flex-1 gap-3"
                >
                  <div>
                    <h4 className="text-xl font-semibold">{client.name}</h4>
                    <p className="text-sm text-[#00000080] max-w-4/5">
                      {client.designation}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <h2 className="max-sm:text-[12px] sm:max-md:text-[1rem] md:max-lg:text-[1.2rem] lg:max-xl:text-[1.8rem] xl:max-1440p:text-[2rem] 1440p:max-2xl:text-[2rem] 2xl:text-[2.5rem] font-semibold">
                      {client.rating}
                    </h2>
                    <div className="flex max-sm:gap-1 sm:max-md:gap-1 md:max-lg:gap-1 lg:max-xl:gap-2 xl:max-1440p:gap-2 1440p:max-2xl:gap-2 2xl:gap-2 items-center">
                      {Array.from({ length: client.stars }).map((_, i) => (
                        <Star key={index} fill="#F79839" stroke="none" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm">{client.review}</p>
                </Link>
              ))}
            </>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            target="_blank"
            href={`${tabSelected === "clutch" ? "https://clutch.co/profile/xvs-creations?page=1#reviews" : "https://www.sortlist.com/agency/xvs-creations"}`}
            className="text-black hover:text-white hover:bg-black border border-black transition-colors ease-in-out px-6 py-1.5 text-xl cursor-pointer select-none"
          >
            View more reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
