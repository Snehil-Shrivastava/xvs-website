import Image from "next/image";
import ClutchLogo from "@/components/ClutchLogo";
import Link from "next/link";
import scheduleMeetingSVG from "@/public/svg/schedule-meeting-svg.svg";
import ratingCardSVG from "@/public/svg/rating-card-svg.svg";

const AgencyStats = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-350 w-4/5 mx-auto relative font-calSans">
        <div
          className="absolute bg-neutral-500 inset-0 z-0"
          style={{
            clipPath: `Polygon(0 8%, 0 100%, 97% 100%, 100% 92%, 100% 0, 3% 0)`,
          }}
        />
        <div
          className="bg-background relative py-20"
          style={{
            clipPath: `Polygon(1px 8%, 1px calc(100% - 1px), 30% 100%, 60% 100%, 70% calc(100% - 1px), 97% calc(100% - 1px), calc(100% - 1px) 92%, calc(100% - 1px) 60%, 100% 40%, 100% 0, 60% 0, 3% 1px)`,
          }}
        >
          <div className="w-4/5 mx-auto grid grid-cols-2 gap-x-65 gap-y-25 relative">
            <hr className="absolute top-1/2 -translate-y-1/2 w-full h-px border-brand-orange/50" />
            <hr className="absolute left-1/2 -translate-x-1/2 h-full w-px border-l border-brand-orange/50" />
            <div className="flex gap-20 items-center">
              <div className="relative">
                <span className="text-brand-orange text-8xl">4.8</span>
                <Image
                  src={ratingCardSVG}
                  alt=""
                  className="absolute w-12 -top-5 -right-15"
                />
              </div>
              <div>
                <span className="text-2xl font-medium">Rated on</span>
                <ClutchLogo width="112" height="40" />
              </div>
            </div>
            <div className="flex gap-15 items-center">
              <div>
                <span className="text-brand-orange text-8xl">19</span>
                <span className="text-8xl">+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-medium">Verified</span>
                <span className="text-5xl font-medium">Reviews</span>
              </div>
            </div>
            <div className="flex gap-15 items-center justify-start">
              <div className="flex flex-col-reverse">
                <span className="text-2xl font-medium">Since</span>
                <span className="text-5xl font-medium">Trusted</span>
              </div>
              <div>
                <span className="text-brand-orange text-8xl">2014</span>
              </div>
            </div>
            <div>
              <Link
                href={{ query: { category: "schedule-meeting" } }}
                className="flex items-center text-nowrap bg-brand-orange px-9 py-6 rounded-[72px] text-4xl gap-6 font-semibold cursor-pointer select-none"
              >
                <Image src={scheduleMeetingSVG} alt="schedule a meeting" />
                <div className="flex flex-col">
                  <span className="tracking-wider">Book a 15min</span>
                  <span className="font-medium text-3xl">Intro Call</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyStats;
