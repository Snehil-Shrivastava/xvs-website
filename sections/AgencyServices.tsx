import LottieAnimation from "@/components/LottieAnimation";
import Branding from "@/public/lottie-animation/Branding.json";
import UI from "@/public/lottie-animation/UI-UX.json";
import Motion from "@/public/lottie-animation/Motion.json";
import website from "@/public/lottie-animation/Website.json";
import product3d from "@/public/lottie-animation/3D-product.json";

const AgencyServices = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-4/5 mx-auto relative font-calSans">
        <span className="text-brand-orange text-5xl capitalize absolute -top-8 z-99">
          what we deliver
        </span>
        <div
          className="absolute bg-neutral-500 inset-0 z-0"
          style={{
            clipPath: `Polygon(0 0, 0 92%, 3% 100%, 100% 100%, 100% 8%, 97% 0)`,
          }}
        />
        <div
          className="bg-background relative py-20 px-20 flex flex-col gap-15"
          style={{
            clipPath: `Polygon(0 0, 0 30%, 1px 50%, 1px 92%, 3% calc(100% - 1px), 70% 100%, 100% 100%, 100% 60%, calc(100% - 1px) 30%, calc(100% - 1px) 20%, calc(100% - 1px) 8%, 97% 1px, 40% 0)`,
          }}
        >
          <p className="font-light font-sans sm:max-md:text-lg md:max-lg:text-xl lg:max-2xl:text-2xl 2xl:max-1728p:text-[26px] 1728p:text-3xl">
            We provide agency-ready creative execution across:
          </p>
          <div className="w-9/10 mx-auto grid grid-cols-2 gap-x-15 gap-y-25 relative">
            <div className="flex gap-10 items-center">
              <LottieAnimation animation={Branding} className="w-40" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-2xl">
                  <span>Branding</span>
                  <span>& Identity Systems</span>
                </div>
                <p className="font-sans font-extralight">
                  Logos, visual identity, brand guidelines, campaign rollouts
                </p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <LottieAnimation animation={UI} className="w-40" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-2xl">
                  <span>UI/UX &</span>
                  <span>Digital Design</span>
                </div>
                <p className="font-sans font-extralight">
                  Website design, product interfaces, landing pages, prototypes
                </p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <LottieAnimation animation={Motion} className="w-40" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-2xl">
                  <span>Motion Graphics</span>
                  <span>& Video Assets</span>
                </div>
                <p className="font-sans font-extralight">
                  Ad creatives, explainers, logo animation, social content
                </p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <LottieAnimation animation={website} className="w-40" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-2xl">
                  <span>Web Design</span>
                  <span>& Development</span>
                </div>
                <p className="font-sans font-extralight">
                  Marketing websites, CMS builds, conversion-focused pages
                </p>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <LottieAnimation animation={product3d} className="w-40" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col text-2xl">
                  <span>3D Visuals &</span>
                  <span>Product Renders</span>
                </div>
                <p className="font-sans font-extralight">
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
