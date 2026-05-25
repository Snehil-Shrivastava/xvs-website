import GlowCard from "@/components/Glowcard";
import { HomeStatsData } from "@/lib/data";
import Image from "next/image";

const HomeStats = () => {
  const homeStats = HomeStatsData;

  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-5 max-sm:w-9/10">
        {homeStats.map((stats, index) => (
          <GlowCard
            key={index}
            className={`${stats.cardTitle}-stat max-h-120 max-sm:h-60 ${index === 0 ? "container-clip-tl" : index === 3 ? "container-clip-br" : ""}`}
            cardStyle={`bg-brand-dark backdrop-blur-md py-25 max-sm:py-10 px-15 max-sm:px-8 max-sm:flex max-sm:items-end ${index === 0 ? "content-clip-tl" : index === 3 ? "content-clip-br" : ""}`}
            cardGlowRadius="1100px"
            cardGlowIntensity="0.5"
          >
            <div>
              <h3 className="text-xl font-semibold text-brand-cream 2240p:text-[38px] max-sm:text-lg">
                {stats.cardTitle}
              </h3>
              <span className="font-calSans 2240p:text-[8rem]/[8.5rem] max-sm:text-5xl text-brand-orange">
                {stats.cardStat}
              </span>
              <p className="text-brand-cream 2240p:text-[28px]/[32px] max-sm:text-sm">
                {stats.cardText1}
              </p>
              <p className="text-brand-cream 2240p:text-[28px]/[32px] max-sm:text-sm">
                {stats.cardText2}
              </p>
              {stats.descriptor && (
                <p className="text-brand-cream 2240p:text-[1.2rem] max-sm:text-[10px] italic">
                  {stats.descriptor}
                </p>
              )}
            </div>
            <div className="max-sm:absolute inset-x-0">
              <Image
                src={stats.SVGIcon}
                alt={`${stats.cardTitle}`}
                className={`max-w-80 relative max-sm:absolute ${index === 0 ? "-top-10 max-sm:max-w-20 max-sm:-right-25 max-sm:-top-15" : index === 1 ? "-top-10 max-sm:max-w-20 max-sm:-right-20 max-sm:-top-15" : index === 2 ? "-top-20 max-sm:-right-25 max-sm:max-w-30" : "-top-10 max-sm:max-w-20 max-sm:-right-12 max-sm:-top-15"}`}
              />
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default HomeStats;
