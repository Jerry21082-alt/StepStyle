"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { stateFunc } from "./stateContent/UseStateContext";
import { BiSolidLeftArrow } from "react-icons/bi";
import { AiOutlineShopping, AiFillDelete } from "react-icons/ai";
import { FaStar, FaPlus, FaMinus } from "react-icons/fa";
import { bag } from "@/public/sneaker-assets";
import Image from "next/image";

export default function Cart() {
  const {
    setToggleCart,
    toggleCart,
    cartItems,
    handleDelete,
    addToCart,
    products,
    newProduct,
    setNewProduct,
    removeFromCart,
    deleteFromCart,
  } = stateFunc();

  useEffect(() => {
    if (cartItems.length > 0) {
      for (let element of cartItems) {
        let newItems = [];
        const cartProducts = products.find((product) => product.id === element);
        newItems.push(cartProducts);
        setNewProduct([...newProduct, cartProducts]);
        const productInCart = newProduct.find((item) => item.id === element);
        if (productInCart) {
          setNewProduct(newProduct);
        }
      }
    }
  }, [cartItems]);

  let total = 0;

  for (let product of newProduct) {
    const price = newProduct.find(
      (price) => price.id === product.id
    ).product_price;
    total += price;
  }

  const ids = [];

  for (let id of newProduct) {
    ids.push(id.id);
  }

  return (
    <div
      className={`w-screen h-screen fixed p-4 bg-snow top-0 z-[400] overflow-y-auto transition-transform ${
        toggleCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        className="flex justify-center gap-2 items-center outline-none border-none bg-secondaryColor py-2 px-4 rounded-2xl md:m-2"
        onClick={() => setToggleCart(false)}
      >
        <BiSolidLeftArrow color="#fff" />
        <span className="text-snow font-bold">Your</span>
        <span className="text-snow font-bold">
          {cartItems.length <= 1 ? "item" : "items"}
        </span>
      </button>
      {!newProduct.length ? (
        <div className="flex justify-center items-center h-[70vh]">
          <div className="flex flex-col items-center">
            <div className="w-[30%]">
              <Image src={bag} alt="shopping bag image" />
            </div>
            <p className="text-xl font-bold my-2">Your Bag is Empty</p>
            <button
              onClick={() => setToggleCart(false)}
              className="bg-secondaryColor rounded-3xl text-snow mt-5 py-2 px-4"
            >
              <Link href={`/`}>Continue shopping</Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-10 overflow-y-auto">
          {newProduct.map((item, index) => (
            <div
              key={index}
              className="flex justify-center-items-center my-4 gap-2 md:justify-around"
            >
              <div className="flex justify-center items-center p-2 rounded-md bg-primaryColor w-[120px]">
                <Image src={item.product_photo} alt="product photo" />
              </div>
              <div className="flex flex-col justify-between items-start flex-col">
                <p className="text-md">
                  {item.product_description.length > 30
                    ? `${item.product_description.substring(0, 30)}...`
                    : item.product_description}
                </p>
                <div className="flex justify-between w-full items-center gap-4 mt-2">
                  <div className="flex justify-center items-center py-2 px-4 bg-primaryColor gap-2">
                    <FaMinus onClick={() => removeFromCart(item.id)} />
                    <span className="font-bold text-lg">
                      {cartItems?.filter((id) => id === item.id).length}
                    </span>
                    <FaPlus onClick={() => addToCart(item.id)} />
                  </div>
                  <span className="font-bold text-lg">{`$${
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
            <h3 className="font-bold">{total}</h3>
          </div>
          <Link
            className="md:flex justify-center items-center mt-2"
            href={{
              pathname: "/checkoutPage",
              query: {
                id: ids,
              },
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
{
  /*
.cart-inactive {
  width: 100vw;
  height: 100vh;
  transform: translateX(0%);
  transition: transform 150ms cubic-bezier(0.5, 0, 0.5, 1);
  position: fixed;
  background: #fff;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  overflow-y: auto;
}
 */
}
