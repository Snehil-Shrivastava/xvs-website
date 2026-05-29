import SectionHeading from "@/components/SectionHeading";
import { AboutMembersData } from "@/lib/data";
import Image from "next/image";

const AboutMembers = () => {
  const membersData = AboutMembersData;
  return (
    <div className="flex flex-col items-center gap-10 max-md:pb-40 md:max-lg:pb-50">
      <SectionHeading
        headingText="Members"
        buttonText="team"
        desc="A job worth doing is worth doing together..."
      />
      <div className="py-15 max-sm:py-6 md:max-lg:py-0 gap-30 w-4/5 md:max-xl:w-9/10 mx-auto grid grid-cols-4 max-md:grid-cols-2 md:max-xl:grid-cols-3 max-sm:gap-10 md:max-lg:gap-x-15 lg:max-xl:gap-x-15">
        {membersData.map((member, index) => (
          <div key={index} className="inline-flex flex-col gap-10">
            <div className="inline-block">
              <Image
                className="content-clip-both w-full mx-auto"
                src={member.image}
                alt={`${member.name}`}
                decoding="sync"
              />
            </div>
            <div className="text-center flex flex-col gap-3 max-md:gap-1.5">
              <h3 className="font-calSans text-3xl max-sm:text-lg sm:max-md:text-2xl md:max-lg:text-xl lg:max-xl:text-2xl">
                {member.name}
              </h3>
              <span className="text-xl font-poppins font-light max-sm:text-sm sm:max-md:text-base md:max-lg:text-base lg:max-xl:text-lg">
                {member.designation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMembers;
