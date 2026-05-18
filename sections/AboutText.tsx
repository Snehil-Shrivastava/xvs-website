import Image from "next/image";
import aboutxvslogo from "@/public/svg/about-xvs-logo.svg";

const AboutText = () => {
  return (
    <div className="flex flex-col items-center gap-15">
      <Image src={aboutxvslogo} alt="xvs logo" className="w-100" />
      <p className="text-brand-cream w-350 mx-auto text-center text-[1.8rem]/[3rem] font-extralight">
        With the inspiration of designing we started back in 2014 and bringing
        them to reality since then. From cosmetic startups to big automotive
        companies we had fun working at different scales and industries. We also
        picked a couple of awards along the way but customer satisfaction is
        what really mattered.
      </p>
    </div>
  );
};

export default AboutText;
