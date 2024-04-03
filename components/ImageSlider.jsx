import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function ImageSlider({ url }) {
  return (
    <div
      className="relative group aspect-square
     bg-cardBg overflow-hidden rounded-xl p-4"
    >
      <Swiper className="w-full h-full">
        <SwiperSlide className="relative -z-10 h-full w-full">
          <Image
            src="/pngegg (10).png"
            alt="product image"
            fill
            loading="eager"
            className="-z-10 h-full w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
