"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { stateFunc } from "@/components/stateContent/UseStateContext";
import { FaStar, FaPlus, FaMinus, FaAngleDown } from "react-icons/fa";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import SimilarProducts from "@/components/SimilaProducts";
import Layout from "@/components/Layout";

export default function ProductDetails({ params }) {
  const { id } = params;
  const { incQty, quantity, decQty, setQuantity, products } = stateFunc();

  const [productDetails] = products.filter(
    (product_detail) => product_detail.id == id
  );

  const [shoeSizes, setShoeSizes] = useState(8);
  const [toggleShoeSize, setToggleShoeSize] = useState(false);
  const [height, setHeight] = useState(0);

  const sizeRef = useRef();
  const ref = useRef(null);

  const selectSize = (size) => {
    setShoeSizes(size);
    setToggleShoeSize(false);
  };

  const handleShoeSizeModal = (ev) => {
    const closeModal = () => setToggleShoeSize(false);

    if (sizeRef.current && !sizeRef.current.contains(ev.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (ref.current) {
      setHeight((ref.current.clientWidth * 1) / 1);
    }
  }, [ref]);

  useEffect(() => {
    if (toggleShoeSize) {
      document.addEventListener("click", handleShoeSizeModal);
    }

    return () => document.removeEventListener("click", handleShoeSizeModal);
  }, [toggleShoeSize]);

  const ShoeSizes = () => (
    <div className="w-[120px] relative" ref={sizeRef}>
      <div className="flex items-center mt-5 w-full">
        <span>size:</span>
        <div
          onClick={() => setToggleShoeSize((prev) => !prev)}
          className="bg-primaryColor flex justify-between items-center space-x-2 rounded-md px-4 py-1 cursor-pointer ml-2"
        >
          <span className="font-bold">{shoeSizes}</span>
          <FaAngleDown />
        </div>
      </div>
      <div
        className={`p-2 w-full flex flex-col absolute bg-primaryColor rounded-md mt-2 ${
          toggleShoeSize ? "open-size-modal" : "close-size-modal"
        }`}
      >
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
    </div>
  );

  return (
    <Layout>
      <div className="flex flex-col md:flex-row gap-[3rem]">
        <div className="w-full md:w-[50%]">
          <div
            ref={ref}
            style={{ height: `${height}px` }}
            className="rounded-lg overflow-hidden bg-primaryColor px-10 aspect-square w-full flex items-center justify-center"
          >
            <Image
              src={`/${productDetails.photos.main}`}
              alt="product photo"
              width={500}
              height={500}
            />
          </div>
          <div className="hidden md:flex justify-start item-center gap-2">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="bg-primaryColor mt-3 rounded-md px-2">
                <Image
                  src={`/${productDetails.photos.others[0]}`}
                  alt="other product photos"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="p-2 w-full">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold md:w-[420px]">
              {productDetails.name}
            </h2>
            <p>{productDetails.description}</p>

            <div className="mt-3 pb-5 flex items-center border-b-2 border-solid border-primaryColor">
              {[1, 2, 3, 4, 5].map((index) => (
                <FaStar color="fe5d26" key={index} />
              ))}
              <p className="ml-2">(121)</p>
            </div>

            <div className="py-2 flex items-center space-x-1 border-b-2 border-solid border-primaryColor">
              <span>Price:</span>
              <h4> {`$${productDetails.price}`}</h4>
            </div>

            <div className="py-2 flex items-center space-x-1 border-b-2 border-solid border-primaryColor">
              <span>Brand:</span>
              <h4>{productDetails.brand}</h4>
            </div>

            <div className="py-2 flex items-center space-x-1 border-b-2 border-solid border-primaryColor">
              <span>Release date:</span>
              <h4>{productDetails.releaseDate}</h4>
            </div>
          </div>

          <ShoeSizes sizes={shoeSizes} size={`size`} />

          <div className="flex items-center space-x-4 my-8">
            <div className="flex justify-between items-center bg-primaryColor w-[120px] py-2 px-4 rounded-3xl">
              <span>
                <FaMinus onClick={decQty} />
              </span>
              <span className="font-bold text-lg">{quantity}</span>
              <span>
                <FaPlus onClick={incQty} />
              </span>
            </div>

            <span>
              only <span className="text-secondaryColor">12</span> items left!
            </span>
          </div>

          <div className="flex items-center mt-5">
            <button
              className="bg-heroColor py-2 px-4 text-snow rounded-3xl text-sm active:scale-90 mr-2"
              onClick={() => setQuantity(1)}
            >
              <Link
                className="w-full"
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
            <button className="border-solid text-snow bg-secondaryColor rounded-3xl py-2 px-4 text-sm active:scale-90 transition-all w-34">
              Add to Cart
            </button>
          </div>
          <div className="flex justify-center-items-center mt-5 gap-2">
            <TbTruckDelivery size={25} color="fe5d26" />
            <h4 className="font-500">Free Delivery</h4>
          </div>
          <p>Enter your postalcode for delivery availability</p>

          <div className="flex justify-center-items-center mt-5 gap-2">
            <TbTruckReturn size={25} color="fe5d26" />
            <h4 className="font-500">Return Delivery</h4>
          </div>
          <p>Free 30 days return. Details</p>
        </div>
      </div>
      <SimilarProducts />
    </Layout>
  );
}
