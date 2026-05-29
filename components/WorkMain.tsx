import { WorkCardData } from "@/lib/data";
import ShowcaseCard from "./ShowcaseCard";

type WorkMainProps = {
  activeCategories: string[];
};

const WorkMain = ({ activeCategories }: WorkMainProps) => {
  const workCards =
    activeCategories.length === 0
      ? WorkCardData
      : WorkCardData.filter((card) =>
          activeCategories.every((cat) => card.category.includes(cat)),
        );
  return (
    <div className="w-9/10 max-w-450 mx-auto pt-20 pb-40">
      <div className="flex flex-col gap-30">
        {workCards.map((card, index) => (
          <ShowcaseCard key={index} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkMain;
