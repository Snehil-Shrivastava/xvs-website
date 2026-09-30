import WorkPageHeading from "@/sections/WorkPageHeading";
import WorkShowcase from "@/sections/WorkShowcase";
import { Suspense } from "react";

type Props = {
  searchParams: Promise<{ category?: string | string[] }>;
};

const WorkPage = async ({ searchParams }: Props) => {
  const { category } = (await searchParams) ?? {};
  const initialCategory = Array.isArray(category) ? category[0] : category;
  return (
    <div className="relative z-1">
      <div className="h-screen">
        <WorkPageHeading />
      </div>
      <div className="min-h-screen work-showcase">
        {/* <Suspense fallback={null}>
          <WorkShowcase />
        </Suspense> */}
        <WorkShowcase initialCategory={initialCategory ?? null} />
      </div>
    </div>
  );
};

export default WorkPage;
