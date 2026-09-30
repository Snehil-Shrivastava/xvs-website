import SchemaMarkup from "@/components/SchemaMarkup";
import StarryBackground from "@/components/StarryBackground";
import WorkPage from "@/page/WorkPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase | xVS Creations",
  description:
    "See xVS Creations’ portfolio featuring branding campaigns, UI/UX for mobile and web, responsive websites, custom motion graphics, and 3D animation projects.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Work",
  url: "https://xvscreations.com/work",
  description:
    "Explore our portfolio featuring branding campaigns, UI/UX for mobile and web, responsive websites, custom motion graphics, and 3D animation projects.",
};

type searchParams = Promise<{ category?: string | string[] }>;

const Work = ({ searchParams }: { searchParams: searchParams }) => {
  return (
    <div>
      <SchemaMarkup schema={schema} />
      <div className="h-screen absolute inset-x-0 z-0">
        <StarryBackground
          starCount={150}
          minSpeed={0.002}
          maxSpeed={0.004}
          wanderDistance={150}
        />
      </div>
      <WorkPage searchParams={searchParams} />
    </div>
  );
};

export default Work;
