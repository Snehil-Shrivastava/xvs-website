import Image from "next/image";
import xvslogo from "@/public/svg/xvs-logo-svg.svg";
import { FooterServices, Socials } from "@/lib/data";
import Link from "next/link";

const FooterDetail = () => {
  const socialLinks = Socials;
  const footerServices = FooterServices;
  return (
    <div className="relative">
      <div className="py-15 max-md:pt-3 max-md:pb-5 2xl:max-w-[85%] max-sm:w-9/10 mx-auto flex gap-30 relative z-5">
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
          <div className="flex justify-between w-4/5 max-sm:w-full sm:max-md:w-9/10 mx-auto h-full max-sm:gap-5">
            <div className="flex flex-col gap-8 max-sm:gap-4 sm:max-md:gap-6 max-md:flex-[0.65]">
              <span className="font-semibold text-[26px] max-sm:text-sm sm:max-md:text-lg">
                Contact
              </span>
              <div className="flex flex-col justify-between flex-1">
                <ul className="flex flex-col text-xl max-sm:text-[10px] sm:max-md:text-sm">
                  <li className="before:content-['-'] before:mr-1">
                    Lucknow, Uttar Pradesh, India.
                  </li>
                  <li className="before:content-['-'] before:mr-1">
                    Sheridan, Wyoming, US.
                  </li>
                </ul>
                <div className="flex max-md:flex-col items-end max-md:items-start gap-10 max-md:gap-3">
                  <h3 className="text-[78px]/[80px] max-sm:text-[28px]/[28px] sm:max-md:text-4xl font-calSans">
                    Say Hi!
                  </h3>
                  <p className="flex flex-col text-xl max-sm:text-[10px] sm:max-md:text-sm">
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
      <div className="absolute h-px w-[75%] max-md:w-full bg-[#f7983944] top-[26%] max-sm:top-[12%] sm:max-md:top-[15%] right-0" />
      <div className="absolute h-7/10 max-md:h-3/5 w-px bg-[#f7983944] right-[30%] max-sm:right-[40%] sm:max-md:right-[45%] top-[26%] max-sm:top-[12%] sm:max-md:top-[15%]" />
    </div>
  );
};

export default FooterDetail;
