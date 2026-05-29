import Image from "next/image";
import xvslogo from "@/public/svg/xvs-logo-svg.svg";
import ClutchLogo from "@/components/ClutchLogo";
import { Star } from "lucide-react";

import Communication from "@/public/svg/Communication.svg";
import Responsiveness from "@/public/svg/Responsiveness.svg";
import Reliability from "@/public/svg/Reliability.svg";
import Delivery from "@/public/svg/Delivery.svg";

const AgencyUSP = () => {
  return (
    <div className="flex flex-col gap-30">
      <div className="flex flex-col gap-15 max-md:gap-8 md:max-lg:gap-12">
        <p className="text-center font-poppins capitalize text-4xl max-lg:text-2xl font-extralight tracking-wider">
          why agencies choose
        </p>
        <Image
          src={xvslogo}
          alt="xvs logo"
          className="mx-auto w-50 max-md:w-25 md:max-lg:w-35"
        />
      </div>
      <div>
        <div className="flex items-center justify-center h-full">
          <div className="max-w-350 w-4/5 max-lg:w-9/10 sm:max-md:max-w-130 mx-auto relative font-calSans">
            <span className="text-brand-orange font-calSans text-5xl max-sm:text-3xl sm:max-lg:text-4xl capitalize absolute -top-8 max-sm:-top-5 sm:max-md:-top-6 z-99">
              proven & trusted
            </span>
            <div className="absolute bg-neutral-500 inset-0 z-0 agency-client-container" />
            <div className="bg-background relative py-20 md:max-lg:py-15 flex flex-col gap-20 md:max-lg:gap-10 agency-client-content">
              <div className="flex max-md:flex-col max-md:gap-10 justify-around items-center relative">
                <div className="absolute w-3/10 max-md:w-7/10 md:max-lg:w-[35%] left-1/2 -translate-1/2 top-1/2 h-full max-md:h-[35%] md:border-x md:border-x-brand-orange/50 max-md:border-y max-md:border-y-brand-orange/50 pointer-events-none" />
                <div className="flex gap-10 md:max-lg:gap-8 items-center max-sm:w-50 sm:max-md:w-80 sm:max-md:justify-center">
                  <div className="relative">
                    <span className="text-brand-orange text-7xl max-sm:text-5xl sm:max-md:text-6xl md:max-lg:text-[2.5rem] font-apercu-black md:max-lg:relative md:max-lg:inset-x-0 md:max-lg:top-1.5">
                      4.8
                    </span>
                    <Star
                      className="absolute w-12 max-lg:w-5 -top-5 -right-10 max-lg:-right-5"
                      fill="#fff"
                      stroke="none"
                    />
                  </div>
                  <div>
                    <span className="text-xl max-sm:text-sm md:max-lg:text-[12px] font-medium">
                      Rated on
                    </span>
                    <ClutchLogo
                      width="112"
                      height="40"
                      className="max-sm:w-20 md:max-lg:w-18 md:max-lg:h-8"
                    />
                  </div>
                </div>
                <div className="flex gap-10 md:max-lg:gap-8 items-center max-sm:w-50 sm:max-md:w-80 sm:max-md:justify-center">
                  <div className="text-7xl max-sm:text-5xl sm:max-md:text-6xl md:max-lg:text-[2.5rem] font-apercu-black">
                    <span className="text-brand-orange">19</span>
                    <span>+</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl max-sm:text-sm md:max-lg:text-[12px] font-medium">
                      Verified
                    </span>
                    <span className="text-4xl max-sm:text-2xl md:max-lg:text-2xl font-medium max-md:font-sans">
                      Reviews
                    </span>
                  </div>
                </div>
                <div className="flex gap-10 md:max-lg:gap-8 items-center max-sm:w-50 sm:max-md:w-80 sm:max-md:justify-center">
                  <div className="relative">
                    <span className="text-brand-orange text-7xl max-sm:text-5xl sm:max-md:text-6xl md:max-lg:text-[2.5rem] font-apercu-black">
                      4.8
                    </span>
                    <Star
                      className="absolute w-12 max-lg:w-5 -top-5 -right-10 max-lg:-right-5"
                      fill="#fff"
                      stroke="none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl max-sm:text-sm md:max-lg:text-[12px] font-medium">
                      willingness to
                    </span>
                    <span className="text-4xl max-sm:text-2xl md:max-lg:text-2xl font-medium max-md:font-sans">
                      Refer
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-extralight font-poppins sm:max-md:text-lg md:max-lg:text-xl lg:max-2xl:text-2xl 2xl:max-1728p:text-[26px] 1728p:text-3xl w-9/10 mx-auto tracking-wider">
                  We provide agency-ready creative execution across:
                </p>
                <div className="w-7/10 md:max-lg:w-4/5 mx-auto grid grid-cols-2 gap-x-15 md:max-lg:gap-x-10 gap-y-25 md:max-lg:gap-y-15 relative pt-15 justify-center font-calSans">
                  <div className="flex max-md:flex-col gap-10 max-md:gap-5 items-center justify-start max-w-80">
                    <Image
                      src={Communication}
                      alt="communication"
                      className="w-15 max-sm:w-12.5 sm:max-md:w-15 md:max-lg:w-10"
                    />
                    <span className="text-[28px] max-sm:text-sm sm:max-lg:text-xl">
                      Commnication
                    </span>
                  </div>
                  <div className="flex max-md:flex-col gap-10 max-md:gap-5 items-center justify-start max-w-80">
                    <Image
                      src={Responsiveness}
                      alt="communication"
                      className="w-15 max-sm:w-12.5 sm:max-md:w-15 md:max-lg:w-10"
                    />
                    <span className="text-[28px] max-sm:text-sm sm:max-lg:text-xl">
                      Responsiveness
                    </span>
                  </div>
                  <div className="flex max-md:flex-col gap-10 max-md:gap-5 items-center justify-start max-w-80">
                    <Image
                      src={Reliability}
                      alt="communication"
                      className="w-15 max-sm:w-12.5 sm:max-md:w-15 md:max-lg:w-10"
                    />
                    <span className="text-[28px] max-sm:text-sm sm:max-lg:text-xl">
                      Reliability
                    </span>
                  </div>
                  <div className="flex max-md:flex-col gap-10 max-md:gap-5 items-center justify-start max-w-80">
                    <Image
                      src={Delivery}
                      alt="communication"
                      className="w-15 max-sm:w-12.5 sm:max-md:w-15 md:max-lg:w-10"
                    />
                    <span className="text-[28px] max-sm:text-sm sm:max-lg:text-xl">
                      Quality Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyUSP;
