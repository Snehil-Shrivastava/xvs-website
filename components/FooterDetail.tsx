import Image from "next/image";
import xvslogo from "@/public/svg/xvs-logo-svg.svg";
import { FooterServices, Socials } from "@/lib/data";
import Link from "next/link";

const FooterDetail = () => {
  const socialLinks = Socials;
  const footerServices = FooterServices;
  return (
    <div className="relative">
      <div className="py-15 max-md:pt-3 max-md:pb-5 2xl:max-w-[85%] max-sm:w-9/10 mx-auto flex gap-70 relative z-5">
        <div className="flex flex-col justify-between gap-10 max-md:hidden">
          <Link href={`/`}>
            <Image
              src={xvslogo}
              alt="xvs logo"
              className="h-full max-sm:w-12 sm:max-md:w-12 md:max-lg:w-18 lg:max-1440p:w-20 1440p:max-2xl:w-20 2xl:w-22 1920p:w-25 2240p:w-30"
            />
          </Link>
          <div className="grid grid-cols-3 gap-y-5 gap-x-6">
            {socialLinks.map((socials, index) => (
              <Link key={index} href={socials.link}>
                <Image
                  src={socials.img}
                  alt={socials.alt}
                  className={socials.className}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-1 relative font-poppins">
          <div className="flex justify-between w-full max-sm:w-full sm:max-md:w-9/10 mx-auto h-full max-sm:gap-5">
            <div className="flex flex-col gap-8 max-sm:gap-4 sm:max-md:gap-6 max-md:flex-[0.65]">
              <span className="font-semibold text-[26px] max-sm:text-sm sm:max-md:text-lg">
                We are here
              </span>
              <div className="flex flex-col justify-between flex-1 md:gap-15">
                <div className="flex gap-20 max-sm:gap-12 sm:max-md:gap-25 md:justify-between relative">
                  <div className="flex flex-col text-xl max-sm:text-[10px] sm:max-md:text-sm">
                    <span className="font-bold">Lucknow,</span>
                    <span className="text-brand-cream text-base max-sm:text-[8px] sm:max-md:text-[10px]">
                      Uttar Pradesh, India
                    </span>
                  </div>
                  <div className="flex flex-col text-xl max-sm:text-[10px] sm:max-md:text-sm">
                    <span className="font-bold">Sheridan,</span>
                    <span className="text-brand-cream text-base max-sm:text-[8px] sm:max-md:text-[10px]">
                      Wyoming, US
                    </span>
                  </div>
                </div>
                <div className="flex items-center max-md:flex-col max-md:items-start gap-10 max-md:gap-3">
                  <h3 className="text-[60px]/[62px] max-sm:text-[28px]/[28px] sm:max-md:text-4xl font-calSans flex flex-col max-md:flex-row max-md:gap-1.5">
                    <span className="text-4xl max-sm:text-[28px]/[28px] sm:max-md:text-4xl">
                      Say
                    </span>
                    <span>Hi!</span>
                  </h3>
                  <p className="flex flex-col text-xl max-sm:text-[10px] sm:max-md:text-sm text-brand-cream">
                    <Link href="mailto:info@xvscreations.com">
                      info@xvscreations.com
                    </Link>
                    <Link href="tel:+918115128777">+91-8115128777</Link>
                    <Link href="tel:+13072962002">+1 (307) 296-2002</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 max-sm:gap-4 sm:max-md:gap-6 max-md:flex-[0.35]">
              <span className="font-semibold text-[26px] max-sm:text-sm sm:max-md:text-lg">
                Services
              </span>
              <div className="grid grid-cols-2 gap-x-15 gap-y-2 max-md:flex max-md:flex-col max-md:gap-2 text-brand-cream">
                {footerServices.map((service, index) => (
                  <Link
                    key={index}
                    href={
                      service.url
                        ? service.url
                        : {
                            pathname: "/work",
                            query: { category: service.heading },
                          }
                    }
                    className="hover:underline text-xl max-sm:text-[10px] sm:max-md:text-sm"
                  >
                    {service.heading}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-center md:hidden relative z-10 py-5">
        {socialLinks.map((socials, index) => (
          <Link key={index} href={socials.link}>
            <Image
              src={socials.img}
              alt={socials.alt}
              className={socials.className}
            />
          </Link>
        ))}
      </div>

      {/* dividing lines */}
      <div className="absolute h-px w-[75%] max-md:w-full bg-[#f7983944] top-[28%] max-sm:top-[12%] sm:max-md:top-[15%] right-0" />
      <div className="absolute h-1/2 max-md:h-3/5 w-px bg-[#f7983944] right-[40%] max-sm:right-[40%] sm:max-md:right-[45%] top-[28%] max-sm:top-[12%] sm:max-md:top-[15%]" />
      <div className="absolute h-[18%] max-md:h-[16%] w-px bg-[#f7983944] right-[65.5%] max-sm:right-[69%] sm:max-md:right-[73%] top-[28%] max-sm:top-[12%] sm:max-md:top-[15%]" />
    </div>
  );
};

export default FooterDetail;
