import Image from "next/image";
import xvslogo from "@/public/svg/xvs-logo-svg.svg";
import { FooterServices, Socials } from "@/lib/data";
import Link from "next/link";

const FooterDetail = () => {
  const socialLinks = Socials;
  const footerServices = FooterServices;
  return (
    <div className="relative">
      <div className="py-15 max-sm:pt-3 max-sm:pb-5 2xl:max-w-[85%] max-sm:w-9/10 mx-auto flex gap-30 relative z-5">
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
        <div className="flex-1 relative">
          <div className="flex justify-between w-4/5 max-sm:w-full mx-auto h-full max-sm:gap-5">
            <div className="flex flex-col gap-8 max-sm:gap-4 max-sm:flex-[0.65]">
              <span className="font-semibold text-[26px] max-sm:text-sm">
                Contact
              </span>
              <div className="flex flex-col justify-between flex-1">
                <p className="flex flex-col text-xl max-sm:text-[10px]">
                  <span>2nd Floor, 1/23 Rajni Khand, Sharda Nagar,</span>
                  <span>Lucknow, UP (226002), India.</span>
                </p>
                <div className="flex max-sm:flex-col items-end max-sm:items-start gap-10 max-sm:gap-3">
                  <h3 className="text-[78px]/[58px] max-sm:text-[28px]/[28px] font-calSans">
                    Say Hi!
                  </h3>
                  <p className="flex flex-col text-xl max-sm:text-[10px]">
                    <Link href="mailto:info@xvscreations.com">
                      info@xvscreations.com
                    </Link>
                    <Link href="tel:+918115128777">+91-8115128777</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 max-sm:gap-4 max-sm:flex-[0.35]">
              <span className="font-semibold text-[26px] max-sm:text-sm">
                Services
              </span>
              <div className="flex flex-col gap-2">
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
                    className="hover:underline text-xl max-sm:text-[10px]"
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
      <div className="absolute h-px w-[75%] max-sm:w-full bg-[#f7983944] top-[26%] max-sm:top-[12%] right-0" />
      <div className="absolute h-7/10 max-sm:h-3/5 w-px bg-[#f7983944] right-[30%] max-sm:right-[40%] top-[26%] max-sm:top-[12%]" />
    </div>
  );
};

export default FooterDetail;
