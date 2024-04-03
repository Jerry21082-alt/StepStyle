import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function ImageSlider({ urls }) {
  return (
    <div
      className="relative group aspect-square
   bg-cardColor overflow-hidden rounded-xl"
    >
      <div className="w-full h-full">
        {urls.map((url, i) => (
          <div key={i} className="relative -z-10 h-full w-full">
            <Image
              src={`/${url}`}
              alt="product image"
              fill
              loading="eager"
              className="-z-10 h-6 w-6 bg-cardBg p-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
