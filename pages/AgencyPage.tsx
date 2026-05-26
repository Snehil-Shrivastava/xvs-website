import AgencyClients from "@/sections/AgencyClients";
import AgencyHeading from "@/sections/AgencyHeading";
import AgencyServices from "@/sections/AgencyServices";
import AgencyStats from "@/sections/AgencyStats";
import AgencyUSP from "@/sections/AgencyUSP";
import AgencyWorkflow from "@/sections/AgencyWorkflow";

const AgencyPage = () => {
  return (
    <div className="relative z-5 flex flex-col gap-80 max-md:gap-40 pb-80">
      <div className="h-screen max-md:h-auto">
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
      <div>
        <AgencyUSP />
      </div>
      <div>
        <AgencyWorkflow />
      </div>
    </div>
  );
};

export default AgencyPage;
