import Image from "next/image";
import slack from "@/public/svg/slack.svg";
import figma from "@/public/svg/figma.svg";
import notion from "@/public/svg/notion.svg";
import zoom from "@/public/svg/zoom.svg";
import clickup from "@/public/svg/clickup.svg";
import asana from "@/public/svg/asana.svg";
import monday from "@/public/svg/monday.svg";
import teams from "@/public/svg/teams.svg";

const AgencyIntegration = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-9/10 max-lg:w-9/10 sm:max-md:max-w-130 mx-auto relative font-calSans">
        <span className="text-brand-orange font-calSans text-5xl max-sm:text-3xl sm:max-lg:text-4xl capitalize absolute -top-8 max-sm:-top-5 sm:max-md:-top-6 z-99">
          white-label friendly
        </span>
        <div className="absolute bg-neutral-500 inset-0 z-0 agency-client-container" />
        <div className="bg-background relative py-20 max-md:py-15 md:max-xl:py-15 flex flex-col gap-20 max-md:gap-8 md:max-xl:gap-10 agency-client-content">
          <div>
            <p className="font-extralight font-poppins sm:max-md:text-lg md:max-lg:text-xl lg:max-2xl:text-2xl 2xl:max-1728p:text-[26px] 1728p:text-3xl w-9/10 mx-auto tracking-wider">
              We integrate with:
            </p>
            <div className="w-9/10 mx-auto flex gap-10 max-lg:grid max-md:grid-cols-3 md:max-lg:grid-cols-4 max-md:gap-x-8 max-md:gap-y-15 relative pt-15 justify-center">
              <div className="flex items-center justify-center w-12 h-12 relative flex-1 mx-auto max-sm:w-full sm:max-md:w-4/5 md:max-lg:w-4/5">
                <Image src={slack} alt="slack" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 relative flex-1 mx-auto">
                <Image src={figma} alt="figma" />
              </div>

              <div className="flex items-center justify-center w-12 h-12 relative flex-1 mx-auto">
                <Image src={notion} alt="notion" />
              </div>

              <div className="flex items-center justify-center w-12 h-12 relative flex-1 mx-auto max-sm:w-full sm:max-md:w-4/5 md:max-lg:w-4/5">
                <Image src={zoom} alt="zoom" />
              </div>

              <div className="flex items-center justify-center w-12 h-12 relative flex-1 mx-auto max-sm:w-full sm:max-md:w-4/5 md:max-lg:w-4/5">
                <Image src={clickup} alt="clickup" />
              </div>

              <div className="flex items-center justify-center w-12 h-12 relative flex-1 mx-auto max-sm:w-full sm:max-md:w-4/5 md:max-lg:w-4/5">
                <Image src={asana} alt="asana" />
              </div>

              <div className="flex items-center justify-center w-12 h-12 relative flex-1 mx-auto">
                <Image src={monday} alt="monday" />
              </div>

              <div className="flex items-center justify-center w-12 h-12 relative flex-1 mx-auto">
                <Image src={teams} alt="teams" />
              </div>
            </div>
          </div>
          <hr className="w-4/5 mx-auto h-px border-brand-orange/50" />
          <p className="font-light font-poppins max-sm:text-sm sm:max-lg:text-base lg:max-2xl:text-lg 2xl:max-1728p:text-xl 1728p:text-2xl text-center px-25 max-lg:px-0">
            Clear timelines. Predictable delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgencyIntegration;
