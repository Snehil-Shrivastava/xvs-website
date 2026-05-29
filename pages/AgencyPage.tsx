import AgencyBenefits from "@/sections/AgencyBenefits";
import AgencyBudgetRange from "@/sections/AgencyBudgetRange";
import AgencyClients from "@/sections/AgencyClients";
import AgencyEngagementModel from "@/sections/AgencyEngagementModel";
import AgencyHeading from "@/sections/AgencyHeading";
import AgencyIntegration from "@/sections/AgencyIntegration";
import AgencyProcess from "@/sections/AgencyProcess";
import AgencyServices from "@/sections/AgencyServices";
import AgencyStats from "@/sections/AgencyStats";
import AgencyTestimonials from "@/sections/AgencyTestimonials";
import AgencyUSP from "@/sections/AgencyUSP";
import AgencyWorkflow from "@/sections/AgencyWorkflow";

const AgencyPage = () => {
  return (
    <div className="relative z-5 flex flex-col gap-80 max-md:gap-40 md:max-lg:gap-45 pb-80">
      <div className="h-screen max-lg:h-auto">
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
      <div>
        <AgencyIntegration />
      </div>
      <div>
        <AgencyBudgetRange />
      </div>
      <div>
        <AgencyProcess />
      </div>
      <div>
        <AgencyTestimonials />
      </div>
      <div>
        <AgencyEngagementModel />
      </div>
      <div>
        <AgencyBenefits />
      </div>
    </div>
  );
};

export default AgencyPage;
