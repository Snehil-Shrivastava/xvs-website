import Image from "next/image";
import Link from "next/link";

import glassdoorLogo from "@/public/svg/glassdoor-svg.svg";
import indeedLogo from "@/public/svg/indeed-svg.svg";
import GlassdoorReviews from "@/components/GlassdoorReviews";

const AboutCareer = () => {
  return (
    <div className="flex items-center justify-center h-full font-poppins">
      <div className="flex max-xl:flex-col gap-5 max-w-400 w-9/10 mx-auto">
        <div className="bg-linear-[135deg,rgba(114,113,113,0.329),rgba(40,40,40,1)] flex-[0.8] px-12 max-md:px-8 py-10 max-md:py-4 content-clip-tl flex flex-col gap-5 w-full min-w-0">
          <div className="flex gap-15 items-center">
            <Link
              href="https://www.glassdoor.co.in/Reviews/xVS-Creations-Reviews-E1145314.htm"
              target="_blank"
            >
              <Image
                src={glassdoorLogo}
                alt="glassdoor logo"
                className="w-80 sm:max-md:w-70"
              />
            </Link>
            <h2 className="text-[26px]/[26px] max-sm:text-sm sm:max-md:text-2xl">
              Reviews
            </h2>
          </div>
          <GlassdoorReviews />
        </div>
        <div className="bg-linear-[-45deg,rgba(114,113,113,0.329),rgba(40,40,40,1)] flex-[0.2] py-15 max-md:py-8 md:max-xl:py-10 px-10 content-clip-br flex items-center justify-center">
          <div className="text-center flex flex-col max-xl:flex-row gap-10 md:max-lg:gap-15 justify-center max-xl:items-center">
            <div>
              <h2 className="text-4xl max-sm:text-base sm:max-md:text-xl md:max-lg:text-2xl">
                Join our
              </h2>
              <h2 className="font-calSans text-[78px]/[88px] max-sm:text-[32px]/[42px] sm:max-lg:text-6xl">
                Team
              </h2>
            </div>
            <Link
              className="cursor-pointer"
              href={`https://in.indeed.com/cmp/Xvs-Creations/jobs`}
              target="_blank"
            >
              <div className="bg-white rounded-[52px] inline-flex text-blue-600 px-8 max-md:px-5 py-4 max-md:py-2 items-center justify-center">
                <Image
                  src={indeedLogo}
                  alt="indeed logo"
                  className="w-50 max-sm:w-20 sm:max-md:w-30"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCareer;
