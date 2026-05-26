import LottieAnimation from "@/components/LottieAnimation";
import Branding from "@/public/lottie-animation/Branding.json";
import UI from "@/public/lottie-animation/UI-UX.json";
import Motion from "@/public/lottie-animation/Motion.json";
import website from "@/public/lottie-animation/Website.json";
import product3d from "@/public/lottie-animation/3D-product.json";

const AgencyServices = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-4/5 max-md:w-9/10 mx-auto relative font-calSans">
        <span className="text-brand-orange text-5xl max-sm:text-3xl capitalize absolute -top-8 max-sm:-top-5 z-99">
          what we deliver
        </span>
        <div className="absolute bg-neutral-500 inset-0 z-0 agency-client-container" />
        <div className="bg-background relative py-20 max-md:py-8 px-20 max-md:px-10 flex flex-col gap-15 max-md:gap-8 agency-client-content">
          <p className="font-light font-sans max-sm:text-xl text-3xl">
            We provide agency-ready creative execution across:
          </p>
          <div className="w-9/10 max-md:w-full mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-x-15 gap-y-25 max-md:gap-y-10 relative">
            <div className="flex gap-10 items-center">
              <LottieAnimation
                animation={Branding}
                className="w-40 max-md:w-30"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-2xl max-sm:text-lg">
                  <span>Branding</span>
                  <span>& Identity Systems</span>
                </div>
                <p className="font-sans font-extralight max-sm:text-sm">
                  Logos, visual identity, brand guidelines, campaign rollouts
                </p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <LottieAnimation animation={UI} className="w-40 max-md:w-30" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-2xl max-sm:text-lg">
                  <span>UI/UX &</span>
                  <span>Digital Design</span>
                </div>
                <p className="font-sans font-extralight max-sm:text-sm">
                  Website design, product interfaces, landing pages, prototypes
                </p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <LottieAnimation
                animation={Motion}
                className="w-40 max-md:w-26"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-2xl max-sm:text-lg">
                  <span>Motion Graphics</span>
                  <span>& Video Assets</span>
                </div>
                <p className="font-sans font-extralight max-sm:text-sm">
                  Ad creatives, explainers, logo animation, social content
                </p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <LottieAnimation
                animation={website}
                className="w-40 max-md:w-28"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-2xl max-sm:text-lg">
                  <span>Web Design</span>
                  <span>& Development</span>
                </div>
                <p className="font-sans font-extralight max-sm:text-sm">
                  Marketing websites, CMS builds, conversion-focused pages
                </p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <LottieAnimation
                animation={product3d}
                className="w-40 max-md:w-22"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-2xl max-sm:text-lg">
                  <span>3D Visuals &</span>
                  <span>Product Renders</span>
                </div>
                <p className="font-sans font-extralight max-sm:text-sm">
                  High-impact visuals for campaigns and launches
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyServices;
