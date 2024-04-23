'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Slider({ title, products,}) {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight((ref.current.clientWidth * 1) / 1);
  }, [ref]);

  return (
    <div className="mt-8">
      <h1 className="ml-4 mb-4 text-2xl font-bold sm:text-3xl">{title}</h1>
      <div className="media-scroller snaps-inline">
        {products.slice(0, 8).map((product, i) => (
          <div className="media-element" key={i}>
            <div style={{height: `${height}px`}} ref={ref} className="bg-cardBg w-36 aspect-square p-4 rounded-lg flex items-center justify-center">
              <Image src={product.product_photo} width={500} height={500} alt='product image'/>
            </div>
            <span className="truncate mt-2 text-sm">
              {product.product_description}
            </span>
            <span className="mt-2 text-sm">${product.product_price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
