"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AspectRatioContainer from "./AspectRatioContainer";

export default function Slider({ title, products }) {
  const containerRef = useRef(null);
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 500;
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 500;
    }
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="flex justify-between w-full mt-12">
        <h2 className="mb-4 text-2xl md:text-5xl ml-20">{title}</h2>
        <Link href="/" className="see relative text-xs mr-4">
          See All
        </Link>
      </div>

      <div className="relative w-full">
        <div
          className="w-10 h-10 bg-buttonColor rounded-full absolute top-1/2 left-16 -translate-y-1/2 flex items-center justify-center cursor-pointer active:scale-75 transition"
          onClick={handleScrollLeft}
          style={{ display: products.length > 1 ? "flex" : "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            id="chevron"
            width={15}
            fill="#FFFFFF"
          >
            <path d="M13.891 17.418a.697.697 0 0 1 0 .979.68.68 0 0 1-.969 0l-7.83-7.908a.697.697 0 0 1 0-.979l7.83-7.908a.68.68 0 0 1 .969 0 .697.697 0 0 1 0 .979L6.75 10l7.141 7.418z"></path>
          </svg>
        </div>
        <div
          className="media-scroller snaps-inline scroll-smooth ease-linear space-x-2"
          ref={containerRef}
        >
          {products.slice(0, 8).map((product, i) => (
            <div className="media-element" key={i}>
              <AspectRatioContainer
                aspectRatio={6 / 6}
                className="bg-white w-[50vw] md:w-[30vw] rounded p-4 flex items-center justify-center"
              >
                <div className="flex justify-center items-center h-full w-full">
                  <Image
                    src={`/${product.photos.main}`}
                    width={500}
                    height={500}
                    alt="product image"
                  />
                </div>
              </AspectRatioContainer>
              <span className="truncate mt-2 text-sm">{product.name}</span>
              <h4 className="mt-2 text-sm">${product.price}</h4>
            </div>
          ))}
        </div>
        <div
          className="w-10 h-10 bg-buttonColor rounded-full absolute top-1/2 right-16 -translate-y-1/2 flex items-center justify-center cursor-pointer active:scale-75 transition"
          onClick={handleScrollRight}
          style={{ display: products.length > 1 ? "flex" : "none" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            id="chevron"
            width={15}
            fill="#FFFFFF"
          >
            <path d="M13.25 10 6.109 2.58a.697.697 0 0 1 0-.979.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0 .697.697 0 0 1 0-.979L13.25 10z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
