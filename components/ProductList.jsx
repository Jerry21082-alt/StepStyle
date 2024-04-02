"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";

export default function ProductList({ product }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Link
      href={`/productDetails/${product.id}`}
      className={`h-full cursor-pointer group/main`}
    >
      <div className="flex flex-col w-full group">
        <ImageSlider urls={[product.product_photo]} />
        <h3 className="mt-4 font-medium text-red-600 group-hover:text-white">
          {product.product_description.length > 25
            ? product.product_description.substring(0, 25).concat("...")
            : product.product_description}
        </h3>
        <p className="mt-1 text-sm text-red-600 group-hover:text-white">
          {/* {newLabel} */}
        </p>
        <p className="mt-1 font-medium text-sm text-red-500 group-hover:text-white">
          ${product.product_price}
        </p>
      </div>

      <button className="mt-4 bg-secondaryColor py-2 px-4 rounded-3xl text-snow">
        Add to cart
      </button>
    </Link>
  );
}
