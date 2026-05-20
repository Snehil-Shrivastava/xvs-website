import WorkPageHeading from "@/sections/WorkPageHeading";
import WorkShowcase from "@/sections/WorkShowcase";

const WorkPage = () => {
  return (
    <div className="relative z-1">
      <div className="h-screen">
        <WorkPageHeading />
      </div>
      <div className="min-h-screen work-showcase">
        <WorkShowcase />
      </div>
    </div>
  );
};

export default WorkPage;
