import GlowCard from "@/components/Glowcard";
import SectionHeading from "@/components/SectionHeading";
import { AboutProcessData } from "@/lib/data";
import Image from "next/image";

const AboutProcess = () => {
  const aboutProcess = AboutProcessData;
  return (
    <div className="flex flex-col items-center gap-10">
      <SectionHeading
        headingText="Process"
        desc="We keep it simple and listen..."
      />
      <div className="max-w-450 mx-auto flex gap-10">
        {aboutProcess.map((process, index) => (
          <GlowCard
            key={index}
            className={`backdrop-blur-sm w-180 ${index === 0 ? "container-clip-tl" : "container-clip-br"}`}
            cardStyle={`bg-[radial-gradient(circle_at_bottom_right,_rgb(15,15,15,0.5),_rgba(35,35,35,0.5))] backdrop-blur-md px-15 py-15 ${index === 0 ? "content-clip-tl" : "content-clip-br"}`}
            contentStyle="flex flex-col"
          >
            <div className="flex items-center">
              <div className={`relative h-32 w-33`}>
                <Image
                  src={process.cardIcon}
                  alt={process.cardTitle}
                  className={`object-cover absolute ${index === 0 ? "scale-160" : "scale-140"}`}
                  fill
                />
              </div>
              <span className="text-brand-cream text-[64px] font-semibold">
                {process.cardTitle}
              </span>
            </div>
            <p className="w-full text-2xl font-light">{process.cardDesc}</p>
          </GlowCard>
        ))}
      </div>
      <p className="text-brand-cream text-xl">
        At xVS we design using tools but it&apos;s more than that, it&apos;s the
        aspiration of all who come together to make inspiration a reality.
      </p>
    </div>
  );
};

export default AboutProcess;
