import GlowCard from "@/components/Glowcard";
import { HomeStatsData } from "@/lib/data";
import Image from "next/image";

const HomeStats = () => {
  const homeStats = HomeStatsData;

  return (
    <div className="flex items-center justify-center h-full">
      <div className="grid grid-cols-2 gap-15">
        {homeStats.map((stats, index) => (
          <GlowCard
            key={index}
            className={`${stats.cardTitle}-stat max-h-120`}
            index={index}
          >
            <div>
              <h3 className="text-xl font-semibold text-brand-cream 2240p:text-[38px]">
                {stats.cardTitle}
              </h3>
              <span className="font-calSans 2240p:text-[8rem]/[8.5rem] text-brand-orange">
                {stats.cardStat}
              </span>
              <p className="text-brand-cream 2240p:text-[28px]/[32px]">
                {stats.cardText1}
              </p>
              <p className="text-brand-cream 2240p:text-[28px]/[32px]">
                {stats.cardText2}
              </p>
              {stats.descriptor && (
                <p className="text-brand-cream 2240p:text-[1.2rem] italic">
                  {stats.descriptor}
                </p>
              )}
            </div>
            <div>
              <Image
                src={stats.SVGIcon}
                alt={`${stats.cardTitle}`}
                className={`max-w-80 relative ${index === 2 ? "-top-20" : "-top-10"}`}
              />
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
};

export default HomeStats;
