import HomeHeading from "@/sections/HomeHeading";
import HomeReel from "@/sections/HomeReel";

const HomePage = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center h-screen">
        <HomeHeading />
      </div>
      <div className="h-screen">
        <HomeReel />
      </div>
    </div>
  );
};

export default HomePage;
