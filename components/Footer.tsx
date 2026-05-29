import Link from "next/link";
import FooterHeading from "./FooterHeading";
import FooterDetail from "./FooterDetail";

const Footer = () => {
  return (
    <div>
      <div className="w-9/10 max-sm:w-[95%] md:max-xl:w-[95%] mx-auto relative">
        <div className="absolute bg-neutral-500 inset-0 z-0 footer-container-clip" />
        <div className="relative overflow-hidden z-1 bg-background footer-content-clip">
          <FooterHeading />
          <FooterDetail />
          <div className="bg-[#f39638b0] w-full h-auto absolute -bottom-10 right-0 rounded-full origin-center shadow-[0_0_250px_250px_rgba(243,150,56,0.5)] max-sm:shadow-[0_0_100px_100px_rgba(243,150,56,0.5)] lg:max-xl:shadow-[0_0_150px_150px_rgba(243,150,56,0.5)] footer-pulse-glow" />
        </div>
        <div className="flex justify-between items-center text-neutral-400 text-sm max-sm:text-[8px] sm:max-md:text-[12px] py-8 bg-background relative z-1 px-5 max-sm:px-1 font-poppins">
          <span>@2026 xVS Creations All Rights Reserved</span>
          <div className="flex items-center gap-15 max-md:gap-4 md:max-lg:gap-5">
            <Link href={`/terms-and-conditions`}>Terms & Conditions</Link>
            <Link href={`/privacy-policy`}>Privacy Policy</Link>
            <Link href={`/cookies-policy`}>Cookies Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
