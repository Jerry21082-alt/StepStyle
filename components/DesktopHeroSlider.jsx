"use client";

import React, { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";

export default function DesktopHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slide1 = [
    {
      image: "/pexels-wesleydavi-7116191 (1).jpg",
      title: "Elevate Your Look with Our Sneaker Sanctuary",
      btnText: "Explore",
    },
    {
      image: "/pexels-biola-visuals-415017893-16499261 (1).jpg",
      title: "Feel the Unreal, Match your Style",
      btnText: "Shop Now",
    },
  ];

  const slide2 = [
    {
      image: "/pexels-ollivves-1103830 (1).jpg",
      title: "Elevate Your Look with Our Sneaker Sanctuary",
      btnText: "Explore",
    },
    {
      image: "/pexels-wendelmoretti-1972115 (1).jpg",
      title: "Feel the Unreal, Match your Style",
      btnText: "Shop Now",
    },
  ];
  const slide3 = [
    {
      image: "/pexels-godisable-jacob-226636-1346187 (1).jpg",
      title: "Elevate Your Look with Our Sneaker Sanctuary",
      btnText: "Explore",
    },
    {
      image: "/pexels-ralph-rabago-3214701 (1).jpg",
      title: "Feel the Unreal, Match your Style",
      btnText: "Shop Now",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slide1.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slide1.length]);

  return (
    <div className="hidden h-[600px] w-full md:flex">
      <div className="h-full w-full relative">
        {slide1.map((item, idx) => (
          <div
            style={{ backgroundImage: `url("${item.image}")` }}
            key={idx}
            className={`slider-item absolute top-0 left-0 w-full h-full ${
              currentIndex === idx ? "active" : ""
            }`}
          />
        ))}
      </div>

      <div className="h-full w-full relative">
        {slide2.map((item, idx) => (
          <div
            style={{ backgroundImage: `url("${item.image}")` }}
            key={idx}
            className={`slider-item absolute top-0 left-0 w-full h-full ${
              currentIndex === idx ? "active" : ""
            }`}
          />
        ))}
      </div>
      <div className="h-full w-full relative">
        {slide3.map((item, idx) => (
          <div
            style={{ backgroundImage: `url("${item.image}")` }}
            key={idx}
            className={`slider-item absolute top-0 left-0 w-full h-full ${
              currentIndex === idx ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
