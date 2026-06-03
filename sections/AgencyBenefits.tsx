import Image from "next/image";
import lambda from "@/public/svg/lambda-orange.svg";

const AgencyBenefits = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-9/10 max-lg:w-9/10 sm:max-md:max-w-130 mx-auto relative font-calSans">
        <span className="text-brand-orange text-5xl max-sm:text-3xl sm:max-lg:text-4xl capitalize absolute -top-8 max-sm:-top-5 sm:max-md:-top-6 z-99">
          who benefits most
        </span>
        <div className="absolute bg-neutral-500 inset-0 z-0 agency-client-container" />
        <div className="bg-background relative py-20 max-xl:py-15 flex flex-col gap-20 max-md:gap-8 agency-client-content">
          <div>
            <p className="font-extralight font-poppins sm:max-md:text-lg md:max-lg:text-xl lg:max-2xl:text-2xl 2xl:max-1728p:text-[26px] 1728p:text-3xl w-9/10 mx-auto tracking-wider">
              We&apos;re a strong fit if:
            </p>
            <ul className="w-9/10 mx-auto flex flex-col gap-10 2xl:gap-15 relative pt-10 md:pt-15 justify-center font-poppins font-extralight max-sm:text-sm sm:max-md:text-lg md:max-lg:text-xl lg:max-xl:text-2xl xl:max-2xl:text-3xl 2xl:text-4xl">
              <li className="flex max-md:gap-5 gap-10 items-center">
                <Image src={lambda} alt="bullet-point" className="max-md:w-5" />
                <span className="max-sm:w-full">
                  You&apos;re an agency scaling client work
                </span>
              </li>
              <li className="flex max-md:gap-5 gap-10 items-center">
                <Image src={lambda} alt="bullet-point" className="max-md:w-5" />
                <span className="max-sm:w-full">
                  You need reliable white-label creative execution
                </span>
              </li>
              <li className="flex max-md:gap-5 gap-10 items-center">
                <Image src={lambda} alt="bullet-point" className="max-md:w-5" />
                <span className="max-sm:w-full">
                  You value communication and structured processes
                </span>
              </li>
              <li className="flex max-md:gap-5 gap-10 items-center">
                <Image src={lambda} alt="bullet-point" className="max-md:w-5" />
                <span className="max-sm:w-full">
                  You want quality without increasing headcount
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyBenefits;
