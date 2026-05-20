import WorkCategoryFilter from "@/components/WorkCategoryFilter";
import WorkMain from "@/components/WorkMain";
import { WorkCategories } from "@/lib/data";

const WorkShowcase = () => {
  const workCategories = WorkCategories;
  return (
    <>
      <WorkCategoryFilter categories={workCategories} />
      <WorkMain />
    </>
  );
};

export default WorkShowcase;
