import LottieAnimation from "@/components/LottieAnimation";
import projectAnimation from "@/public/lottie-animation/project-animation.json";
import retainerAnimation from "@/public/lottie-animation/monthly-retainer-animation.json";
import overflowAnimation from "@/public/lottie-animation/overflow-support-animation.json";

const AgencyEngagementModel = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-9/10 max-lg:w-9/10 sm:max-md:max-w-130 mx-auto relative font-calSans">
        <span className="text-brand-orange font-calSans text-5xl max-sm:text-3xl sm:max-lg:text-4xl capitalize absolute -top-8 max-sm:-top-5 sm:max-md:-top-6 z-99">
          engagement models
        </span>
        <div className="absolute bg-neutral-500 inset-0 z-0 agency-client-container" />
        <div className="bg-background relative py-20 max-lg:py-15 lg:max-xl:py-0 flex flex-col gap-20 max-md:gap-8 agency-client-content">
          <div className="w-4/5 md:max-lg:w-9/10 mx-auto flex max-md:flex-col max-sm:gap-15 sm:max-md:gap-18 md:max-lg:gap-8 lg:max-xl:gap-10 gap-15 max-md:py-10 md:max-lg:py-0 py-15">
            <div className="flex flex-col items-center max-md:gap-6 gap-10">
              <LottieAnimation
                animation={projectAnimation}
                className="w-40 max-md:w-30"
              />
              <div className="flex flex-col max-md:items-center md:gap-1.5">
                <span className="text-brand-orange max-sm:text-2xl sm:max-md:text-3xl md:max-lg:text-xl lg:max-xl:text-2xl text-4xl text-center">
                  Project-Based
                </span>
                <span className="font-poppins font-light text-center text-2xl max-sm:text-base sm:max-md:text-lg md:max-xl:text-sm">
                  Perfect for campaign bursts and defined scopes.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center max-md:gap-6 gap-10">
              <LottieAnimation
                animation={retainerAnimation}
                className="w-40 max-md:w-30"
              />
              <div className="flex flex-col max-md:items-center md:gap-1.5">
                <span className="text-brand-orange max-sm:text-2xl sm:max-md:text-3xl md:max-lg:text-xl lg:max-xl:text-2xl text-4xl text-center">
                  Monthly Retainer
                </span>
                <span className="font-poppins font-light text-center text-2xl max-sm:text-base sm:max-md:text-lg md:max-xl:text-sm">
                  Ideal for ongoing creative execution and predictable support.
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center max-md:gap-6 gap-10">
              <LottieAnimation
                animation={overflowAnimation}
                className="w-40 max-md:w-30"
              />
              <div className="flex flex-col max-md:items-center md:gap-1.5">
                <span className="text-brand-orange max-sm:text-2xl sm:max-md:text-3xl md:max-lg:text-xl lg:max-xl:text-2xl text-4xl text-center">
                  Overflow Support
                </span>
                <span className="font-poppins font-light text-center text-2xl max-sm:text-base sm:max-md:text-lg md:max-xl:text-sm">
                  When your team needs backup during peak demand.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyEngagementModel;
