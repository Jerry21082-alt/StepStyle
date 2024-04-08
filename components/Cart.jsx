"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { stateFunc } from "./stateContent/UseStateContext";
import { AiOutlineShopping, AiFillDelete } from "react-icons/ai";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";

export default function Cart() {
  const {
    setToggleCart,
    toggleCart,
    cartItems,
    handleDelete,
    addToCart,
    removeFromCart,
    isMounted,
  } = stateFunc();

  useEffect(() => {
    const onClose = () => setToggleCart(false);

    const handleCartClose = (ev) => {
      if (ev.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleCartClose);

    return () => document.removeEventListener("keydown", handleCartClose);
  }, [toggleCart]);

  return (
    <div
      className={`w-screen min-h-screen fixed p-4 bg-snow top-0 z-[400] overflow-y-auto transition-transform ${
        toggleCart ? "open-cart" : "close-cart"
      }`}
    >
      <button
        className={`flex justify-center gap-2 items-center outline-none border-none bg-secondaryColor py-2 px-4 rounded-2xl text-sm md:m-2 ${
          !toggleCart ? "animate-cart-btn" : "static-cart-btn"
        }`}
        onClick={() => setToggleCart(false)}
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="20"
          viewBox="0 0 20 20"
          fill="#fff"
        >
          <title>arrow-long-left</title>
          <path d="M0.75 10l5.25-5.5v3.5h13v4h-13v3.5l-5.25-5.5z"></path>
        </svg>{" "}
        <span className="text-snow font-bold">Your</span>
        {isMounted ? (
          <span className="text-snow font-bold">
            {cartItems.length <= 1 ? "item" : "items"}
          </span>
        ) : null}
      </button>
      {isMounted && !cartItems.length ? (
        <div className="flex justify-center items-center h-[70vh]">
          <div className="flex flex-col items-center">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="84"
              height="84"
              viewBox="0 0 24 24"
              onClick={() => setToggleCart(true)}
            >
              <title>shopping-cart</title>
              <path d="M20.756 5.345c-0.191-0.219-0.466-0.345-0.756-0.345h-13.819l-0.195-1.164c-0.080-0.482-0.497-0.836-0.986-0.836h-2.25c-0.553 0-1 0.447-1 1s0.447 1 1 1h1.403l1.86 11.164c0.008 0.045 0.031 0.082 0.045 0.124 0.016 0.053 0.029 0.103 0.054 0.151 0.032 0.066 0.075 0.122 0.12 0.179 0.031 0.039 0.059 0.078 0.095 0.112 0.058 0.054 0.125 0.092 0.193 0.13 0.038 0.021 0.071 0.049 0.112 0.065 0.116 0.047 0.238 0.075 0.367 0.075 0.001 0 11.001 0 11.001 0 0.553 0 1-0.447 1-1s-0.447-1-1-1h-10.153l-0.166-1h11.319c0.498 0 0.92-0.366 0.99-0.858l1-7c0.041-0.288-0.045-0.579-0.234-0.797zM18.847 7l-0.285 2h-3.562v-2h3.847zM14 7v2h-3v-2h3zM14 10v2h-3v-2h3zM10 7v2h-3c-0.053 0-0.101 0.015-0.148 0.030l-0.338-2.030h3.486zM7.014 10h2.986v2h-2.653l-0.333-2zM15 12v-2h3.418l-0.285 2h-3.133z"></path>
              <path d="M10 19.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
              <path d="M19 19.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
            </svg>

            <p className="text-xl font-bold my-2">Your Cart is Empty</p>
            <button
              onClick={() => setToggleCart(false)}
              className="bg-secondaryColor rounded-3xl text-snow mt-5 py-2 px-4"
            >
              <Link href={`/`}>Continue shopping</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-10">
          {isMounted &&
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-center-items-center my-4 md:justify-around"
              >
                <div className="flex justify-center items-center p-2 rounded-md bg-primaryColor w-32">
                  <Image
                    src={item.product_photo}
                    alt="product photo"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex justify-between items-start flex-col ml-2">
                  <p className="text-sm">
                    {item.product_description.length > 30
                      ? `${item.product_description.substring(0, 30)}...`
                      : item.product_description}
                  </p>
                  <div className="flex justify-between w-full items-center gap-4 mt-2">
                    <div className="flex justify-center items-center py-2 px-4 bg-primaryColor gap-2">
                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <title>minus</title>
                        <path d="M18 11h-12c-1.104 0-2 0.896-2 2s0.896 2 2 2h12c1.104 0 2-0.896 2-2s-0.896-2-2-2z"></path>
                      </svg>
                      <span className="font-bold text-sm">
                        {cartItems?.filter((id) => id === item.id).length}
                      </span>

                      <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        onClick={() => addToCart(item.id)}
                      >
                        <title>plus</title>
                        <path d="M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z"></path>
                      </svg>
                    </div>
                    <span className="font-bold text-sm">{`$${
                      item.product_price *
                      cartItems?.filter((id) => id === item.id).length
                    }`}</span>
                    <AiFillDelete
                      onClick={() => handleDelete(item)}
                      size={20}
                      color="red"
                    />
                  </div>
                </div>
              </div>
            ))}
          <div className="flex justify-between md:justify-around items-center mt-10">
            <h3 className="font-bold">Total</h3>
            <h3 className="font-bold">{isMounted && cartItems.length}</h3>
          </div>
          <Link
            className="md:flex justify-center items-center mt-2"
            href={{
              pathname: "/checkoutPage",
              // query: {
              //   id: ids,
              // },
            }}
          >
            <button
              onClick={() => setToggleCart(false)}
              type="submit"
              className="bg-secondaryColor w-full md:w-[60%] outline-none border-none text-snow text-lg py-2 px-4 mt-5 rounded-3xl"
            >
              Proceed to Summary
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
