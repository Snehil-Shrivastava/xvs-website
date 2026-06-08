import HomeHeading from "@/sections/HomeHeading";
import HomeReel from "@/sections/HomeReel";
import HomeServices from "@/sections/HomeServices";
import HomeStats from "@/sections/HomeStats";
import HomeTestimonials from "@/sections/HomeTestimonials";

const HomePage = () => {
  return (
    // <div className="flex flex-col gap-50">
    //   <div className="flex justify-center items-center lg:h-screen h-150 md:max-lg:h-200">
    //     <HomeHeading />
    //   </div>
    //   <div className="h-screen max-sm:h-150 sm:max-md:h-220 md:max-lg:h-250">
    //     <HomeReel />
    //   </div>
    //   <div className="h-screen max-lg:h-auto">
    //     <HomeStats />
    //   </div>
    //   <div className="h-screen max-sm:h-200 sm:max-md:h-280 md:max-lg:h-300">
    //     <HomeServices />
    //   </div>
    //   <div className="h-screen max-sm:h-150 sm:max-lg:h-220 lg:max-xl:h-240">
    //     <HomeTestimonials />
    //   </div>
    // </div>
    <div className="flex flex-col gap-100 max-md:gap-30 md:max-lg:gap-40 lg:max-xl:gap-50 pb-50">
      <div className="flex justify-center items-center lg:h-screen h-150 md:max-lg:h-200">
        <HomeHeading />
      </div>
      <div className="h-auto">
        <HomeReel />
      </div>
      <div className="h-auto">
        <HomeStats />
      </div>
      <div className="h-auto">
        <HomeServices />
      </div>
      <div className="h-auto">
        <HomeTestimonials />
      </div>
    </div>
  );
};

export default HomePage;
