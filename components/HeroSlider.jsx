"use client";

import React, { useEffect, useState } from "react";

export default function HeroSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden bock md:hidden">
      {slides.map((slide, idx) => (
        <div
          className={`slider-item absolute top-0 left-0 w-full h-full ${
            idx === currentIndex ? "active" : ""
          }`}
          key={idx}
          style={{ backgroundImage: `url("${slide.image}")` }}
        >
          <div className="content max-w-xs">
            <h1 className="hero-heading text-snow text-3xl md:text-5xl">
              {slide.title}
            </h1>

            <button className="mt-8 bg-black py-1 px-3 rounded-3xl">
              {slide.btnText}
            </button>
          </div>

          <div className="w-full flex md:hidden items-center justify-center space-x-2 absolute bottom-4">
            {slides.map((value, index) => (
              <div
                key={index}
                className={`${
                  index === currentIndex ? "bg-secondaryColor" : "bg-snow"
                } h-2 w-2 rounded-full`}
                style={{ transition: "background-color 1s ease" }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
