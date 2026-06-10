"use client";

import { HomeServicesData } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Swiper as SwiperType } from "swiper";
import { NavigationOptions } from "swiper/types";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./styles/ServicesCarousel.css";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import GlowCard from "./Glowcard";
import Image from "next/image";
import Link from "next/link";
import LottieAnimation from "./LottieAnimation";

const ServicesCarousel = () => {
  const servicesData = HomeServicesData;
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <Swiper
      effect="coverflow"
      grabCursor={false}
      centeredSlides={true}
      loop={true}
      // autoplay={{
      //   delay: 5000,
      // }}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 0,
        stretch: 80,
        depth: 600,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      // eslint-disable-next-line react-hooks/refs
      navigation={{
        // eslint-disable-next-line react-hooks/refs
        prevEl: prevRef.current,
        // eslint-disable-next-line react-hooks/refs
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
      className="servicesSwiper 2240p:w-4/5 1920p:max-2240p:w-[77%] 2xl:max-1920p:w-full"
    >
      {servicesData.map((services, index) => (
        <SwiperSlide
          key={index}
          className="relative services-slide select-none"
        >
          <GlowCard
            cardStyle="bg-[radial-gradient(circle_at_bottom_right,_rgba(255,166,76,0.8),_rgba(255,255,255,0.5))] backdrop-blur-xl flex flex-col justify-center glow-card-inner"
            className="backdrop-blur-xl h-full w-full glow-card-outer"
            contentStyle="flex flex-col items-center justify-between h-full bg-background/50"
            cardGlowIntensity="0.8"
            cardGlowRadius="1200px"
          >
            <div className="w-full h-90"></div>
            <Link
              href={`/services#${services.id}`}
              className="text-center flex flex-col gap-5 max-md:gap-1.5 md:max-lg:gap-2 px-12 max-md:px-4 md:max-lg:px-6 xl:max-2xl:px-8 py-15 max-md:py-8 md:max-lg:py-10 lg:max-xl:py-8 2240p:px-10"
            >
              {/* <h3 className="2240p:text-[68px]/[72px] max-sm:text-2xl sm:max-md:text-3xl md:max-lg:text-[34px]/[35px] lg:max-xl:text-4xl xl:max-1440p:text-5xl 1440p:text-[52px]/[56px] max-sm:leading-7 font-apercu-black font-bold"> */}
              <h3 className="max-sm:text-[1.5rem]/[2rem] sm:max-md:text-4xl md:max-lg:text-[2rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.6rem] xl:max-1440p:text-5xl 1440p:max-2xl:text-[52px]/[52px] 2xl:max-1920p:text-5xl 1920p:max-2240p:text-6xl 2240p:text-[68px]/[72px] max-sm:leading-7 font-apercu-black font-bold">
                {services.cardTitle}
              </h3>
              <span className="2240p:text-xl max-sm:text-[10px] sm:max-md:text-sm 1440p:text-lg font-light text-brand-cream font-apercu-regular">
                {services.cardDesc}
              </span>
            </Link>
          </GlowCard>
          <div className="absolute inset-0 pointer-events-none select-none services-gif-container will-change-transform transform-gpu backface-hidden max-md:hidden">
            <Image
              src={services.gifSrc}
              alt={services.gifAlt}
              width={600}
              height={350}
              unoptimized
              className={`relative services-gif ${services.gifClass}`}
            />
          </div>
          <div
            className={`${services.imgContainerClass} md:hidden services-gif-container`}
          >
            <LottieAnimation
              animation={services.animationData}
              className={`${services.animationDataClass} services-gif`}
            />
          </div>
        </SwiperSlide>
      ))}
      <div
        ref={prevRef}
        aria-label="Previous Slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-50 p-10 md:max-lg:px-5 bg-brand-dark h-4/5 flex items-center justify-center cursor-pointer max-md:hidden text-white/50"
      >
        <ChevronLeft size={32} className="md:max-lg:w-5" />
      </div>
      <div
        ref={nextRef}
        aria-label="Next Slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-50 p-10 md:px-5 bg-brand-dark h-4/5 flex items-center justify-center cursor-pointer max-md:hidden text-white/50"
      >
        <ChevronRight size={32} className="md:max-lg:w-5" />
      </div>
    </Swiper>
  );
};

export default ServicesCarousel;
