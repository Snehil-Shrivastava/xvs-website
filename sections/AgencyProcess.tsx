import LottieAnimation from "@/components/LottieAnimation";
import SectionHeading from "@/components/SectionHeading";
import { Scaling } from "lucide-react";

import discoveryAnimatiion from "@/public/lottie-animation/discovery-animation.json";
import agileAnimatiion from "@/public/lottie-animation/agile-animation.json";
import deliveryAnimatiion from "@/public/lottie-animation/support-animation.json";

const AgencyProcess = () => {
  return (
    <div className="flex flex-col gap-25 max-md:gap-10 md:max-lg:gap-25 items-center justify-center h-full">
      <SectionHeading
        headingText="our process"
        buttonText="simple and scalable"
        buttonIcon={
          <Scaling className="max-sm:w-3 sm:max-md:w-4 md:max-lg:w-4" />
        }
        className="max-sm:text-[40px] sm:max-md:text-6xl md:max-lg:text-7xl lg:max-xl:text-8xl xl:max-2xl:text-[6.5rem]/[6rem]"
      />
      <div className="max-w-350 w-9/10 max-lg:w-9/10 sm:max-md:max-w-130 mx-auto relative font-calSans">
        <div className="absolute bg-neutral-500 inset-0 z-0 agency-client-container" />
        <div className="bg-background agency-client-content">
          <div className="w-4/5 mx-auto flex flex-col max-sm:gap-12 sm:max-md:gap-18 gap-15 max-md:py-10 py-15">
            <div className="flex max-md:flex-col items-center gap-10 max-sm:gap-2 sm:max-md:gap-3 md:max-lg:gap-6">
              <div className="aspect-square max-sm:w-25 sm:max-md:w-30 md:max-lg:h-25 h-40">
                <LottieAnimation
                  animation={discoveryAnimatiion}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col max-md:items-center">
                <span className="text-brand-orange max-sm:text-2xl sm:max-md:text-3xl text-4xl">
                  Discovery & Alignment
                </span>
                <span className="font-poppins font-light max-md:text-center text-2xl max-sm:text-base sm:max-md:text-lg md:max-lg:text-xl">
                  We understand your client&apos;s goals, brand voice, and
                  deliverables.
                </span>
              </div>
            </div>
            <div className="flex max-md:flex-col items-center gap-10 max-sm:gap-2 sm:max-md:gap-3 md:max-lg:gap-6">
              <div className="aspect-square max-sm:w-25 sm:max-md:w-30 md:max-lg:h-25 h-40">
                <LottieAnimation
                  animation={agileAnimatiion}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col max-md:items-center">
                <span className="text-brand-orange max-sm:text-2xl sm:max-md:text-3xl text-4xl">
                  Agile Execution
                </span>
                <span className="font-poppins font-light max-md:text-center text-2xl max-sm:text-base sm:max-md:text-lg md:max-lg:text-xl">
                  Transparent milestones and structured revisions.
                </span>
              </div>
            </div>
            <div className="flex max-md:flex-col items-center gap-10 max-sm:gap-2 sm:max-md:gap-3 md:max-lg:gap-6">
              <div className="aspect-square max-sm:w-25 sm:max-md:w-30 md:max-lg:h-25 h-40">
                <LottieAnimation
                  animation={deliveryAnimatiion}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col max-md:items-center">
                <span className="text-brand-orange max-sm:text-2xl sm:max-md:text-3xl text-4xl">
                  Delivery & Ongoing Support
                </span>
                <span className="font-poppins font-light max-md:text-center text-2xl max-sm:text-base sm:max-md:text-lg md:max-lg:text-xl">
                  Ready-to-deploy assets and optional retainer support.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyProcess;
