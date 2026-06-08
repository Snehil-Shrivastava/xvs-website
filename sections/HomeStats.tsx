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
            className={`max-h-120 md:max-lg:h-55 lg:max-xl:h-70 xl:max-1440p:h-90 1440p:max-2xl:h-100 1920p:max-2240p:h-110 max-sm:h-60 md:max-1440p:h-auto ${index === 0 ? "container-clip-tl" : index === 3 ? "container-clip-br" : ""}`}
            cardStyle={`bg-brand-dark backdrop-blur-md max-sm:px-5 sm:max-lg:px-[30px] lg:max-xl:px-12 xl:max-1440p:px-[55px] 1440p:max-2xl:px-[55px] 2xl:px-[62px] 2240p:px-[100px] max-sm:py-5 sm:max-lg:py-[30px] lg:max-xl:py-12 xl:max-1440p:py-[55px] 1440p:max-2xl:py-[55px] 2xl:py-[62px] 2240p:py-[82px] max-sm:flex max-sm:items-end flex flex-1 items-end ${index === 0 ? "content-clip-tl" : index === 3 ? "content-clip-br" : ""}`}
            cardGlowRadius="1100px"
            cardGlowIntensity="0.5"
            contentStyle="w-full"
          >
            <div>
              <h3 className="text-brand-cream max-sm:text-[14px] sm:max-lg:text-sm lg:max-xl:text-xl xl:max-1440p:text-2xl 1440p:max-2xl:text-2xl 2xl:text-2xl 2240p:text-[38px]">
                {stats.cardTitle}
              </h3>
              <span className="font-apercu-black max-sm:text-[65px]/[76px] sm:max-lg:text-[4rem]/[5rem] lg:max-xl:text-[5.5rem]/[6rem] xl:max-1440p:text-[6.5rem]/[7rem] 1440p:max-2xl:text-[6.5rem]/[7rem] 2xl:text-[7rem]/[7.5rem] 2240p:text-[8rem]/[8.5rem] text-brand-orange">
                {stats.cardStat}
              </span>
              <p className="font-apercu-regular text-brand-cream 2240p:text-[28px]/[38px] max-sm:text-sm sm:max-md:text-lg md:max-lg:text-[12px] lg:max-xl:text-lg xl:max-1440p:text-xl 1440p:text-2xl">
                {stats.cardText1}
              </p>
              <p className="font-apercu-regular text-brand-cream 2240p:text-[28px]/[38px] max-sm:text-sm sm:max-md:text-lg md:max-lg:text-[12px] lg:max-xl:text-lg xl:max-1440p:text-xl 1440p:text-2xl">
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
                className={`max-w-80 absolute ${index === 0 ? "max-sm:max-w-20 md:max-lg:max-w-20 lg:max-xl:w-28 xl:max-1440p:w-32 1440p:w-40 right-0 -top-5 max-sm:-top-15 md:max-lg:-top-10 lg:max-xl:-top-10 xl:max-1440p:-top-15 1440p:max-2xl:-top-20 1920p:max-2240p:-top-25" : index === 1 ? "max-sm:max-w-20 sm:max-md:max-w-40 md:max-lg:max-w-20 lg:max-xl:w-26 xl:max-1440p:w-30 1440p:w-40 right-0 -top-5 max-sm:-top-15 md:max-lg:-top-10 lg:max-xl:-top-10 xl:max-1440p:-top-15 1440p:max-2xl:-top-20 1920p:max-2240p:-top-25" : index === 2 ? "max-sm:max-w-30 sm:max-md:max-w-65 md:max-lg:max-w-30 lg:max-xl:w-40 xl:max-1440p:w-52 1440p:w-60 right-0 xl:max-1440p:-right-5 -top-15 xl:max-1440p:-top-25 1440p:max-2xl:-top-30 1920p:max-2240p:-top-35" : "max-sm:max-w-20 sm:max-md:max-w-35 md:max-lg:max-w-18 lg:max-xl:w-24 xl:max-1440p:w-28 1440p:w-34 right-0 -top-5 max-sm:-top-15 md:max-lg:-top-10 xl:max-1440p:-top-15 1440p:max-2xl:-top-20 1920p:max-2240p:-top-25"}`}
              />
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default HomeStats;
