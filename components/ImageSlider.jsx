import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function ImageSlider({ url }) {
  return (
    //   <div
    //     className="relative group aspect-square
    //  bg-zinc-100 overflow-hidden rounded-xl"
    //   >
    //     <Swiper className="w-full h-full">
    //       <SwiperSlide className="relative -z-10 h-full w-full">
    //         <Image
    //           src={`/${url}`}
    //           alt="product image"
    //           fill
    //           loading="eager"
    //           className="-z-10 h-full w-full object-cover object-center"
    //         />
    //       </SwiperSlide>
    //     </Swiper>
    //   </div>
    <Image src='pngegg (1).png'/>
  );
}
