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
    </div>
  );
};

export default AgencyPage;
