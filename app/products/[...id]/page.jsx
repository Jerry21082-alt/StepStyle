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
    addToCart,
    setNotify,
    setNotifyMsg,
    setOverlay,
  } = stateFunc();

  const [toggleDescription, setToggleDescription] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const [productDetails] = products.filter(
    (product_detail) => product_detail.id == id
  );

  const slides = productDetails.photos;

  const showSlide = (index) => {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const handleNext = () => showSlide(currentIndex + 1);
  const handlePrev = () => showSlide(currentIndex - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearTimeout(interval);
  }, [currentIndex]);

  const handleTouchStart = (ev) => {
    setStartX(ev.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (ev) => {
    if (!isDragging) return;

    const currentX = ev.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
      handleNext();
      setIsDragging(false);
    } else if (diffX < -50) {
      handlePrev();
      setIsDragging(false);
    }
  };

  const handleToucEnd = () => setIsDragging(false);

  const sizes = [
    5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
  ];

  const [selected, setSelected] = useState("");
  const [shoeSizes, setShoeSizes] = useState(8);
  const [toggleShoeSize, setToggleShoeSize] = useState(false);

  const handleShoeSelect = (size) => {
    setShoeSizes(size);
    setSelected(size);
  };

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
        <div className="w-full flex flex-col space-y-5 md:space-y-0 space-x-0 md:space-x-12 md:flex-row">
          <AspectRatioContainer className="rounded-lg bg-white relative w-full">
            <div
              className="slider-container"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleToucEnd}
            >
              <div
                className="slider-wrapper"
                style={{ transform: `translateX(${-currentIndex * 100}%)` }}
              >
                {slides.map((slide, key) => (
                  <div
                    className="slide flex justify-center items-center h-full"
                    key={key}
                  >
                    <Image
                      src={`/${slide}`}
                      width={500}
                      height={500}
                      alt="product image"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex md:hidden items-center space-x-1">
              {slides.length > 1 &&
                slides.map((circle, idx) => (
                  <div
                    key={circle}
                    className={`w-2 h-2 rounded-full ${
                      currentIndex === idx ? "active-index" : "inactive-index"
                    }`}
                  />
                ))}
            </div>
            <div className="hidden md:block absolute bottom-1/3 left-1/2 -translate-x-1/2">
              <div className="flex items-center space-x-4">
                {productDetails.photos.map((photo, idx) => (
                  <div
                    className={`w-16 ${
                      idx == currentIndex ? "img-current" : "img-not-current"
                    }`}
                    key={idx}
                  >
                    <Image
                      src={`/${photo}`}
                      alt="product image"
                      width={500}
                      height={500}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`w-10 h-10 bg-buttonColor rounded-full absolute top-1/2 right-6 -translate-y-1/2 items-center justify-center cursor-pointer active:scale-75 transition ${
                slides.length > 1 ? "hidden md:flex" : "hidden"
              }`}
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                id="chevron"
                width={15}
                fill="#FFFFFF"
              >
                <path d="M13.25 10 6.109 2.58a.697.697 0 0 1 0-.979.68.68 0 0 1 .969 0l7.83 7.908a.697.697 0 0 1 0 .979l-7.83 7.908a.68.68 0 0 1-.969 0 .697.697 0 0 1 0-.979L13.25 10z"></path>
              </svg>
            </div>{" "}
            <div
              className={`w-10 h-10 bg-buttonColor rounded-full absolute top-1/2 left-6 -translate-y-1/2 items-center justify-center cursor-pointer active:scale-75 transition ${
                slides.length > 1 ? "hidden md:flex" : "hidden"
              }`}
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                id="chevron"
                width={15}
                fill="#FFFFFF"
              >
                <path d="M13.891 17.418a.697.697 0 0 1 0 .979.68.68 0 0 1-.969 0l-7.83-7.908a.697.697 0 0 1 0-.979l7.83-7.908a.68.68 0 0 1 .969 0 .697.697 0 0 1 0 .979L6.75 10l7.141 7.418z"></path>
              </svg>
            </div>
          </AspectRatioContainer>
          <div className="p-2 w-full">
            <div className="flex flex-col">
              <h5 className="text-xl font-bold md:w-[420px]">
                {productDetails.name}
              </h5>

              <div
                className="flex border-y border-primaryColor py-2 mt-4"
                onClick={() => setToggleDescription((x) => !x)}
              >
                <div className="flex-1">
                  <p className={toggleDescription ? "hidden" : ""}>
                    {productDetails.description.length > 60
                      ? `${productDetails.description.substring(0, 60)}...`
                      : productDetails.description}
                  </p>

                  <p
                    className={
                      toggleDescription ? "inline-block mt-2" : "hidden"
                    }
                  >
                    {productDetails.description}
                  </p>
                </div>

                <div className="w-5 h-5 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="chevron-down"
                    className={`transition-transform ${
                      toggleDescription ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z"></path>
                  </svg>
                </div>
              </div>
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
                <span>Color:</span>
                <h4>{productDetails.color}</h4>
              </div>

              <div className="py-2 flex items-center space-x-1 border-b-2 border-solid border-primaryColor">
                <span>Release date:</span>
                <h4>{productDetails.releaseDate}</h4>
              </div>

              <div className="py-2 flex items-center space-x-1 border-b-2 border-solid border-primaryColor">
                <span>SKU:</span>
                <h4>{productDetails.sku}</h4>
              </div>
            </div>

            <div
              className="w-64 border mt-5 py-1 px-2 flex md:hidden items-center justify-between"
              onClick={openShoeSizeModal}
            >
              <span>Size</span>
              <div className="w-5 h-5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="chevron-down"
                  className={`w-full h-full ${
                    toggleShoeSize ? "rotate-180" : ""
                  }`}
                >
                  <path d="M12,15a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,8.71,9.29L12,12.59l3.29-3.29a1,1,0,0,1,1.41,1.41l-4,4A1,1,0,0,1,12,15Z"></path>
                </svg>
              </div>
            </div>

            <div className="mt-8 w-full hidden md:block">
              <h4>SELECT US MEN&#39;S SIZE</h4>

              <div className="grid-items w-3/4 mt-4">
                {sizes.map((item) => (
                  <div
                    key={item}
                    onClick={() => handleShoeSelect(item)}
                    style={{
                      border:
                        selected === item
                          ? "1px solid #000"
                          : "1px solid #edede9",
                    }}
                    className="border border-primaryColor flex items-center justify-center p-2 hover:border-black cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-8">
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
              <Link
                className="flex justify-center w-32 bg-black py-2 px-4 text-snow text-sm active:scale-90 mr-2"
                href={{
                  pathname: "/checkoutPage",
                  query: {
                    id: id,
                    quantity: quantity,
                    size: shoeSizes,
                  },
                }}
                onClick={() => setQuantity(1)}
              >
                Shop
              </Link>

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
