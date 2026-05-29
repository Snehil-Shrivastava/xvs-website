import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import { HomeTestimonial } from "@/lib/data";
import Link from "next/link";
import React from "react";

const TestimonialCarousel = () => {
  const testimonialData = HomeTestimonial;
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop
      className="testimonialSwiper"
    >
      {testimonialData.map((testimonial, index) => {
        const parts = testimonial.clientDesc.split(", ");
        return (
          <SwiperSlide key={index}>
            <Link
              href={"#"}
              target="_blank"
              className="text-black flex flex-col gap-8 max-md:gap-4 md:max-lg:gap-6 w-7/10 max-sm:w-4/5 md:max-lg:w-4/5 lg:max-xl:w-[85%] mx-auto pb-15 max-sm:pb-8 md:max-lg:pb-10 select-none font-poppins "
            >
              <q className="font-semibold w-full text-3xl max-sm:text-[12px] sm:max-md:text-base md:max-lg:text-lg lg:max-xl:text-xl text-center">
                {testimonial.quote}
              </q>

              <p
                key={index}
                className="text-lg max-sm:text-[8px] sm:max-lg:text-[12px] lg:max-xl:text-sm w-full mx-auto text-center"
              >
                {parts.map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialCarousel;
