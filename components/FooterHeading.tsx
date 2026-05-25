import Image from "next/image";
import scheduleMeetingSVG from "@/public/svg/schedule-meeting-svg.svg";
import Link from "next/link";
import xvslogo from "@/public/svg/xvs-logo-svg.svg";

const FooterHeading = () => {
  return (
    <div className="border-b border-b-[rgba(247,152,57,0.3)] py-25 max-sm:py-10">
      <div className="max-w-[85%] mx-auto flex max-sm:flex-col max-sm:gap-5 justify-between items-center">
        <h2
          className={`text-[3.5rem]/[3.8rem] max-sm:text-[1.5rem]/[2rem] tracking-wider w-[52%] max-sm:w-full font-calSans md:flex md:flex-col max-sm:flex-row select-none`}
        >
          <span>Let&#39;s start </span>
          <span>creating together</span>
        </h2>
        <Link
          href={{ query: { category: "schedule-meeting" } }}
          className="flex items-center text-nowrap bg-brand-orange px-9 max-sm:px-4 py-6 max-sm:py-2.5 rounded-[52px] text-4xl max-sm:text-sm max-sm:font-semibold gap-6 max-sm:gap-3 font-semibold cursor-pointer select-none"
        >
          <Image
            src={scheduleMeetingSVG}
            alt="schedule a meeting"
            className="max-sm:w-5"
          />
          <span>Schedule A Meeting</span>
        </Link>

        <Link href={`/`}>
          <Image
            src={xvslogo}
            alt="xvs logo"
            className="h-full max-sm:w-15 sm:max-md:w-12 md:max-lg:w-18 lg:max-1440p:w-20 1440p:max-2xl:w-20 2xl:w-22 1920p:w-25 2240p:w-30 md:hidden"
          />
        </Link>
      </div>
    </div>
  );
};

export default FooterHeading;
