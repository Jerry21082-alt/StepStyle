import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

export default function ImageSlider({ urls }) {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideConfig, setSlideConfig] = useState({
    isBegining: true,
    isEnding: activeIndex === urls.length - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBegining: activeIndex === 0,
        isEnding: activeIndex === urls.length - 1,
      });
    });
  }, [swiper, urls]);

  const inactiveButton = "hidden text-gray-400";
  const activeButton =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1-2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full border-2 bg-white border-zinc-300";

  return (
    <div
      className="relative group aspect-square
   bg-zinc-100 overflow-hidden rounded-xl"
    >
      <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-1 transition">
        <button
          onClick={(e) => {
            e.preventDefault();
            swiper?.slideNext();
          }}
          className={`${activeButton} ${
            slideConfig.isEnding
              ? inactiveButton
              : "hover:bg-primary-300 text-primary-800 opacity-100"
          } `}
          aria-label="next image"
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>chevron-right</title>
            <path d="M9.163 4.516c0.418 0.408 4.502 4.695 4.502 4.695 0.223 0.219 0.335 0.504 0.335 0.789s-0.112 0.57-0.335 0.787c0 0-4.084 4.289-4.502 4.695-0.418 0.408-1.17 0.436-1.615 0-0.446-0.434-0.481-1.041 0-1.574l3.747-3.908-3.747-3.908c-0.481-0.533-0.446-1.141 0-1.576s1.197-0.409 1.615 0z"></path>
          </svg>
        </button>
      </div>

      <Swiper
        className="w-full h-full"
        onSwiper={(swiper) => setSwiper(swiper)}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
      >
        {urls.map((url, i) => (
          <SwiperSlide key={i} className="relative -z-10 h-full w-full">
            <Image
              src={`/${url}`}
              alt="product image"
              fill
              loading="eager"
              className="-z-10 h-6 w-6 bg-cardBg p-4"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
