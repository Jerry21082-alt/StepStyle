"use client";

import Image from "next/image";
import SearchProduct from "./SearchProduct";
import { stateFunc } from "./stateContent/UseStateContext";

export default function Hero() {
  const { searchFocus, searched } = stateFunc();

  return (
    <div className="w-full py-[2rem] px-[2rem] md:px-[4rem] md:py-[2rem] flex gap-5 md:gap-[10rem] items-center justify-center md:justify-start bg-secondaryColor  md:mt-[7%]">
      <div className="flex-1">
        <h1 className="text-3xl md:text-[54px] md:leading-[52px] text-snow font-bold">
          Grab Upto 50% off on selected sneakers!
        </h1>
        <button className="outline-none border-none bg-heroColor text-snow text-sm mt-5 md:mt-10 py-2 px-5 rounded-3xl">
          Buy Now
        </button>
      </div>
      <div className="relative w">
        <Image
          src="/pngegg (1).png"
          alt="sneaker photo"
          width={500}
          height={500}
        />
      </div>
      {searchFocus && <SearchProduct />}
    </div>
  );
}
