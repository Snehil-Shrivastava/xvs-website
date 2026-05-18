import Image from "next/image";
import xvslogo from "@/public/svg/xvs-logo-svg.svg";
import { FooterServices, Socials } from "@/lib/data";
import Link from "next/link";

const FooterDetail = () => {
  const socialLinks = Socials;
  const footerServices = FooterServices;
  return (
    <div className="py-15 max-w-400 mx-auto flex gap-30 relative z-5">
      <div className="flex flex-col justify-between gap-10">
        <Image
          src={xvslogo}
          alt="xvs logo"
          className="h-full max-sm:w-12 sm:max-md:w-12 md:max-lg:w-18 lg:max-1440p:w-20 1440p:max-2xl:w-20 2xl:w-22 1920p:w-25 2240p:w-25"
        />
        <div className="grid grid-cols-3 gap-y-5 gap-x-5">
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
        <div className="flex justify-between w-4/5 mx-auto h-full">
          <div className="flex flex-col gap-8">
            <span className="font-semibold text-2xl">Contact</span>
            <div className="flex flex-col justify-between flex-1">
              <p className="flex flex-col">
                <span>2nd Floor, 1/23 Rajni Khand, Sharda Nagar,</span>
                <span>Lucknow, UP (226002), India.</span>
              </p>
              <div className="flex items-end gap-10">
                <h3 className="text-[52px]/[52px] font-calSans">Say Hi!</h3>
                <p className="flex flex-col">
                  <Link href="mailto:info@xvscreations.com">
                    info@xvscreations.com
                  </Link>
                  <Link href="tel:+918115128777">+91-8115128777</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <span className="font-semibold text-2xl">Services</span>
            <div className="flex flex-col gap-2">
              {footerServices.map((service, index) => (
                <Link
                  key={index}
                  href={{
                    pathname: "/work",
                    query: { category: service.heading },
                  }}
                  className="hover:underline"
                >
                  {service.heading}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* dividing lines */}
        <div className="absolute h-px w-full bg-[#f7983944] top-[18%] right-[-7.4%]" />
        <div className="absolute h-full w-px bg-[#f7983944] right-[30%] top-[18%]" />
      </div>
    </div>
  );
};

export default FooterDetail;
