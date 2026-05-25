import GlowCard from "@/components/Glowcard";
import SectionHeading from "@/components/SectionHeading";
import { AboutProcessData } from "@/lib/data";
import Image from "next/image";

const AboutProcess = () => {
  const aboutProcess = AboutProcessData;
  return (
    <div className="flex flex-col items-center gap-10 max-sm:w-9/10 max-sm:mx-auto max-sm:pb-40">
      <SectionHeading
        headingText="Process"
        desc="We keep it simple and listen..."
      />
      <div className="max-w-450 max-sm:max-w-full mx-auto flex max-md:flex-col gap-10">
        {aboutProcess.map((process, index) => (
          <GlowCard
            key={index}
            className={`backdrop-blur-sm w-180 max-sm:w-full ${index === 0 ? "container-clip-tl" : "container-clip-br"}`}
            cardStyle={`bg-[radial-gradient(circle_at_bottom_right,_rgb(15,15,15,0.5),_rgba(35,35,35,0.5))] backdrop-blur-md px-15 max-sm:px-8 py-15 max-sm:py-8 ${index === 0 ? "content-clip-tl" : "content-clip-br"}`}
            contentStyle="flex flex-col max-sm:gap-5"
          >
            <div className="flex items-center">
              <div className={`relative h-32 w-33 max-sm:h-10 max-sm:w-11`}>
                <Image
                  src={process.cardIcon}
                  alt={process.cardTitle}
                  className={`object-cover absolute ${index === 0 ? "scale-160" : "scale-140"}`}
                  fill
                />
              </div>
              <span className="text-brand-cream text-[64px] max-sm:text-3xl font-semibold">
                {process.cardTitle}
              </span>
            </div>
            <p className="w-full text-2xl font-light max-sm:text-sm">
              {process.cardDesc}
            </p>
          </GlowCard>
        ))}
      </div>
      <p className="text-brand-cream text-xl max-sm:text-sm text-center">
        At xVS we design using tools but it&apos;s more than that, it&apos;s the
        aspiration of all who come together to make inspiration a reality.
      </p>
    </div>
  );
};

export default AboutProcess;
