import Image from "next/image";
import scheduleMeetingSVG from "@/public/svg/schedule-meeting-svg.svg";
import Link from "next/link";
import xvslogo from "@/public/svg/xvs-logo-svg.svg";

const FooterHeading = () => {
  return (
    <div className="border-b border-b-[rgba(247,152,57,0.3)] py-25 max-sm:py-10 sm:max-md:py-12 md:max-lg:py-15 lg:max-xl:py-16">
      <div className="max-w-[85%] mx-auto flex max-md:flex-col max-md:gap-5 justify-between items-center">
        <h2
          className={`text-[3.5rem]/[3.8rem] max-sm:text-[1.4rem]/[2rem] sm:max-md:text-[2rem]/[3rem] md:max-lg:text-3xl lg:max-xl:text-4xl xl:max-1440p:text-5xl tracking-wider w-[52%] max-md:w-full font-calSans md:flex md:flex-col max-sm:flex-row select-none max-md:text-center`}
        >
          <span>Let&#39;s start </span>
          <span>creating together</span>
        </h2>
        <Link
          href={{ query: { category: "schedule-meeting" } }}
          className="flex items-center text-nowrap bg-brand-orange px-9 max-md:px-4 md:max-lg:px-5 lg:max-xl:px-6 py-6 max-md:py-2.5 md:max-xl:py-3 rounded-[52px] text-4xl max-sm:text-sm sm:max-md:text-lg md:max-lg:text-xl lg:max-xl:text-2xl xl:max-1440p:text-3xl max-sm:font-semibold gap-6 max-md:gap-3 md:max-lg:gap-4 lg:max-xl:gap-5 font-semibold cursor-pointer select-none font-poppins"
        >
          <Image
            src={scheduleMeetingSVG}
            alt="schedule a meeting"
            className="max-sm:w-5 sm:max-md:w-7 md:max-lg:w-8 lg:max-xl:w-10"
          />
          <span>Schedule A Meeting</span>
        </Link>

        <Link href={`/`}>
          <Image
            src={xvslogo}
            alt="xvs logo"
            className="h-full max-sm:w-15 sm:max-md:w-20 md:max-lg:w-18 lg:max-1440p:w-20 1440p:max-2xl:w-20 2xl:w-22 1920p:w-25 2240p:w-30 md:hidden"
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterHeading;
