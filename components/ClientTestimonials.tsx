"use client";

import { useRef, useState } from "react";
import ClutchLogo from "./ClutchLogo";
import Link from "next/link";
import { ClientTestimonialData } from "@/lib/data";
import SortlistLogo from "./SortlistLogo";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ClientTestimonials = () => {
  const [isClutchHovered, setIsClutchHovered] = useState(false);
  const [isSortlistHovered, setIsSortlistHovered] = useState(false);
  const [tabSelected, setTabSelected] = useState("clutch");

  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  const clientTestimonialData = ClientTestimonialData;

  const filteredData =
    tabSelected === "clutch"
      ? clientTestimonialData.clutch
      : clientTestimonialData.sortlist;

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col gap-10 py-10 relative font-poppins">
      <div className="flex gap-10 justify-center sm:max-md:items-center items-stretch">
        <div
          className="relative border-b border-[#34343417] pb-2 cursor-pointer"
          onMouseEnter={() => setIsClutchHovered(true)}
          onMouseLeave={() => setIsClutchHovered(false)}
          onClick={() => setTabSelected("clutch")}
        >
          <ClutchLogo
            fill={`${
              isClutchHovered || tabSelected === "clutch" ? "#0F0D0A" : "white"
            }`}
            className="max-sm:w-13 sm:max-md:w-16 md:max-lg:w-13"
          />
        </div>
        <div
          className="flex items-end relative border-b border-[#34343417] pb-2 cursor-pointer"
          onMouseEnter={() => setIsSortlistHovered(true)}
          onMouseLeave={() => setIsSortlistHovered(false)}
          onClick={() => setTabSelected("sortlist")}
        >
          <SortlistLogo
            fill={`${
              isSortlistHovered || tabSelected === "sortlist"
                ? "#0F0D0A"
                : "white"
            }`}
            className="max-sm:w-14 sm:max-md:w-18 md:max-lg:w-15"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-15 max-sm:w-4/5 w-9/10 mx-auto">
        <div
          ref={scrollContainerRef}
          className="scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden w-full"
        >
          <div className="flex gap-12 justify-between w-auto max-sm:w-full">
            <>
              <Swiper
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                }}
                loop={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                  delay: 4000,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="client-testimonial-swiper w-full"
              >
                {filteredData.map((client, index) => (
                  <SwiperSlide key={index} className="h-full">
                    <Link
                      href={client.reviewLink}
                      target="_blank"
                      className="flex flex-col text-black flex-1 gap-3 h-full"
                    >
                      <div>
                        <h4 className="text-xl max-sm:text-sm sm:max-md:text-lg md:max-lg:text-[12px] font-semibold">
                          {client.name}
                        </h4>
                        <p className="text-sm max-sm:text-[12px] sm:max-md:text-sm md:max-lg:text-[8px] text-[#00000080] max-w-4/5">
                          {client.designation}
                        </p>
                      </div>
                      <div className="flex gap-4 items-center">
                        <h2 className="max-sm:text-lg sm:max-md:text-2xl md:max-lg:text-[1.2rem] lg:max-xl:text-[1.8rem] xl:max-1440p:text-[2rem] 1440p:max-2xl:text-[2rem] 2xl:text-[2.5rem] font-semibold">
                          {client.rating}
                        </h2>
                        <div className="flex max-sm:gap-1 sm:max-md:gap-1 md:max-lg:gap-1 lg:max-xl:gap-2 xl:max-1440p:gap-2 1440p:max-2xl:gap-2 2xl:gap-2 items-center">
                          {Array.from({ length: client.stars }).map((_, i) => (
                            <Star
                              key={i}
                              fill="#F79839"
                              stroke="none"
                              className="max-sm:w-3 sm:max-md:w-5 md:max-lg:w-3"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm md:max-lg:text-[10px]">
                        {client.review}
                      </p>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                ref={nextRef}
                className="text-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 sm:hidden"
              >
                <ChevronRight />
              </div>

              <div
                ref={prevRef}
                className="text-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer absolute top-1/2 -translate-y-1/2 left-0 sm:hidden"
              >
                <ChevronLeft />
              </div>
            </>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link
            target="_blank"
            href={`${tabSelected === "clutch" ? "https://clutch.co/profile/xvs-creations?page=1#reviews" : "https://www.sortlist.com/agency/xvs-creations"}`}
            className="text-black hover:text-white hover:bg-brand-orange border border-black hover:border-brand-orange transition-colors ease-in-out px-6 py-1.5 text-xl max-sm:text-sm sm:max-md:text-lg md:max-lg:text-base cursor-pointer select-none"
          >
            View more reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
