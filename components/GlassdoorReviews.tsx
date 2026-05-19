// const GlassdoorReviews = () => {
//   return (
//     <div>
//       <div>Reviiews carousel</div>
//     </div>
//   );
// };

// export default GlassdoorReviews;

// ---------------- test

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import your data (adjust the path if needed based on your structure)
import { AboutGlassdoorReview } from "@/lib/data";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const GlassdoorReviews = () => {
  return (
    <div className="relative w-full min-w-0 overflow-hidden flex flex-col gap-6">
      <div className="flex justify-between items-center max-sm:text-[12px] select-none mb-4">
        <div className="cursor-pointer glassdoor-prev flex gap-2 items-center">
          <ChevronLeft stroke="#f79839" />
          <span className="text-white/60">Prev</span>
        </div>
        <div className="cursor-pointer glassdoor-next flex gap-2 items-center">
          <span className="text-white/60">Next</span>
          <ChevronRight stroke="#f79839" />
        </div>
      </div>
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        navigation={{
          nextEl: ".glassdoor-next",
          prevEl: ".glassdoor-prev",
        }}
        className="w-full"
      >
        {AboutGlassdoorReview.map((review, index) => (
          <SwiperSlide key={index} className="h-auto bg-white rounded-md py-6">
            <div className="text-black w-4/5 max-sm:w-[90%] mx-auto flex flex-col gap-4 max-sm:gap-1.5 justify-between h-full">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 max-sm:w-4 max-sm:h-4 rounded-full bg-transparent inline-block">
                    <Image src={review.icon} alt={review.name} />
                  </span>
                  <span className="text-[14px] max-sm:text-[10px]">
                    {review.name}
                  </span>
                </div>
                <div className="flex gap-3 max-sm:gap-1">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Star key={i} stroke="none" fill="#f79839" />
                  ))}
                </div>
              </div>
              <p className="font-semibold text-[16px] max-sm:text-[10px]">
                {review.review}
              </p>
              <span className="text-[10px] max-sm:text-[8px] text-black/40">
                {review.reviewDate}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GlassdoorReviews;
