import Image from "next/image";
import ClutchLogo from "@/components/ClutchLogo";
import Link from "next/link";
import scheduleMeetingSVG from "@/public/svg/schedule-meeting-svg.svg";
import ratingCardSVG from "@/public/svg/rating-card-svg.svg";

const AgencyStats = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-4/5 max-md:w-9/10 sm:max-md:max-w-130 mx-auto relative font-calSans">
        <div className="absolute bg-neutral-500 inset-0 z-0 agency-stat-container" />
        <div className="bg-background relative py-20 max-md:py-10 agency-stat-content">
          <div className="w-4/5 max-ms:w-auto mx-auto grid grid-cols-2 max-md:flex max-md:flex-col gap-x-65 gap-y-25 max-md:gap-y-10 relative sm:max-md:items-center">
            <hr className="absolute top-1/2 -translate-y-1/2 max-sm:top-20 sm:max-md:top-22 w-full h-px border-brand-orange/50" />
            <hr className="absolute top-1/2 -translate-y-1/2 w-full h-px border-brand-orange/50" />
            <hr className="absolute left-1/2 -translate-x-1/2 h-full w-px border-l border-brand-orange/50 max-md:hidden" />
            <div className="flex gap-20 max-md:gap-15 items-center max-md:justify-center">
              <div className="relative">
                <span className="text-brand-orange font-apercu-black text-8xl max-sm:text-5xl sm:max-md:text-6xl">
                  4.8
                </span>
                <Image
                  src={ratingCardSVG}
                  alt=""
                  className="absolute w-12 max-md:w-8 -top-5 -right-15 max-md:-right-10"
                />
              </div>
              <div className="">
                <span className="text-2xl max-sm:text-sm sm:max-md:text-xl font-medium">
                  Rated on
                </span>
                <ClutchLogo width="112" height="40" className="max-sm:w-20" />
              </div>
            </div>
            <div className="flex gap-15 items-center max-md:justify-center">
              <div className="font-apercu-black">
                <span className="text-brand-orange text-8xl max-sm:text-5xl sm:max-md:text-6xl">
                  19
                </span>
                <span className="text-8xl max-sm:text-5xl sm:max-md:text-6xl">
                  +
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl max-sm:text-sm sm:max-md:text-xl font-medium">
                  Verified
                </span>
                <span className="text-5xl max-sm:text-2xl sm:max-md:text-4xl font-medium max-md:font-sans">
                  Reviews
                </span>
              </div>
            </div>
            <div className="flex gap-15 items-center justify-start max-md:justify-center">
              <div className="flex flex-col-reverse">
                <span className="text-2xl max-sm:text-sm sm:max-md:text-xl font-medium">
                  Since
                </span>
                <span className="text-5xl max-sm:text-2xl sm:max-md:text-4xl font-medium">
                  Trusted
                </span>
              </div>
              <div>
                <span className="text-brand-orange font-apercu-black text-8xl max-sm:text-5xl sm:max-md:text-6xl">
                  2014
                </span>
              </div>
            </div>
            <div>
              <Link
                href={{ query: { category: "schedule-meeting" } }}
                className="flex items-center text-nowrap bg-brand-orange px-9 max-sm:px-4 py-6 max-md:py-2.5 rounded-[72px] text-4xl max-sm:text-sm sm:max-md:text-xl gap-6 font-semibold cursor-pointer select-none"
              >
                <Image
                  src={scheduleMeetingSVG}
                  alt="schedule a meeting"
                  className="max-sm:w-10 sm:max-md:w-14"
                />
                <div className="flex flex-col">
                  <span className="tracking-wider">Book a 15min</span>
                  <span className="font-medium text-3xl">Intro Call</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyStats;
