"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { stateFunc } from "./stateContent/UseStateContext";
import { useRouter } from "next/navigation";

export default function ProductList({ product, products }) {
  const {
    addToCart,
    cartItems,
    setNotify,
    setNotifyMsg,
    watchList,
    setWatchList,
    isMounted,
    addToViewRecent,
    recentlyViewed,
  } = stateFunc();

  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  const router = useRouter();

  const view = (id) => {
    router.push(`/products/${product.id}`);
    addToViewRecent(id);
  };

  useEffect(() => {
    setHeight((ref.current.clientWidth * 1) / 1);
  }, [ref]);

  const handleAddToCart = (product) => {
    const itemInCart = cartItems.some((item) => item.id === product.id);

    if (!itemInCart) {
      addToCart(product);
    } else {
      setNotify(true);
      setNotifyMsg("Item exist in cart");
    }
  };

  const toggleWatchList = (product) => {
    const productInWatchList = watchList.some((item) => item.id === product.id);

    if (productInWatchList) {
      setWatchList((prevWatchList) =>
        prevWatchList.filter((item) => item.id !== product.id)
      );
    } else {
      setWatchList((prevWatchList) => [...prevWatchList, product]);
    }
  };

  return (
    <div className={`h-full cursor-pointer group/main relative`}>
      <div
        // href={`/products/${product.id}`}
        className="flex flex-col w-full group"
      >
        <div
          className="flex items-center justify-center group bg-cardBg overflow-hidden rounded-xl p-4 aspect-square"
          ref={ref}
          style={{ height: `${height}px` }}
          onClick={() => view(product)}
        >
          <div className="flex items-center justify-center">
            <Image
              src={`/${product.photos.main}`}
              alt="product image"
              loading="eager"
              width={500}
              height={500}
              className="object-contain object-center"
            />
          </div>
        </div>
        <div
          className="w-8 h-8 rounded-full absolute top-3 right-3 bg-snow flex items-center justify-center z-20"
          onClick={() => toggleWatchList(product)}
        >
          <div className="h-4 w-4 flex items-center justify-center">
            {isMounted && watchList.some((item) => item.id === product.id) ? (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="#000000"
              >
                <title>heart</title>
                <path d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                id="heart"
              >
                <path
                  fill="#000000"
                  d="M27.657 5.343a8 8 0 0 0-11.314 0L16 5.715l-.343-.372A8 8 0 0 0 4.343 16.657l.778.843.675.731 9.518 10.312.686.742.686-.743 9.518-10.312.675-.731.778-.843a8 8 0 0 0 0-11.313zm-.545 10.445l-.908.982-.676.73L16 27.801 6.472 17.5l-.676-.731-.908-.982a6.77 6.77 0 0 1 0-9.575l.324-.324a6.77 6.77 0 0 1 9.575 0l.527.569.686.742.686-.741.527-.569a6.77 6.77 0 0 1 9.575 0l.324.324a6.77 6.77 0 0 1 0 9.575z"
                ></path>
              </svg>
            )}
          </div>
        </div>

        <h3 className="mt-4 font-medium text-sm">{product.name}</h3>

        <h4 className="mt-1 font-medium text-sm">${product.price}</h4>
      </div>

      <div className="flex items-center mt-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <title>star</title>
            <path d="M9.362 9.158c0 0-3.16 0.35-5.268 0.584-0.19 0.023-0.358 0.15-0.421 0.343s0 0.394 0.14 0.521c1.566 1.429 3.919 3.569 3.919 3.569-0.002 0-0.646 3.113-1.074 5.19-0.036 0.188 0.032 0.387 0.196 0.506 0.163 0.119 0.373 0.121 0.538 0.028 1.844-1.048 4.606-2.624 4.606-2.624s2.763 1.576 4.604 2.625c0.168 0.092 0.378 0.090 0.541-0.029s0.232-0.318 0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191s2.353-2.14 3.919-3.566c0.14-0.131 0.202-0.332 0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375 0.122-0.453 0.294c-0.874 1.932-2.183 4.83-2.183 4.83z"></path>
          </svg>
        ))}
      </div>

      <button
        onClick={() => handleAddToCart(product)}
        className="mt-2 bg-secondaryColor py-2 px-4 rounded-3xl text-snow text-sm"
      >
        Add to cart
      </button>
    </div>
  );
}
