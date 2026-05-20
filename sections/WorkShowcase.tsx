import WorkCategoryFilter from "@/components/WorkCategoryFilter";
import { WorkCategories } from "@/lib/data";

const WorkShowcase = () => {
  const workCategories = WorkCategories;
  return (
    <>
      <WorkCategoryFilter categories={workCategories} />
    </>
  );
};

export default WorkShowcase;
