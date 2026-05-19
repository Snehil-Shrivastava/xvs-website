import SectionHeading from "@/components/SectionHeading";
import { AboutMembersData } from "@/lib/data";
import Image from "next/image";

const AboutMembers = () => {
  const membersData = AboutMembersData;
  return (
    <div className="flex flex-col items-center gap-10">
      <SectionHeading
        headingText="Members"
        buttonText="team"
        desc="A job worth doing is worth doing together..."
      />
      <div className="py-15 gap-30 w-4/5 mx-auto grid grid-cols-4">
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
            <div className="text-center flex flex-col gap-3">
              <h3 className="font-calSans text-3xl">{member.name}</h3>
              <span className="text-xl font-light">{member.designation}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMembers;
