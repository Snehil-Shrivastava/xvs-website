import Link from "next/link";
import FooterHeading from "./FooterHeading";
import FooterDetail from "./FooterDetail";

const Footer = () => {
  return (
    <div>
      <div className="w-4/5 max-w-450 mx-auto relative">
        <div
          className="absolute bg-neutral-500 inset-0 z-0"
          style={{
            clipPath: `Polygon(0 51px, 0 100%, 100% 100%, 100% 0, 51px 0)`,
          }}
        />
        <div
          className="relative overflow-hidden z-1 bg-background"
          style={{
            clipPath: `Polygon(2px 52px, 0 100%, 100% 100%, 100% 0, 50% 0, 52px 2px)`,
          }}
        >
          <FooterHeading />
          <FooterDetail />
          <div className="bg-[#f39638b0] w-full h-auto absolute -bottom-10 right-0 rounded-full origin-center shadow-[0_0_250px_250px_rgba(243,150,56,0.5)] footer-pulse-glow" />
        </div>
        <div className="flex justify-between items-center text-neutral-400 text-sm py-8 bg-background relative z-1 px-5">
          <span>@2026 xVS Creations All Rights Reserved</span>
          <div className="flex items-center gap-15">
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
