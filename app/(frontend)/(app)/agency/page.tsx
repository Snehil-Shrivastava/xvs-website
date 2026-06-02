import BgVideo from "@/components/BgVideo";
import AgencyPage from "@/pages/AgencyPage";

import agencyBg from "@/videos/agenciesBg.mp4";

const Agency = () => {
  return (
    <div>
      <div
        className="h-screen max-sm:h-150 sm:max-lg:h-220 absolute z-0 inset-x-0 overflow-hidden brightness-50"
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent 95% 100%)",
        }}
      >
        <BgVideo bgVideo={agencyBg} />
      </div>
      <AgencyPage />
    </div>
  );
};

export default Agency;
