"use client";

import { HomeServicesData } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Swiper as SwiperType } from "swiper";
import { NavigationOptions } from "swiper/types";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./styles/ServicesCarousel.css";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import GlowCard from "./Glowcard";
import Image from "next/image";

const ServicesCarousel = () => {
  const servicesData = HomeServicesData;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={false}
      centeredSlides={true}
      loop={true}
      slidesPerView={3}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 600,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination, Navigation]}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onBeforeInit={(swiper) => {
        if (typeof swiper.params.navigation !== "boolean") {
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;
        }
      }}
      className="servicesSwiper h-full"
    >
      {servicesData.map((services, index) => (
        <SwiperSlide key={index} className="relative services-slide">
          <GlowCard
            cardStyle="bg-[radial-gradient(circle_at_bottom_right,_rgb(15,15,15,0.5),_rgba(70,70,70,0.5))] backdrop-blur-md flex flex-col justify-center"
            className="backdrop-blur-sm h-full w-full"
            contentStyle="flex flex-col items-center justify-between h-full"
          >
            <div className="w-full h-90"></div>
            <div className="text-center flex flex-col gap-5 px-12 py-15">
              <h3 className="2240p:text-[68px]/[72px] font-calSans">
                {services.cardTitle}
              </h3>
              <span className="2240p:text-xl">{services.cardDesc}</span>
            </div>
          </GlowCard>
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src={services.gifSrc}
              alt={services.gifAlt}
              width={600}
              height={350}
              className={`relative ${services.gifClass}`}
            />
          </div>
        </SwiperSlide>
      ))}
      <div
        ref={prevRef}
        aria-label="Previous Slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-5 p-10 bg-brand-dark h-4/5 flex items-center justify-center cursor-pointer"
      >
        <ArrowLeft size={32} />
      </div>
      <div
        ref={nextRef}
        aria-label="Next Slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-5 p-10 bg-brand-dark h-4/5 flex items-center justify-center cursor-pointer"
      >
        <ArrowRight size={32} />
      </div>
    </Swiper>
  );
};

export default ServicesCarousel;
