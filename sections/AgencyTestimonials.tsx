import ClutchLogo from "@/components/ClutchLogo";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import lambda from "@/public/svg/lambda.svg";

const AgencyTestimonials = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-4/5 max-lg:w-9/10 sm:max-md:max-w-130 mx-auto relative font-calSans">
        <span className="text-brand-orange font-calSans text-5xl max-sm:text-3xl sm:max-lg:text-4xl capitalize absolute -top-8 max-sm:-top-5 sm:max-md:-top-6 z-99">
          what our clients say
        </span>
        <div className="absolute bg-neutral-500 inset-0 z-0 agency-client-container" />
        <div className="bg-background relative py-20 max-lg:py-15 flex flex-col gap-20 max-md:gap-8 md:max-lg:gap-10 agency-client-content">
          <div className="font-poppins flex flex-col gap-15 max-md:gap-10 md:max-lg:text-xl lg:max-xl:text-2xl xl:max-2xl:text-3xl 2xl:max-1728p:text-4xl 1728p:text-[40px] text-center max-lg:px-10 px-15 font-light">
            <q>
              <b className="font-bold">xVS Creations</b> felt like an extension
              of our in-house team. Their communication and turnaround were
              exceptional.
            </q>
            <q>
              Consistent quality and strong responsiveness across high-volume
              projects.
            </q>
          </div>
          <hr className="w-4/5 mx-auto h-px border-brand-orange/50" />
          <div className="flex max-md:flex-col max-md:items-center max-sm:gap-10 sm:max-md:gap-15 justify-between md:w-4/5 md:mx-auto">
            <div className="flex flex-col max-md:gap-4 gap-10 items-center max-sm:w-50 sm:max-md:w-80 sm:max-md:justify-center">
              <div className="flex max-md:flex-col max-md:gap-4 gap-10 items-center">
                <div className="relative">
                  <span className="text-brand-orange font-apercu-black text-7xl max-sm:text-5xl sm:max-md:text-6xl md:max-lg:text-5xl">
                    4.8
                  </span>
                  <Star
                    className="absolute w-12 max-md:w-4 max-md:-top-2 -top-5 -right-10 max-md:-right-5"
                    fill="#fff"
                    stroke="none"
                  />
                </div>
                <div className="max-md:text-center">
                  <span className="text-xl max-sm:text-sm font-medium">
                    Rated on
                  </span>
                  <ClutchLogo
                    width="112"
                    height="40"
                    className="max-sm:w-20 md:max-lg:w-22"
                  />
                </div>
              </div>
              <Link
                href="/about/#client-testimonial"
                className="text-brand-orange underline font-poppins font-light max-lg:text-base text-2xl"
              >
                See more reviews
              </Link>
            </div>
            <div className="flex flex-col max-md:gap-4 gap-10 items-center max-sm:w-50 sm:max-md:w-80 sm:max-md:justify-center">
              <div className="flex max-md:flex-col max-md:gap-4 gap-10 items-center">
                <div className="text-7xl max-sm:text-5xl sm:max-md:text-6xl md:max-lg:text-5xl font-apercu-black">
                  <span className="text-brand-orange">19</span>
                  <span>+</span>
                </div>
                <div className="flex flex-col max-md:text-center">
                  <span className="text-xl max-sm:text-sm font-medium">
                    Verified
                  </span>
                  <span className="text-4xl max-sm:text-2xl md:max-lg:text-3xl font-medium max-md:font-calSans">
                    Reviews
                  </span>
                </div>
              </div>
              <Link
                href={"/work"}
                className="bg-brand-orange px-4 1728p:px-8 font-medium max-sm:text-sm 2xl:max-1728p:text-xl 1728p:text-2xl btn-clip max-md:py-2 py-2 1728p:py-2 button-clip flex max-sm:items-start items-center gap-2"
              >
                <Image
                  src={lambda}
                  alt="lambda"
                  className="max-sm:w-4 max-sm:h-4 sm:max-lg:w-5 lg:max-xl:w-5 xl:max-2xl:w-5 2xl:max-1728p:w-5 1728p:w-5"
                />
                <span>Check our work</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyTestimonials;
