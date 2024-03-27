"use client";

import Image from "next/image";
import { sneaker1 } from "@/public/sneaker-assets";
import SearchProduct from "./SearchProduct";
import { stateFunc } from "./stateContent/UseStateContext";

export default function Hero() {
  const { searchFocus, searched } = stateFunc();

  return (
    <div className="hero w-full py-[2rem] px-[2rem] md:px-[4rem] md:py-[2rem] flex gap-5 md:gap-[10rem] items-center justify-center md:justify-start bg-secondaryColor  md:mt-[7%]">
      <div>
        <h1 className="text-3xl md:text-[54px] leading-10 md:leading-[52px] text-snow flex-1 font-bold md:w-[420px]">
          Grab Upto 50% off on selected sneakers!
        </h1>
        <button className="outline-none border-none bg-heroColor text-snow text-sm mt-5 md:mt-10 py-2 px-5 rounded-3xl">
          Buy Now
        </button>
      </div>
      <div>
        <Image src={sneaker1} alt="sneaker photo" />
      </div>
      {searchFocus && <SearchProduct />}
    </div>
  );
}
