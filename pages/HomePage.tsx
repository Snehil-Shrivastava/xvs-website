import HomeHeading from "@/sections/HomeHeading";
import HomeReel from "@/sections/HomeReel";
import HomeServices from "@/sections/HomeServices";
import HomeStats from "@/sections/HomeStats";

const HomePage = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center h-screen">
        <HomeHeading />
      </div>
      <div className="h-screen">
        <HomeReel />
      </div>
      <div className="h-screen">
        <HomeStats />
      </div>
      <div className="h-screen">
        <HomeServices />
      </div>
    </div>
  );
};

export default HomePage;
