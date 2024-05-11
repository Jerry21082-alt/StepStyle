"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { stateFunc } from "@/components/stateContent/UseStateContext";
import { FaStar, FaPlus, FaMinus, FaAngleDown } from "react-icons/fa";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
import Layout from "@/components/Layout";
import AspectRatioContainer from "@/components/AspectRatioContainer";
import Slider from "@/components/Slider";
import { products } from "@/constants/mockProducts";

export default function ProductDetails({ params }) {
  const { id } = params;
  const {
    incQty,
    quantity,
    decQty,
    setQuantity,
    cartItems,
    setCartItems,
    addToCart,
    setNotify,
    setNotifyMsg,
  } = stateFunc();

  const [productDetails] = products.filter(
    (product_detail) => product_detail.id == id
  );

  const [shoeSizes, setShoeSizes] = useState(8);
  const [toggleShoeSize, setToggleShoeSize] = useState(false);

  const sizeRef = useRef();

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
    if (toggleShoeSize) {
      document.addEventListener("click", handleShoeSizeModal);
    }

    return () => document.removeEventListener("click", handleShoeSizeModal);
  }, [toggleShoeSize]);

  const handleAddToCart = (product) => {
    const itemInCart = cartItems.some((item) => item.id === product.id);

    if (!itemInCart) {
      addToCart(product);
    } else {
      setNotify(true);
      setNotifyMsg("Item exist in cart!");
    }
  };

  // const ShoeSizes = () => (
  //   <div className="w-[120px] relative" ref={sizeRef}>
  //     <div className="flex items-center mt-5 w-full">
  //       <span>size:</span>
  //       <div
  //         onClick={() => setToggleShoeSize((prev) => !prev)}
  //         className="bg-primaryColor flex justify-between items-center space-x-2 rounded-md px-4 py-1 cursor-pointer ml-2"
  //       >
  //         <span className="font-bold">{shoeSizes}</span>
  //         <FaAngleDown />
  //       </div>
  //     </div>
  //     <div
  //       className={`p-2 w-full flex flex-col absolute bg-primaryColor rounded-md mt-2 ${
  //         toggleShoeSize ? "open-size-modal" : "close-size-modal"
  //       }`}
  //     >
  //       {[8, 9, 10, 11, 12].map((size) => (
  //         <span
  //           key={size}
  //           onClick={() => selectSize(size)}
  //           className="px-2 hover:bg-snow rounded-md cursor-pointer"
  //         >
  //           {size}
  //         </span>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <>
      <Layout>
        <div className="flex flex-col space-y-5 md:space-y-0 space-x-0 md:space-x-12 md:flex-row">
          <div className="w-full rounded-lg bg-white relative">
            <AspectRatioContainer aspectRatio={1 / 1}>
              <div className="px-10 flex items-center justify-center h-full">
                <Image
                  src={`/${productDetails.photos.main}`}
                  alt="product photo"
                  width={500}
                  height={500}
                  // className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                />
              </div>
            </AspectRatioContainer>
            <div className="w-full hidden md:flex items-center justify-center absolute bottom-8 space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 flex items-center justify-center">
                  <Image
                    src={`/${productDetails.photos.main}`}
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="flex flex-col">
              <h5 className="text-xl font-bold md:w-[420px]">
                {productDetails.name}
              </h5>
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

            <div className="w-64 bg-dangerColor flex items-center justify-between"></div>

            <div className="flex items-center space-x-4 my-8">
              <div className="flex items-center bg-primaryColor py-1 px-4 space-x-4">
                <FaMinus onClick={decQty} size={10} cursor="pointer" />
                <span className="font-bold text-sm">{quantity}</span>
                <FaPlus onClick={incQty} size={10} cursor="pointer" />
              </div>

              <span>
                only <span className="text-secondaryColor">12</span> items left!
              </span>
            </div>

            <div className="flex items-center mt-5">
              <button
                className="w-32 bg-black py-2 px-4 text-snow text-sm active:scale-90 mr-2"
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
                  {productDetails.originalPrice}
                </Link>
              </button>
              <button
                className="w-32 border-solid text-snow bg-secondaryColor py-2 px-4 text-sm active:scale-90 transition-all w-34"
                onClick={() => handleAddToCart(productDetails)}
              >
                Add to Cart
              </button>
            </div>
            <div className="flex items-center mt-5 space-x-2">
              <TbTruckDelivery size={25} color="fe5d26" />
              <h4>Free Delivery</h4>
            </div>
            <p>Enter your postalcode for delivery availability</p>

            <div className="flex justify-center-items-center mt-5 space-x-2">
              <TbTruckReturn size={25} color="fe5d26" />
              <h4 className="font-500">Return Delivery</h4>
            </div>
            <p>Free 30 days return. Details</p>
          </div>
        </div>
      </Layout>
      <div className="bg-snow w-full">
        <Slider products={products.slice(0, 8)} title="SIMILAR PRODUCT" />
      </div>
    </>
  );
}
