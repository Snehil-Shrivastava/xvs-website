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
              className="text-black flex flex-col gap-8 max-md:gap-4 w-7/10 max-sm:w-4/5 mx-auto pb-15 max-sm:pb-8 select-none"
            >
              <p className="font-semibold w-full text-3xl max-sm:text-[12px] sm:max-md:text-base text-center">
                {`"${testimonial.quote}"`}
              </p>

              <p
                key={index}
                className="text-lg max-sm:text-[8px] sm:max-md:text-[12px] w-full mx-auto text-center"
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
