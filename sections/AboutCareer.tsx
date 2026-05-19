import Image from "next/image";
import Link from "next/link";

import glassdoorLogo from "@/public/svg/glassdoor-svg.svg";
import indeedLogo from "@/public/svg/indeed-svg.svg";
import GlassdoorReviews from "@/components/GlassdoorReviews";

const AboutCareer = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex gap-5 w-400 max-w-400">
        <div className="bg-linear-[135deg,rgba(114,113,113,0.329),rgba(40,40,40,1)] flex-[0.8] px-12 py-10 content-clip-tl flex flex-col gap-5 w-full min-w-0">
          <div className="flex gap-15 items-center">
            <Link
              href="https://www.glassdoor.co.in/Reviews/xVS-Creations-Reviews-E1145314.htm"
              target="_blank"
            >
              <Image
                src={glassdoorLogo}
                alt="glassdoor logo"
                className="w-[320px]"
              />
            </Link>
            <h2 className="text-[26px]/[26px] max-sm:text-[14px]/[24px]">
              Reviews
            </h2>
          </div>
          <GlassdoorReviews />
        </div>
        <div className="bg-linear-[-45deg,rgba(114,113,113,0.329),rgba(40,40,40,1)] flex-[0.2] py-15 px-10 content-clip-br flex items-center justify-center">
          <div className="text-center font-calSans flex flex-col gap-10 justify-center">
            <div>
              <h2 className="text-4xl">Join our</h2>
              <h2 className="text-[78px]/[88px]">Team</h2>
            </div>
            <Link
              className="cursor-pointer"
              href={`https://in.indeed.com/cmp/Xvs-Creations/jobs`}
              target="_blank"
            >
              <div className="bg-white rounded-[52px] inline-flex text-blue-600 px-8 py-4 items-center justify-center">
                <Image src={indeedLogo} alt="indeed logo" className="w-50" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCareer;
