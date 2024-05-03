"use client";

import Link from "next/link";
import { useEffect } from "react";
import { stateFunc } from "./stateContent/UseStateContext";
import Image from "next/image";
import AspectRatioContainer from "./AspectRatioContainer";

export default function Cart() {
  const {
    setToggleCart,
    toggleCart,
    cartItems,
    handleDelete,
    isMounted,
    increaseItemQuantity,
    decreaseItemQuantity,
    getTotalPrice,
  } = stateFunc();

  const totalPrice = getTotalPrice().toFixed(2);

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
      className={`w-screen min-h-screen fixed p-2 top-0 left-0 right-0 bg-snow z-[400] overflow-y-auto transition-transform overscroll-contain ${
        toggleCart ? "open-cart" : "close-cart"
      }`}
    >
      <button
        className={`flex items-center space-x-1 absolute top-2 left-1  bg-buttonColor rounded-md p-1 w-16 mb-5 ${
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
        <p className="text-snow">Back</p>
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
        <div className="mt-12">
          <div className="flex justify-between items-center">
            <span>Subtotal</span>
            <h4>${isMounted && totalPrice}</h4>
          </div>

          <div className="flex items-center space-x-2 my-4">
            <p>CART</p>
            <p>({isMounted && cartItems.length})</p>
          </div>
          <div
            id="scroll"
            className="w-full max-h-[500px] overflow-y-auto flex flex-col space-y-3 mt-5 overscroll-contain"
          >
            {isMounted &&
              cartItems.map((item, idx) => (
                <AspectRatioContainer
                  aspectRatio={14 / 6}
                  className="flex flex-col justify-center w-full bg-white rounded-md px-2"
                  key={idx}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-28 aspect-square flex items-center justify-center">
                      <Image
                        src={`/${item.photos.main}`}
                        alt="product image"
                        width={500}
                        height={500}
                      />
                    </div>

                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <h4>{`$${
                        item.isOffer
                          ? (
                              item.price -
                              (item.price * item.percent) / 100
                            ).toFixed(2)
                          : item.price.toFixed(2)
                      }`}</h4>
                      {item.isOffer && (
                        <div className="flex items-center space-x-1">
                          <span className="line-through text-gray">{`$${item.price.toFixed(
                            2
                          )}`}</span>
                          <div className="p-1 rounded text-white text-xs bg-buttonColor">
                            -{item.percent}%
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span
                      className="text-secondaryColor"
                      onClick={() => handleDelete(item)}
                    >
                      Remove
                    </span>

                    <div className="flex items-center space-x-5 mt-4">
                      <button
                        className="w-6 h-6 rounded bg-secondaryColor flex items-center justify-center p-1"
                        onClick={() =>
                          increaseItemQuantity(item.id, item.price)
                        }
                      >
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="#FFFFFF"
                          className="w-full h-full"
                        >
                          <title>plus</title>
                          <path d="M16 10c0 0.553-0.048 1-0.601 1h-4.399v4.399c0 0.552-0.447 0.601-1 0.601s-1-0.049-1-0.601v-4.399h-4.399c-0.552 0-0.601-0.447-0.601-1s0.049-1 0.601-1h4.399v-4.399c0-0.553 0.447-0.601 1-0.601s1 0.048 1 0.601v4.399h4.399c0.553 0 0.601 0.447 0.601 1z"></path>
                        </svg>
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        className={`w-6 h-6 rounded ${
                          item.quantity === 1
                            ? "bg-secondaryLight"
                            : "bg-secondaryColor"
                        } flex items-center justify-center p-1`}
                        onClick={() =>
                          decreaseItemQuantity(item.id, item.price)
                        }
                      >
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          className="w-full h-full"
                          fill="#FFFFFF"
                        >
                          <title>minus</title>
                          <path d="M18 11h-12c-1.104 0-2 0.896-2 2s0.896 2 2 2h12c1.104 0 2-0.896 2-2s-0.896-2-2-2z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </AspectRatioContainer>
              ))}
            <div className="w-full py-5">
              <button className="w-full bg-secondaryColor py-2 text-white flex items-center justify-center space-x-2 rounded-3xl">
                <h4>Checkout</h4>
                <h4>{`[$${isMounted && totalPrice}]`}</h4>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
