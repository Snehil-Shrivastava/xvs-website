import WorkPageHeading from "@/sections/WorkPageHeading";
import WorkShowcase from "@/sections/WorkShowcase";
import { Suspense } from "react";

const WorkPage = () => {
  return (
    <div className="relative z-1">
      <div className="h-screen">
        <WorkPageHeading />
      </div>
      <div className="min-h-screen work-showcase">
        <Suspense fallback={null}>
          <WorkShowcase />
        </Suspense>
      </div>
    </div>
  );
};

export default WorkPage;

// --------------------------------- new
