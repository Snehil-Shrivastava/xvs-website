"use client";

import { HomeServicesData } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Swiper as SwiperType } from "swiper";
import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

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
    // <Swiper
    //   modules={[
    //     Navigation,
    //     Pagination,
    //     Scrollbar,
    //     A11y,
    //     EffectCoverflow,
    //     Autoplay,
    //   ]}
    //   onSwiper={(swiper) => {
    //     swiperRef.current = swiper;
    //   }}
    //   slidesPerView="auto"
    //   coverflowEffect={{
    //     rotate: 0,
    //     stretch: 80,
    //     depth: 600,
    //     modifier: 1,
    //     slideShadows: false,
    //   }}
    //   loop
    //   centeredSlides
    //   navigation={{
    //     prevEl: prevRef.current,
    //     nextEl: nextRef.current,
    //   }}
    //   onBeforeInit={(swiper) => {
    //     if (typeof swiper.params.navigation !== "boolean") {
    //       const navigation = swiper.params.navigation as NavigationOptions;
    //       navigation.prevEl = prevRef.current;
    //       navigation.nextEl = nextRef.current;
    //     }
    //   }}
    //   className="relative"
    // >
    //   {servicesData.map((service, index) => (
    //     <SwiperSlide key={index}>{service.cardTitle}</SwiperSlide>
    //   ))}
    //   <div
    //     ref={prevRef}
    //     aria-label="Previous Slide"
    //     className="absolute left-0 top-1/2 -translate-y-1/2 z-5"
    //   >
    //     <ArrowLeft />
    //   </div>
    //   <div
    //     ref={nextRef}
    //     aria-label="Next Slide"
    //     className="absolute right-0 top-1/2 -translate-y-1/2 z-5"
    //   >
    //     <ArrowRight />
    //   </div>
    // </Swiper>
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
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
      {/* <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/abstract-1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/abstract-2.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/abstract-3.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/abstract-4.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/abstract-5.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/abstract-6.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/abstract-7.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/abstract-8.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/abstract-9.jpg" />
      </SwiperSlide> */}
      {servicesData.map((services, index) => (
        <SwiperSlide key={index}>
          <GlowCard
            cardStyle="bg-[radial-gradient(circle_at_bottom_right,_rgb(15,15,15,0.5),_rgba(70,70,70,0.5))] backdrop-blur-md flex flex-col justify-center"
            className="backdrop-blur-sm h-full w-full"
            contentStyle="flex flex-col items-center justify-between h-full"
          >
            <div></div>
            <div className="text-center flex flex-col gap-5">
              <h3 className="2240p:text-[68px]/[72px] font-calSans">
                {services.cardTitle}
              </h3>
              <span className="2240p:text-xl">{services.cardDesc}</span>
            </div>
          </GlowCard>
        </SwiperSlide>
      ))}
      <div
        ref={prevRef}
        aria-label="Previous Slide"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-5 p-10 bg-brand-dark h-4/5 flex items-center justify-center"
      >
        <ArrowLeft />
      </div>
      <div
        ref={nextRef}
        aria-label="Next Slide"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-5 p-10 bg-brand-dark h-4/5 flex items-center justify-center"
      >
        <ArrowRight />
      </div>
    </Swiper>
  );
};

export default ServicesCarousel;
