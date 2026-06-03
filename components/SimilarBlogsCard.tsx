import Image from "next/image";
import BlogButton from "./BlogButton";
import { ArrowUpRight } from "lucide-react";

const SimialrBlogsCard = ({
  title,
  tag,
  coverImage,
  slug,
}: {
  title: string;
  tag: string;
  coverImage: string;
  slug?: string;
}) => {
  return (
    <div className="flex flex-col gap-6 font-poppins">
      <div className="relative w-full aspect-[2.3]">
        <Image
          src={coverImage}
          alt="image"
          fill
          className="object-cover btn-clip"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <h4 className="font-semibold text-base">{title}</h4>
        <span className="text-neutral-400">{tag}</span>
      </div>
      <div>
        <BlogButton
          buttonText="Read More"
          buttonIcon={<ArrowUpRight />}
          buttonLink={`/blogs/${slug}`}
        />
      </div>
    </div>
  );
};

export default SimialrBlogsCard;
