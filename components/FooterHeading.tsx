import Image from "next/image";
import scheduleMeetingSVG from "@/public/svg/schedule-meeting-svg.svg";

const FooterHeading = () => {
  return (
    <div className="border-b border-b-[rgba(247,152,57,0.3)] py-15">
      <div className="max-w-400 mx-auto flex justify-between items-center">
        <h2
          className={`text-[3.5rem]/[3.8rem] tracking-wider w-[52%] font-calSans md:flex md:flex-col select-none`}
        >
          <span>Let&#39;s start </span>
          <span>creating together</span>
        </h2>
        <button className="flex items-center text-nowrap bg-brand-orange px-9 py-6 rounded-[52px] text-4xl gap-6 font-semibold cursor-pointer select-none">
          <Image src={scheduleMeetingSVG} alt="schedule a meeting" />
          <span>Schedule A Meeting</span>
        </button>
      </div>
    </div>
  );
};

export default FooterHeading;
