import { NavMenuLinksMain, NavMenuLinksBody } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

import behance from "@/public/svg/behance.svg";
import instagram from "@/public/svg/instagram.svg";
import dribble from "@/public/svg/dribble.svg";
import facebook from "@/public/svg/facebook.svg";
import linkedin from "@/public/svg/linkedin.svg";
import twitter from "@/public/svg/twitter.svg";

const NavMenu = ({ closeMenu }: { closeMenu: () => void }) => {
  const mainNavLinks = NavMenuLinksMain;
  const navLinksBody = NavMenuLinksBody;
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="px-50 pt-20 pb-15 max-sm:pt-25 sm:max-md:pt-30 md:max-lg:pt-40 max-sm:px-10 sm:max-md:px-35 md:max-lg:px-0 max-sm:pb-20">
        <div className="font-poppins flex items-center justify-center sm:max-md:justify-between max-sm:gap-3 sm:max-md:gap-6 md:max-lg:gap-15 gap-20 max-sm:text-[1.125rem] sm:max-lg:text-2xl text-[2.3rem] font-extralight max-sm:justify-between max-sm:mx-auto">
          {mainNavLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              scroll={true}
              onClick={closeMenu}
              className="hover:text-brand-orange-light"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center max-xs:h-105 max-xs:overflow-y-scroll sm:max-md:h-120 md:max-lg:h-180 sm:max-lg:overflow-y-scroll max-lg:w-[70%] max-lg:justify-start text-brand-orange py-20 max-lg:py-0 mx-auto">
        <div className="max-md:w-full xl:max-1440p:w-[65%] 1440p:max-2xl:w-[85%] 2xl:max-2240p:w-[65%] 2240p:w-[60%] max-xl:flex max-xl:flex-col grid grid-cols-2 max-sm:gap-[2dvh] sm:max-md:gap-[3dvh] md:max-lg:gap-[3dvh] lg:max-xl:gap-[4dvh] xl:max-1440p:gap-[7dvh] 1440p:max-2xl:gap-x-[7dvh] 1440p:max-2xl:gap-y-[12dvh] 2xl:gap-[8dvh] 2240p:gap-y-[7dvh] 2240p:gap-x-[9dvh]">
          {navLinksBody.map((link, index) => (
            <div key={index} className="">
              <h3 className="font-poppins max-sm:text-[10px] sm:max-md:text-[0.75rem] md:max-lg:text-[0.875rem] lg:max-xl:text-[1rem] xl:max-1440p:text-[1.2rem] 1440p:max-2xl:text-[1.2rem] 2xl:text-[1.5rem] 2240p:text-[30px]">
                {link.subheading}
              </h3>
              <Link
                href={{
                  pathname: "/work",
                  query: { category: link.heading },
                }}
                className={`block font-calSans max-sm:text-[36px]/[48px] sm:max-md:text-[1.5rem]/[2rem] md:max-lg:text-[1.8rem]/[2.5rem] lg:max-xl:text-[2.2rem]/[2.8rem] xl:max-1440p:text-[3rem]/[3.75rem] 1440p:max-2xl:text-[4.5rem]/[4.3rem] 2xl:text-[3.5rem]/[4rem] 2240p:text-[66px]/[72px] 2240p:w-[90%]`}
                onClick={closeMenu}
              >
                {link.heading}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end max-md:justify-center gap-10 px-30 max-sm:px-0 mt-auto mb-25 max-sm:mb-10 max-lg:mt-10">
        <Link
          href="https://www.behance.net/xVSCreations"
          target="_blank"
          className="max-sm:w-4 sm:max-md:w-8 md:max-lg:w-5 2240p:w-8 2240p:h-8"
        >
          <Image src={behance} alt="" className="" />
        </Link>
        <Link
          href="https://www.instagram.com/xvscreations"
          target="_blank"
          className="max-sm:w-3.5 sm:max-md:w-6 md:max-lg:w-4 2240p:w-6 2240p:h-8"
        >
          <Image src={instagram} alt="" className="" />
        </Link>
        <Link
          href="https://www.dribbble.com/xvscreations"
          target="_blank"
          className="max-sm:w-3.5 sm:max-md:w-6 md:max-lg:w-4 2240p:w-6 2240p:h-8"
        >
          <Image src={dribble} alt="" className="" />
        </Link>
        <Link
          href="https://www.facebook.com/xVSCreations"
          target="_blank"
          className="max-sm:w-3.5 sm:max-md:w-6 md:max-lg:w-4 2240p:w-6 2240p:h-8"
        >
          <Image src={facebook} alt="" className="" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/xvs-creations"
          target="_blank"
          className="max-sm:w-3.5 sm:max-md:w-6 md:max-lg:w-4 2240p:w-6 2240p:h-8"
        >
          <Image src={linkedin} alt="" className="" />
        </Link>
        <Link
          href="https://x.com/xvscreations"
          target="_blank"
          className="max-sm:w-3.5 sm:max-md:w-6 md:max-lg:w-4 2240p:w-6 2240p:h-8"
        >
          <Image src={twitter} alt="" className="" />
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
