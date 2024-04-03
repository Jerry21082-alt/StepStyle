"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductList({ product }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link
      href={`/productDetails/${product.id}`}
      className={`h-full cursor-pointer group/main`}
    >
      <div className="flex flex-col w-full group">
        <div
          className="relative group aspect-square
     bg-cardBg overflow-hidden rounded-xl p-4"
        >
          <Image
            src="/pngegg (4).png"
            alt="product image"
            fill
            loading="eager"
            className="z-10 h-full w-full"
          />
        </div>
        <h3 className="mt-4 font-medium text-sm">
          {product.product_description.length > 25
            ? product.product_description.substring(0, 25).concat("...")
            : product.product_description}
        </h3>

        <p className="mt-1 font-medium text-sm">${product.product_price}</p>
      </div>

      <div className="flex items-center mt-1">
        {product.rating.map((star) => (
          <svg
            key={star}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#fe5d26"
          >
            <title>star</title>
            <path d="M9.362 9.158c0 0-3.16 0.35-5.268 0.584-0.19 0.023-0.358 0.15-0.421 0.343s0 0.394 0.14 0.521c1.566 1.429 3.919 3.569 3.919 3.569-0.002 0-0.646 3.113-1.074 5.19-0.036 0.188 0.032 0.387 0.196 0.506 0.163 0.119 0.373 0.121 0.538 0.028 1.844-1.048 4.606-2.624 4.606-2.624s2.763 1.576 4.604 2.625c0.168 0.092 0.378 0.090 0.541-0.029s0.232-0.318 0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191s2.353-2.14 3.919-3.566c0.14-0.131 0.202-0.332 0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375 0.122-0.453 0.294c-0.874 1.932-2.183 4.83-2.183 4.83z"></path>
          </svg>
        ))}
      </div>

      <button className="mt-2 bg-secondaryColor py-2 px-4 rounded-3xl text-snow text-sm">
        Add to cart
      </button>
    </Link>
  );
}
