import GlowCard from "@/components/Glowcard";
import { HomeStatsData } from "@/lib/data";
import Image from "next/image";

const HomeStats = () => {
  const homeStats = HomeStatsData;

  return (
    <div className="flex items-center justify-center h-full font-calSans select-none">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-1.5 w-9/10 max-w-400">
        {homeStats.map((stats, index) => (
          <GlowCard
            key={index}
            className={`max-h-120 md:max-lg:h-55 lg:max-xl:h-70 xl:max-1440p:h-90 1440p:max-2xl:h-100 max-sm:h-60 md:max-1440p:h-auto ${index === 0 ? "container-clip-tl" : index === 3 ? "container-clip-br" : ""}`}
            cardStyle={`bg-brand-dark backdrop-blur-md py-20 max-sm:py-10 md:max-lg:py-10 lg:max-xl:py-10 xl:max-1440p:py-18 1440p:max-2xl:py-15 px-15 max-sm:px-8 md:max-lg:px-8 lg:max-xl:px-12 max-sm:flex max-sm:items-end flex flex-1 items-end ${index === 0 ? "content-clip-tl" : index === 3 ? "content-clip-br" : ""}`}
            cardGlowRadius="1100px"
            cardGlowIntensity="0.5"
            contentStyle="w-full"
          >
            <div>
              <h3 className="text-brand-cream 2240p:text-[38px] max-sm:text-lg sm:max-md:text-2xl md:max-lg:text-xl lg:max-1440p:text-2xl 1440p:text-3xl">
                {stats.cardTitle}
              </h3>
              <span className="font-apercu-black 2240p:text-[8rem]/[8.5rem] max-sm:text-5xl sm:max-md:text-7xl md:max-lg:text-5xl lg:max-xl:text-7xl xl:max-1440p:text-8xl 1440p:text-[7rem]/[7.5rem] text-brand-orange">
                {stats.cardStat}
              </span>
              <p className="font-poppins text-brand-cream 2240p:text-[28px]/[38px] max-sm:text-sm sm:max-md:text-lg md:max-lg:text-[12px] lg:max-xl:text-lg xl:max-1440p:text-xl 1440p:text-2xl">
                {stats.cardText1}
              </p>
              <p className="font-poppins text-brand-cream 2240p:text-[28px]/[38px] max-sm:text-sm sm:max-md:text-lg md:max-lg:text-[12px] lg:max-xl:text-lg xl:max-1440p:text-xl 1440p:text-2xl">
                {stats.cardText2}
              </p>
              {stats.descriptor && (
                <p className="font-poppins text-brand-cream 2240p:text-[1.2rem] max-sm:text-[10px] sm:max-md:text-sm md:max-lg:text-[10px] lg:max-xl:text-sm xl:max-1440p:text-base 1440p:text-lg italic">
                  {stats.descriptor}
                </p>
              )}
            </div>
            <div className="absolute inset-0">
              <Image
                src={stats.SVGIcon}
                alt={`${stats.cardTitle}`}
                className={`max-w-80 absolute ${index === 0 ? "max-sm:max-w-20 md:max-lg:max-w-20 lg:max-xl:w-28 xl:max-1440p:w-32 1440p:w-40 right-0 -top-5 max-sm:-top-15 md:max-lg:-top-10 lg:max-xl:-top-10 xl:max-1440p:-top-15 1440p:max-2xl:-top-20" : index === 1 ? "max-sm:max-w-20 sm:max-md:max-w-40 md:max-lg:max-w-20 lg:max-xl:w-26 xl:max-1440p:w-30 1440p:w-40 right-0 -top-5 max-sm:-top-15 md:max-lg:-top-10 lg:max-xl:-top-10 xl:max-1440p:-top-15 1440p:max-2xl:-top-20" : index === 2 ? "max-sm:max-w-30 sm:max-md:max-w-65 md:max-lg:max-w-30 lg:max-xl:w-40 xl:max-1440p:w-52 1440p:w-60 right-0 xl:max-1440p:-right-5 -top-15 xl:max-1440p:-top-25 1440p:max-2xl:-top-30" : "max-sm:max-w-20 sm:max-md:max-w-35 md:max-lg:max-w-18 lg:max-xl:w-24 xl:max-1440p:w-28 1440p:w-34 right-0 -top-5 max-sm:-top-15 md:max-lg:-top-10 xl:max-1440p:-top-15 1440p:max-2xl:-top-20"}`}
              />
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default HomeStats;
