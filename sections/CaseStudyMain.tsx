import ShowcaseCard from "@/components/ShowcaseCard";
import { WorkCardData } from "@/lib/data";

const CaseStudyMain = () => {
  return (
    <div className="w-9/10 lg:max-xl:w-4/5 max-w-450 mx-auto pt-20 pb-40">
      <div>
        <div className="flex flex-col gap-30">
          {WorkCardData.map((card, index) => (
            <ShowcaseCard
              key={index}
              card={card}
              index={index}
              btnTxt="Read More"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyMain;
