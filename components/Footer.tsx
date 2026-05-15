import Link from "next/link";
import FooterHeading from "./FooterHeading";
import FooterDetail from "./FooterDetail";

const Footer = () => {
  return (
    <div>
      <div className="w-4/5 max-w-450 mx-auto">
        <div className="bg-[#333333]">
          <FooterHeading />
          <FooterDetail />
        </div>
        <div className="flex justify-between items-center text-neutral-400 text-sm py-8">
          <span>@2026 xVS Creations All Rights Reserved</span>
          <div className="flex items-center gap-15">
            <Link href={`#`}>Terms & Conditions</Link>
            <Link href={`#`}>Privacy Policy</Link>
            <Link href={`#`}>Cookies Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
