"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Slider({ title, products }) {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight((ref.current.clientWidth * 1) / 1);
  }, [ref]);

  return (
    <div className="mt-8 w-full">
      <div className="flex justify-between w-full">
        <h4 className="ml-4 mb-4">{title}</h4>
        <Link href='/'  className="see relative text-xs mr-4">See All</Link>
      </div>
      <div className="media-scroller snaps-inline">
        {products.slice(0, 8).map((product, i) => (
          <div className="media-element" key={i}>
            <div
              style={{ height: `${height}px` }}
              ref={ref}
              className="bg-cardBg w-40 h-40 aspect-square p-4 rounded-xl flex items-center justify-center"
            >
              <Image
                src={product.product_photo}
                width={500}
                height={500}
                alt="product image"
              />
            </div>
            <span className="truncate mt-2 text-sm">
              {product.product_description}
            </span>
            <h4 className="mt-2 text-sm">${product.product_price}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
