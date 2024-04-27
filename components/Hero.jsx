"use client";

import Image from "next/image";
import SearchProduct from "./SearchProduct";
import { stateFunc } from "./stateContent/UseStateContext";

export default function Hero() {
  const { searchFocus, searched } = stateFunc();

  return (
    <div className="hero-section">
      <div className="absolute top-0 right-0 bottom-0 left-0 z-20 p-5">
        <h1 className="text-snow z-10 mt-5">
          KicksSpot: Your Ultimate Destination for Sneakerheads
        </h1>

        <button className="mt-12 border-2 border-snow py-1 px-4 rounded-3xl text-snow">Explore</button>
      </div>
    </div>
  );
}
