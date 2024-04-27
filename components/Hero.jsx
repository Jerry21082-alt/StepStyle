"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setHeight((ref.current.clientWidth * 1) / 1);
    }
  }, [ref]);

  return (
    <div className="hero-section" ref={ref} style={{ height: `${height}px` }}>
      <div className="h-full w-full top-0 left-0 right-0 bottom-0 z-20 p-5">
        <h1 className="text-snow top-24 z-50 absolute">
          KicksSpot: Your Ultimate Destination for Sneakerheads
        </h1>

        <button className="absolute bottom-12 border-2 border-snow py-1 px-4 rounded-3xl text-snow">
          Explore
        </button>
      </div>
    </div>
  );
}
