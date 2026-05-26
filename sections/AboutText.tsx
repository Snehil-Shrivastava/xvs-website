import Image from "next/image";
import aboutxvslogo from "@/public/svg/about-xvs-logo.svg";

const AboutText = () => {
  return (
    <div className="flex flex-col items-center max-md:h-full max-md:justify-center gap-15 max-md:gap-8">
      <Image
        src={aboutxvslogo}
        alt="xvs logo"
        className="w-100 max-sm:w-40 sm:max-md:w-55"
      />
      <p className="text-brand-cream w-350 max-sm:w-9/10 sm:max-md:w-4/5 mx-auto text-center text-[1.8rem]/[3rem] max-sm:text-[12px]/[20px] sm:max-md:text-base font-extralight font-poppins">
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
