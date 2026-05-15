import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="w-4/5 max-w-450 mx-auto">
        <div></div>
        <div className="flex justify-between items-center text-neutral-400 text-sm">
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
