"use client";

import { useEffect, useRef, useState } from "react";
import AspectRatioContainer from "./AspectRatioContainer";
import { stateFunc } from "./stateContent/UseStateContext";

export default function Hero() {
  const { setHeight } = stateFunc();
  const ref = useRef(null);

  useEffect(() => {
    const newHeight = ref.current.clientHeight;
    setHeight(newHeight);
  }, [ref]);

  return (
    // <AspectRatioContainer className={`hero-section`} aspectRatio={1/ 1}>
    <section className="hero-section h-[60vh] md:h-[70vh]" ref={ref}>
      <div className="absolute top-1/3 left-0 right-12 bottom-0 z-20 p-5 h-full">
        <h1 className="text-snow text-3xl">
          StepStyle: Your Ultimate Destination for Sneakerheads
        </h1>

        <button className="mt-12 border-2 border-snow py-1 px-4 rounded-3xl text-snow">
          Explore
        </button>
      </div>
    </section>
    // </AspectRatioContainer>
  );
}
