import { WorkCardData } from "@/lib/data";
import ShowcaseCard from "./ShowcaseCard";

const WorkMain = () => {
  const workCards = WorkCardData;
  return (
    <div className="w-450 max-w-450 mx-auto py-20">
      <div className="flex flex-col gap-30">
        {workCards.map((card, index) => (
          <ShowcaseCard key={index} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkMain;
