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
      <div className="flex flex-col gap-15">
        <p className="text-center capitalize text-4xl font-extralight font-sans tracking-wider">
          why agencies choose
        </p>
        <Image src={xvslogo} alt="xvs logo" className="mx-auto w-50" />
      </div>
      <div>
        <div className="flex items-center justify-center h-full">
          <div className="max-w-350 w-4/5 mx-auto relative font-calSans">
            <span className="text-brand-orange text-5xl capitalize absolute -top-8 z-99">
              proven & trusted
            </span>
            <div
              className="absolute bg-neutral-500 inset-0 z-0"
              style={{
                clipPath: `Polygon(0 0, 0 92%, 3% 100%, 100% 100%, 100% 8%, 97% 0)`,
              }}
            />
            <div
              className="bg-background relative py-20 flex flex-col gap-20"
              style={{
                clipPath: `Polygon(0 0, 0 30%, 1px 50%, 1px 92%, 3% calc(100% - 1px), 30% 100%, 50% 100%, 60% calc(100% - 1px), calc(100% - 1px) calc(100% - 1px), calc(100% - 1px) 8%, 97% 1px, 40% 0)`,
              }}
            >
              <div className="flex justify-around items-center relative">
                <div className="absolute w-3/10 left-1/2 -translate-1/2 top-1/2 h-full border-x border-x-brand-orange/50 pointer-events-none" />
                <div className="flex gap-10 items-center">
                  <div className="relative">
                    <span className="text-brand-orange text-7xl">4.8</span>
                    <Star
                      className="absolute w-12 -top-5 -right-10"
                      fill="#fff"
                      stroke="none"
                    />
                  </div>
                  <div>
                    <span className="text-xl font-medium">Rated on</span>
                    <ClutchLogo width="112" height="40" />
                  </div>
                </div>
                <div className="flex gap-10 items-center">
                  <div className="text-7xl">
                    <span className="text-brand-orange">19</span>
                    <span>+</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-medium">Verified</span>
                    <span className="text-4xl font-medium">Reviews</span>
                  </div>
                </div>
                <div className="flex gap-10 items-center">
                  <div className="relative">
                    <span className="text-brand-orange text-7xl">4.8</span>
                    <Star
                      className="absolute w-12 -top-5 -right-10"
                      fill="#fff"
                      stroke="none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-medium">willingness to</span>
                    <span className="text-4xl font-medium">Refer</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-extralight font-sans sm:max-md:text-lg md:max-lg:text-xl lg:max-2xl:text-2xl 2xl:max-1728p:text-[26px] 1728p:text-3xl w-9/10 mx-auto tracking-wider">
                  We provide agency-ready creative execution across:
                </p>
                <div className="w-7/10 mx-auto grid grid-cols-2 gap-x-15 gap-y-25 relative pt-15 justify-center">
                  <div className="flex gap-10 items-center justify-start max-w-80">
                    <Image
                      src={Communication}
                      alt="communication"
                      className="w-15"
                    />
                    <span className="text-[28px]">Commnication</span>
                  </div>
                  <div className="flex gap-10 items-center justify-start max-w-80">
                    <Image
                      src={Responsiveness}
                      alt="communication"
                      className="w-15"
                    />
                    <span className="text-[28px]">Responsiveness</span>
                  </div>
                  <div className="flex gap-10 items-center justify-start max-w-80">
                    <Image
                      src={Reliability}
                      alt="communication"
                      className="w-15"
                    />
                    <span className="text-[28px]">Reliability</span>
                  </div>
                  <div className="flex gap-10 items-center justify-start max-w-80">
                    <Image
                      src={Delivery}
                      alt="communication"
                      className="w-15"
                    />
                    <span className="text-[28px]">Quality Delivery</span>
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
