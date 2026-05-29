import GlowCard from "@/components/Glowcard";
import SectionHeading from "@/components/SectionHeading";
import { AboutProcessData } from "@/lib/data";
import Image from "next/image";

const AboutProcess = () => {
  const aboutProcess = AboutProcessData;
  return (
    <div className="flex flex-col items-center gap-10 max-lg:w-9/10 sm:max-md:max-w-150 max-lg:mx-auto max-md:pb-40 md:max-lg:pb-50">
      <SectionHeading
        headingText="Process"
        desc="We keep it simple and listen..."
      />
      <div className="max-w-450 max-lg:max-w-full mx-auto flex max-md:flex-col gap-10 md:max-lg:gap-5">
        {aboutProcess.map((process, index) => (
          <GlowCard
            key={index}
            className={`backdrop-blur-sm w-180 max-lg:w-full ${index === 0 ? "container-clip-tl" : "container-clip-br"}`}
            cardStyle={`bg-[radial-gradient(circle_at_bottom_right,_rgb(15,15,15,0.5),_rgba(35,35,35,0.5))] backdrop-blur-md px-15 max-sm:px-8 md:max-lg:px-10 py-15 max-md:py-8 md:max-lg:py-6 ${index === 0 ? "content-clip-tl" : "content-clip-br"}`}
            contentStyle="flex flex-col max-md:gap-5"
          >
            <div
              className={`flex items-center ${index === 1 ? "md:max-lg:gap-5" : "md:max-lg:gap-3"}`}
            >
              <div
                className={`relative h-32 w-33 max-sm:h-10 max-sm:w-11 sm:max-md:h-20 sm:max-md:w-26 md:max-lg:h-15 md:max-lg:w-10`}
              >
                <Image
                  src={process.cardIcon}
                  alt={process.cardTitle}
                  className={`object-cover absolute ${index === 0 ? "scale-160" : "scale-140"}`}
                  fill
                />
              </div>
              <span className="font-calSans text-brand-cream text-[64px] max-sm:text-3xl sm:max-md:text-4xl md:max-xl:text-2xl">
                {process.cardTitle}
              </span>
            </div>
            <p className="w-full text-2xl font-poppins font-light max-sm:text-sm sm:max-md:text-lg md:max-xl:text-sm">
              {process.cardDesc}
            </p>
          </GlowCard>
        ))}
      </div>
      <p className="text-brand-cream text-xl max-sm:text-sm sm:max-md:text-base font-poppins font-light text-center">
        At xVS we design using tools but it&apos;s more than that, it&apos;s the
        aspiration of all who come together to make inspiration a reality.
      </p>
    </div>
  );
};

export default AboutProcess;
