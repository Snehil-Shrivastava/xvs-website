import HomeHeading from "@/sections/HomeHeading";
import HomeReel from "@/sections/HomeReel";
import HomeServices from "@/sections/HomeServices";
import HomeStats from "@/sections/HomeStats";
import HomeTestimonials from "@/sections/HomeTestimonials";

const HomePage = () => {
  return (
    <>
      <div className="flex justify-center items-center 2xl:h-screen h-150 md:max-lg:h-200">
        <HomeHeading />
      </div>
      <div className="h-screen max-sm:h-150 sm:max-md:h-220 md:max-lg:h-250">
        <HomeReel />
      </div>
      <div className="h-screen max-lg:h-auto">
        <HomeStats />
      </div>
      <div className="h-screen max-sm:h-200 sm:max-md:h-280 md:max-lg:h-300">
        <HomeServices />
      </div>
      <div className="h-screen max-sm:h-150 sm:max-lg:h-220">
        <HomeTestimonials />
      </div>
    </>
  );
};

export default HomePage;
