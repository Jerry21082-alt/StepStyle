"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { stateFunc } from "@/components/stateContent/UseStateContext";
import { FaStar, FaPlus, FaMinus, FaAngleDown } from "react-icons/fa";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import SimilarProducts from "@/components/SimilaProducts";

export default function ProductDetails({ params }) {
  const { id } = params;
  const { products, incQty, quantity, decQty, setQuantity } = stateFunc();
  const [productDetails] = products.filter(
    (product_detail) => product_detail.id == id
  );

  const [shoeSizes, setShoeSizes] = useState(0);
  const [toggleShoeSize, setToggleShoeSize] = useState(false);

  const selectSize = (size) => {
    setShoeSizes(size);
    setToggleShoeSize(false);
  };

  const ShoeSizes = () => (
    <div className="w-[120px] relative">
      <div
        onClick={() => setToggleShoeSize((prev) => !prev)}
        className="bg-primaryColor mt-5 flex justify-between items-center gap-2 rounded-md px-4 py-1 cursor-pointer"
      >
        <span className="font-bold">{shoeSizes}</span>
        <FaAngleDown />
      </div>
      {toggleShoeSize && (
        <div className="p-2 w-full flex flex-col absolute bg-primaryColor rounded-md mt-2">
          {[8, 9, 10, 11, 12].map((size) => (
            <span
              key={size}
              onClick={() => selectSize(size)}
              className="px-2 hover:bg-snow rounded-md cursor-pointer"
            >
              {size}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className=" w-full p-5 mt-[3rem]">
      <div className="flex flex-col md:flex-row gap-[3rem]">
        <div className="w-full md:w-[50%]">
          <div className="rounded-lg overflow-hidden bg-primaryColor px-10">
            <Image src={productDetails.product_photo} alt="product photo" />
          </div>
          <div className="hidden md:flex justify-start item-center gap-2">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-primaryColor mt-3 rounded-md px-2">
                <Image
                  src={productDetails.product_photo}
                  alt="other product photos"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold md:w-[420px]">
              {productDetails.product_description}
            </h2>
            <div className="mt-2 pb-5 flex items-center border-b-2 border-solid border-primaryColor">
              {[1, 2, 3, 4, 5].map((index) => (
                <FaStar color="fe5d26" key={index} />
              ))}
              <p className="ml-2">(121)</p>
            </div>
            <span className="mt-2 pb-5 flex items-center border-b-2 border-solid border-primaryColor font-bold text-xl">
              {`$${productDetails.product_price}`}
            </span>
          </div>

          <ShoeSizes sizes={shoeSizes} size={`size`} />

          <div className="flex justify-between items-center bg-primaryColor w-[120px] mt-5 py-2 px-4 rounded-3xl">
            <span>
              <FaMinus onClick={decQty} />
            </span>
            <span className="font-bold text-lg">{quantity}</span>
            <span>
              <FaPlus onClick={incQty} />
            </span>
          </div>
          <div className="flex items-center mt-5 gap-2">
            <button
              className="bg-heroColor py-2 px-5 text-snow rounded-3xl"
              onClick={() => setQuantity(1)}
            >
              <Link
                href={{
                  pathname: "/checkoutPage",
                  query: {
                    id: id,
                    quantity: quantity,
                    size: shoeSizes,
                  },
                }}
              >
                Buy Now
              </Link>
            </button>
            <button className="border-solid border-2 border-heroColo rounded-3xl py-2 px-5">
              Add to Cart
            </button>
          </div>
          <div className="flex justify-center-items-center mt-5 gap-2">
            <TbTruckDelivery size={25} color="fe5d26" />
            <p className="font-500 text-lg">Free Delivery</p>
          </div>
          <p className="text-sm">
            Enter your postalcode for delivery availability
          </p>

          <div className="flex justify-center-items-center mt-5 gap-2">
            <TbTruckReturn size={25} color="fe5d26" />
            <p className="font-500 text-lg">Return Delivery</p>
          </div>
          <p className="text-sm">Free 30 days return. Details</p>
        </div>
      </div>
      <SimilarProducts />
    </section>
  );
}
