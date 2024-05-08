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
    <div className="hidden relative h-[600px] w-full md:flex">
      <div className="absolute -bottom-5 left-[5vw] z-30 h-full w-full">
        <div className=" absolute bottom-[25vh]">
          <h1 className="text-snow text-5xl">SIMBA</h1>
          <h5 className="text-snow">For any and every look</h5>

          <div className="flex items-center space-x-4 mt-5">
            <button className="flex items-center space-x-2 py-1 uppercase px-4  bg-snow">
              <span className="text-black text-sm">Shop Men</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                id="arrow-narrow-right"
              >
                <path
                  fill="#000"
                  d="M17.8536 17.3536C17.6583 17.5488 17.3417 17.5488 17.1464 17.3536C16.9512 17.1583 16.9512 16.8417 17.1464 16.6464L21.2928 12.5H1.5C1.22386 12.5 1 12.2761 1 12C1 11.7239 1.22386 11.5 1.5 11.5H21.2928L17.1464 7.35355C16.9512 7.15829 16.9512 6.84171 17.1464 6.64645C17.3417 6.45118 17.6583 6.45119 17.8536 6.64645L22.8535 11.6464C23.0488 11.8417 23.0488 12.1583 22.8535 12.3536L17.8536 17.3536Z"
                ></path>
              </svg>
            </button>
            <button className="flex items-center space-x-2 py-1 uppercase px-4  bg-snow">
              <span className="text-black text-sm">Shop Women</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                id="arrow-narrow-right"
              >
                <path
                  fill="#000"
                  d="M17.8536 17.3536C17.6583 17.5488 17.3417 17.5488 17.1464 17.3536C16.9512 17.1583 16.9512 16.8417 17.1464 16.6464L21.2928 12.5H1.5C1.22386 12.5 1 12.2761 1 12C1 11.7239 1.22386 11.5 1.5 11.5H21.2928L17.1464 7.35355C16.9512 7.15829 16.9512 6.84171 17.1464 6.64645C17.3417 6.45118 17.6583 6.45119 17.8536 6.64645L22.8535 11.6464C23.0488 11.8417 23.0488 12.1583 22.8535 12.3536L17.8536 17.3536Z"
                ></path>
              </svg>
            </button>
            <button className="flex items-center space-x-2 py-1 uppercase px-4  bg-snow">
              <span className="text-black text-sm">Shop Kids</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                id="arrow-narrow-right"
              >
                <path
                  fill="#000"
                  d="M17.8536 17.3536C17.6583 17.5488 17.3417 17.5488 17.1464 17.3536C16.9512 17.1583 16.9512 16.8417 17.1464 16.6464L21.2928 12.5H1.5C1.22386 12.5 1 12.2761 1 12C1 11.7239 1.22386 11.5 1.5 11.5H21.2928L17.1464 7.35355C16.9512 7.15829 16.9512 6.84171 17.1464 6.64645C17.3417 6.45118 17.6583 6.45119 17.8536 6.64645L22.8535 11.6464C23.0488 11.8417 23.0488 12.1583 22.8535 12.3536L17.8536 17.3536Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
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
