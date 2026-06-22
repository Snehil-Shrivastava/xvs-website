import CaseStudyPage from "@/page/CaseStudyPage";
import caseStudyBg from "@/videos/case studies.mp4";
import Video from "next-video";

const Page = () => {
  return (
    <div>
      <div
        // className="h-[65vh] max-sm:h-150 sm:max-lg:h-220 absolute z-0 inset-x-0 overflow-hidden brightness-50"
        className="h-[65vh] max-md:h-150 md:max-lg:h-220 absolute z-0 inset-x-0 overflow-hidden brightness-50"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent 95% 100%)",
        }}
      >
        <div className="overflow-hidden max-sm:w-[250vw] sm:max-md:w-[180vw] md:max-xl:w-[200vw] xl:max-1440p:w-[180vw] 1440p:max-1920p:w-[200vw] 1920p:max-2240p:w-[120vw]">
          <Video
            src={caseStudyBg}
            className="-scale-x-100 services-bg-container h-[90vh] max-xl:h-full"
            controls={false}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
      <CaseStudyPage />
    </div>
  );
};

export default Page;
