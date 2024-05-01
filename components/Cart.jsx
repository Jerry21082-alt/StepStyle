"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
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

  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight((ref.current.clientWidth * 1) / 1);
    }
  }, [ref]);

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
      className={`w-screen min-h-screen fixed p-4 top-0 left-0 right-0 bg-snow z-[400] overflow-y-auto transition-transform ${
        toggleCart ? "open-cart" : "close-cart"
      }`}
    >
      <button
        className={`flex items-center space-x-2 absolute top-2 left-1  bg-buttonColor rounded-md p-1 ${
          !toggleCart ? "animate-cart-btn" : "static-cart-btn"
        }`}
        onClick={() => setToggleCart(false)}
      >
        <div className="w-5 h-5">
          <svg
            viewBox="0 0 24 24"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g id="Arrow / Chevron_Left_MD">
              <path id="Vector" d="M14 16L10 12L14 8" />
            </g>
          </svg>
        </div>
        <p className="text-snow">Your</p>
        {isMounted ? (
          <p className="text-snow">
            {cartItems.length <= 1 ? "item" : "items"}
          </p>
        ) : null}
      </button>
      {isMounted && !cartItems.length ? (
        <div className="flex justify-center items-center h-[70vh]">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="shopping-bag"
                className="w-full h-full"
              >
                <path d="M20,7.85A1,1,0,0,0,19,7H17A5,5,0,0,0,7,7H5a1,1,0,0,0-1,.85l-2,13A1,1,0,0,0,3,22H21a1,1,0,0,0,1-1.15ZM12,4a3,3,0,0,1,3,3H9A3,3,0,0,1,12,4Z"></path>
              </svg>
            </div>
            <p className="text-xl font-bold my-2">Your Bag is Empty</p>
            <button
              onClick={() => setToggleCart(false)}
              className="bg-black rounded-3xl text-snow mt-5 py-2 px-4"
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
                <div
                  ref={ref}
                  // style={{ height: `${height}px` }}
                  className="flex justify-center items-center p-2 rounded-md bg-primaryColor w-32 aspect-square"
                >
                  <Image
                    src={`/${item.photos.main}`}
                    alt="product photo"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex justify-between items-start flex-col ml-2">
                  <p className="text-sm">
                    {item.name.length > 30
                      ? `${item.name.substring(0, 30)}...`
                      : item.name}
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
                      item.price *
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
