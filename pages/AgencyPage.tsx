import AgencyClients from "@/sections/AgencyClients";
import AgencyHeading from "@/sections/AgencyHeading";
import AgencyStats from "@/sections/AgencyStats";

const AgencyPage = () => {
  return (
    <div className="relative z-5">
      <div className="h-screen">
        <AgencyHeading />
      </div>
      <div className="h-screen">
        <AgencyStats />
      </div>
      <div className="h-screen">
        <AgencyClients />
      </div>
    </div>
  );
};

export default AgencyPage;
