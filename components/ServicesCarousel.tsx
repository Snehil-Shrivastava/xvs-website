"use client";

import { HomeServicesData } from "@/lib/data";
import { Swiper, SwiperSlide } from "swiper/react";
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

const ServicesCarousel = () => {
  const servicesData = HomeServicesData;

  return (
    <Swiper
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectCoverflow,
        Autoplay,
      ]}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 0,
        stretch: 80,
        depth: 600,
        modifier: 1,
        slideShadows: false,
      }}
      loop
      centeredSlides
    >
      {servicesData.map((service, index) => (
        <SwiperSlide key={index}>{service.cardTitle}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesCarousel;
