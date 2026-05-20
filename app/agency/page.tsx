import BgVideo from "@/components/BgVideo";
import AgencyPage from "@/pages/AgencyPage";

import agencyBg from "@/videos/agenciesBg.mp4";

const Agency = () => {
  return (
    <div>
      <div className="h-screen absolute z-0 inset-x-0 overflow-hidden brightness-50">
        <BgVideo bgVideo={agencyBg} />
      </div>
      <AgencyPage />
    </div>
  );
};

export default Agency;
