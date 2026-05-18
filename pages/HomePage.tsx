import HomeHeading from "@/sections/HomeHeading";
import HomeReel from "@/sections/HomeReel";
import HomeServices from "@/sections/HomeServices";
import HomeStats from "@/sections/HomeStats";
import HomeTestimonials from "@/sections/HomeTestimonials";

const HomePage = () => {
  return (
    <>
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
      <div className="h-screen">
        <HomeTestimonials />
      </div>
    </>
  );
};

export default HomePage;
