import Image from "next/image";
import { StaticImageData } from "next/image";

interface ImageEntry {
  src: StaticImageData;
  className?: string;
  containerClassName?: string;
}

type ImageLayout = "single" | "stacked";

const layoutWrapperMap: Record<ImageLayout, string> = {
  single: "w-full h-full",
  stacked: "w-full h-full flex flex-col gap-2",
};

const ImageRenderer = ({
  images,
  imageLayout,
}: {
  images: ImageEntry[];
  imageLayout: ImageLayout;
}) => {
  return (
    <div className={layoutWrapperMap[imageLayout]}>
      {images.map((img, i) => (
        <div key={i} className={img.containerClassName}>
          <Image
            src={img.src}
            alt=""
            fill={imageLayout === "stacked"} // use fill for overlap layouts
            className={img.className}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageRenderer;
