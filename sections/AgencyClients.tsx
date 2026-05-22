import Image from "next/image";
import MarketingSVG from "@/public/svg/MarketingSVG.svg";
import SocialMediaSVG from "@/public/svg/SocialMediaSVG.svg";
import MediaSVG from "@/public/svg/MediaSVG.svg";
import GrowingSVG from "@/public/svg/GrowingSVG.svg";

const AgencyClients = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-4/5 mx-auto relative font-calSans">
        <span className="text-brand-orange text-5xl capitalize absolute -top-8 z-99">
          who we support
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
            clipPath: `Polygon(0 0, 0 30%, 1px 50%, 1px 92%, 3% calc(100% - 1px), 30% 100%, 50% 100%, 60% calc(100% - 1px), calc(100% - 1px) calc(100% - 1px), calc(100% - 1px) 8%, 97% 1px, 40% 0)`,
          }}
        >
          <p className="font-light font-sans sm:max-md:text-lg md:max-lg:text-xl lg:max-2xl:text-2xl 2xl:max-1728p:text-[26px] 1728p:text-3xl">
            We work with:
          </p>
          <div className="w-4/5 mx-auto grid grid-cols-2 gap-x-65 gap-y-25 relative">
            <div className="flex gap-10 items-center">
              <Image src={MarketingSVG} alt="marketing" />
              <div className="flex flex-col text-2xl">
                <span>Marketing &</span>
                <span>Advertising Agencies</span>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <Image src={SocialMediaSVG} alt="marketing" />
              <div className="flex flex-col text-2xl">
                <span>Social & Performance</span>
                <span>Marketing Firms</span>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <Image src={MediaSVG} alt="marketing" />
              <div className="flex flex-col text-2xl">
                <span>Media Production</span>
                <span>Houses</span>
              </div>
            </div>
            <div className="flex gap-10 items-center">
              <Image src={GrowingSVG} alt="marketing" />
              <div className="flex flex-col text-2xl">
                <span>Fast-Growing</span>
                <span>Startups</span>
              </div>
            </div>
          </div>
          <hr className="w-full h-px border-brand-orange/50" />
          <p className="font-light font-sans max-md:text-sm md:max-lg:text-base lg:max-2xl:text-lg 2xl:max-1728p:text-xl 1728p:text-2xl text-center px-25">
            Whether you need overflow execution or a long-term creative
            extension, we integrate seamlessly into your workflow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgencyClients;
