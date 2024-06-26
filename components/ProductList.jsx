"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { stateFunc } from "./stateContent/UseStateContext";
import { useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";
import AspectRatioContainer from "./AspectRatioContainer";

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
  } = stateFunc();

  const router = useRouter();

  const view = (product) => {
    router.push(`/products/${product.id}`);
    addToViewRecent(product);
  };

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
      setNotify(true);
      setNotifyMsg("Removed from watchlist!");
    } else {
      setWatchList((prevWatchList) => [...prevWatchList, product]);
      setNotify(true);
      setNotifyMsg("Added to watchlist!");
    }
  };

  return (
    <div className={`h-full cursor-pointer group/main relative`}>
      <div className="flex flex-col w-full group">
        <AspectRatioContainer
          className={`flex items-center justify-center group bg-white overflow-hidden p-4`}
        >
          <div
            className="flex items-center justify-center h-full w-full zoom-img"
            onClick={() => view(product)}
          >
            <Image
              src={`/${product.photos[0]}`}
              alt="product image"
              loading="eager"
              width={500}
              height={500}
              // className="object-contain object-center"
            />
          </div>
        </AspectRatioContainer>
        <div
          className="w-8 h-8 rounded-full absolute top-3 right-3 bg-snow flex items-center justify-center"
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

        <h5 className="mt-4 text-sm">{product.name.toUpperCase()}</h5>

        <h4 className="mt-1 font-medium text-sm">${product.price}</h4>
      </div>

      {/* <button
        onClick={() => handleAddToCart(product)}
        className="mt-2 bg-buttonColor py-2 px-4 rounded-3xl text-snow text-sm"
      >
        Add to cart
      </button> */}
    </div>
  );
}
