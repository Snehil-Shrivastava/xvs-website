import HomeHeading from "@/sections/HomeHeading";
import HomeReel from "@/sections/HomeReel";
import HomeServices from "@/sections/HomeServices";
import HomeStats from "@/sections/HomeStats";
import HomeTestimonials from "@/sections/HomeTestimonials";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center items-center 2xl:h-screen h-150 max-sm:max-h-180">
        <HomeHeading />
      </div>
      <div className="h-screen max-sm:h-150">
        <HomeReel />
      </div>
      <div className="h-screen max-sm:h-auto">
        <HomeStats />
      </div>
      <div className="h-screen max-sm:h-200">
        <HomeServices />
      </div>
      <div className="h-screen max-sm:h-150">
        <HomeTestimonials />
      </div>
    </>
  );
};

export default HomePage;
