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
import ShoeSizes from "@/components/ShoeSizes";

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
    setOverlay,
  } = stateFunc();

  const [productDetails] = products.filter(
    (product_detail) => product_detail.id == id
  );

  const [shoeSizes, setShoeSizes] = useState(8);
  const [toggleShoeSize, setToggleShoeSize] = useState(false);

  const sizeRef = useRef();

  const handleShoeSizeModal = (ev) => {
    const closeModal = () => setToggleShoeSize(false);

    if (sizeRef.current && !sizeRef.current.contains(ev.target)) {
      closeModal();
      setOverlay(false);
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

  const openShoeSizeModal = () => {
    setOverlay(true);
    setToggleShoeSize(true);
  };

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
                    alt="product image"
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
              <span>{productDetails.description}</span>

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

            <div
              className="w-64 border mt-5 py-1 px-2 flex items-center justify-between"
              onClick={openShoeSizeModal}
            >
              <span>Size</span>
              <div className="w-5 h-5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="chevron-down"
                  className={`w-full h-full ${toggleShoeSize ? 'rotate-180' : ''}`}
                >
                  <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z"></path>
                </svg>
              </div>
            </div>

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
                  Shop
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
      <ShoeSizes
        product={productDetails}
        toggleShoeSize={toggleShoeSize}
        setToggleShoeSize={setToggleShoeSize}
        setShoeSizes={setShoeSizes}
      />
    </>
  );
}
