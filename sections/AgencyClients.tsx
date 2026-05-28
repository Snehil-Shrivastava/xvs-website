import Image from "next/image";
import MarketingSVG from "@/public/svg/MarketingSVG.svg";
import SocialMediaSVG from "@/public/svg/SocialMediaSVG.svg";
import MediaSVG from "@/public/svg/MediaSVG.svg";
import GrowingSVG from "@/public/svg/GrowingSVG.svg";

const AgencyClients = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-4/5 max-md:w-9/10 sm:max-md:max-w-130 mx-auto relative font-calSans">
        <span className="text-brand-orange text-5xl max-sm:text-3xl sm:max-md:text-4xl capitalize absolute -top-8 max-sm:-top-5 sm:max-md:-top-6 z-99 font-calSans">
          who we support
        </span>
        <div className="absolute bg-neutral-500 inset-0 z-0 agency-client-container" />
        <div className="bg-background relative py-20 max-md:py-8 px-20 max-md:px-10 flex flex-col gap-15 max-md:gap-8 agency-client-content">
          <p className="font-light font-poppins max-sm:text-xl sm:max-md:text-2xl text-3xl">
            We work with:
          </p>
          <div className="w-4/5 max-md:w-9/10 mx-auto grid grid-cols-2 max-md:grid-cols-1 gap-x-65 gap-y-25 max-md:gap-y-10 relative font-calSans">
            <div className="flex gap-10 items-center">
              <Image
                src={MarketingSVG}
                alt="marketing"
                className="max-sm:w-8 sm:max-md:w-10"
              />
              <div className="flex flex-col text-2xl max-sm:text-lg sm:max-md:text-xl">
                <span>Marketing &</span>
                <span>Advertising Agencies</span>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <Image
                src={SocialMediaSVG}
                alt="social media"
                className="max-sm:w-8 sm:max-md:w-10"
              />
              <div className="flex flex-col text-2xl max-sm:text-lg sm:max-md:text-xl">
                <span>Social & Performance</span>
                <span>Marketing Firms</span>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <Image
                src={MediaSVG}
                alt="media"
                className="max-sm:w-8 sm:max-md:w-10"
              />
              <div className="flex flex-col text-2xl max-sm:text-lg sm:max-md:text-xl">
                <span>Media Production</span>
                <span>Houses</span>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <Image
                src={GrowingSVG}
                alt="start up"
                className="max-sm:w-8 sm:max-md:w-10"
              />
              <div className="flex flex-col text-2xl max-sm:text-lg sm:max-md:text-xl">
                <span>Fast-Growing</span>
                <span>Startups</span>
              </div>
            </div>
          </div>
          <hr className="w-full h-px border-brand-orange/50" />
          <p className="font-light font-sans max-md:text-sm md:max-lg:text-base lg:max-2xl:text-lg 2xl:max-1728p:text-xl 1728p:text-2xl text-center px-25 max-md:px-0 font-poppins">
            Whether you need overflow execution or a long-term creative
            extension, we integrate seamlessly into your workflow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgencyClients;
