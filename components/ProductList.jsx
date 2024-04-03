"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
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
        <div className="relative group bg-cardBg overflow-hidden rounded-xl aspect-square p-4 h-auto w-full">
          <Image
            src={product.product_photo}
            alt="product image"
            loading="eager"
            width={500}
            height={500}
            className="z-10 h-full w-full"
          />

          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 28 28"
            className="absolute top-4 right-4"
            fill="#fff"
          >
            <title>heart</title>
            <path d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z"></path>
          </svg>
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
