import Image from "next/image";
import NDA from "@/public/svg/NDA.svg";
import NoPoaching from "@/public/svg/NoPoaching.svg";
import Execution from "@/public/svg/Execution.svg";
import Collab from "@/public/svg/Collab.svg";

const AgencyWorkflow = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-4/5 max-md:w-9/10 sm:max-md:max-w-130 mx-auto relative font-calSans">
        <span className="text-brand-orange text-5xl max-sm:text-3xl sm:max-md:text-4xl capitalize absolute -top-8 max-sm:-top-5 sm:max-md:-top-6 z-99">
          remote-ready workflows
        </span>
        <div className="absolute bg-neutral-500 inset-0 z-0 agency-client-container" />
        <div className="bg-background relative py-20 max-md:py-15 flex flex-col gap-20 max-md:gap-8 agency-client-content">
          <div>
            <p className="font-extralight font-sans sm:max-md:text-lg md:max-lg:text-xl lg:max-2xl:text-2xl 2xl:max-1728p:text-[26px] 1728p:text-3xl w-9/10 mx-auto tracking-wider">
              We understand agency dynamics.
            </p>
            <div className="w-7/10 mx-auto grid grid-cols-2 gap-x-15 max-md:gap-x-8 gap-y-25 max-md:gap-y-15 relative pt-15 justify-center">
              <div className="flex max-md:flex-col gap-10 max-md:gap-5 items-center justify-start">
                <Image
                  src={NDA}
                  alt="communication"
                  className="w-15 max-sm:w-12.5 sm:max-md:w-15"
                />
                <span className="text-[28px] max-sm:text-lg sm:max-md:text-lg max-md:text-center">
                  NDA Ready
                </span>
              </div>
              <div className="flex max-md:flex-col gap-10 max-md:gap-5 items-center justify-start">
                <Image
                  src={NoPoaching}
                  alt="communication"
                  className="w-15 max-sm:w-12.5 sm:max-md:w-15"
                />
                <span className="text-[28px] max-sm:text-lg sm:max-md:text-lg max-md:text-center">
                  No client poaching
                </span>
              </div>
              <div className="flex max-md:flex-col gap-10 max-md:gap-5 items-center justify-start">
                <Image
                  src={Execution}
                  alt="communication"
                  className="w-15 max-sm:w-12.5 sm:max-md:w-15"
                />
                <span className="text-[28px] max-sm:text-lg sm:max-md:text-lg max-md:text-center">
                  Brand-neutral execution
                </span>
              </div>
              <div className="flex max-md:flex-col gap-10 max-md:gap-5 items-center justify-start">
                <Image
                  src={Collab}
                  alt="communication"
                  className="w-15 max-sm:w-12.5 sm:max-md:w-15"
                />
                <span className="text-[28px] max-sm:text-lg sm:max-md:text-lg max-md:text-center">
                  Flexible collaboration
                </span>
              </div>
            </div>
          </div>
          <hr className="w-4/5 mx-auto h-px border-brand-orange/50" />
          <p className="font-light font-sans max-sm:text-sm sm:max-lg:text-base lg:max-2xl:text-lg 2xl:max-1728p:text-xl 1728p:text-2xl text-center px-25 max-md:px-0">
            We operate as your team — not a competitor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgencyWorkflow;
