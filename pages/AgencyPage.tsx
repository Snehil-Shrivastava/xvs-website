import AgencyClients from "@/sections/AgencyClients";
import AgencyHeading from "@/sections/AgencyHeading";
import AgencyServices from "@/sections/AgencyServices";
import AgencyStats from "@/sections/AgencyStats";

const AgencyPage = () => {
  return (
    <div className="relative z-5 flex flex-col gap-80 pb-80">
      <div className="h-screen">
        <AgencyHeading />
      </div>
      <div>
        <AgencyStats />
      </div>
      <div>
        <AgencyClients />
      </div>
      <div>
        <AgencyServices />
      </div>
    </div>
  );
};

export default AgencyPage;
