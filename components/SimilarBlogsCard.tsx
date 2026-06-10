import Image from "next/image";
import BlogButton from "./BlogButton";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
    <Link href={`/blogs/${slug}`} className="flex flex-col gap-6 font-poppins">
      <div className="relative w-full aspect-[2.3]">
        <div className="absolute inset-0 bg-brand-orange/10 similar-blog-img-container" />
        <Image
          src={coverImage}
          alt="image"
          fill
          className="object-cover similar-blog-img"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <h4 className="font-semibold text-base">{title}</h4>
        <span className="text-neutral-400">{tag}</span>
      </div>
      <div>
        <BlogButton
          buttonText="Read More"
          buttonIcon={
            <ArrowUpRight
              strokeWidth={1}
              className="max-1440p:w-5 max-md:w-4"
            />
          }
          buttonLink={`/blogs/${slug}`}
        />
      </div>
    </Link>
  );
};

export default SimialrBlogsCard;
