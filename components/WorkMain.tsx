import { WorkCardData } from "@/lib/data";
import ShowcaseCard from "./ShowcaseCard";

type WorkMainProps = {
  activeCategory: string | null;
};

const WorkMain = ({ activeCategory }: WorkMainProps) => {
  const workCards = activeCategory
    ? WorkCardData.filter((card) => card.category.includes(activeCategory))
    : WorkCardData;
  return (
    <div className="w-450 max-w-450 mx-auto pt-20 pb-40">
      <div className="flex flex-col gap-30">
        {workCards.map((card, index) => (
          <ShowcaseCard key={index} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkMain;
