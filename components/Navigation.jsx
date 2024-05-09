"use client";

import Link from "next/link";
import { stateFunc } from "./stateContent/UseStateContext";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const {
    setToggleCart,
    orderSuccess,
    cartItems,
    openMobileNav,
    setOpenMobileNav,
    height,
    setOpenProductSearch,
  } = stateFunc();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVissible, setIsVissible] = useState(true);
  const [cartLength, setCartLength] = useState(false);

  const pathname = usePathname();

  const checkScrollPos = prevScrollPos < height && pathname === "/";

  useEffect(() => {
    setCartLength(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setIsVissible(prevScrollPos > currentPosition || currentPosition < 10);

      setPrevScrollPos(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isVissible]);

  return (
    <div className="w-full">
      <div className="hidden md:flex item-center justify-between fixed top-0 left-0 w-full z-50 h-14 px-10 bg-snow py-2">
        <Link href="/" className="logo text-secondaryColor">
          StepStyle
        </Link>
        <div className="flex items-center justify-between w-2/3">
          <ul className="flex item-center space-x-5">
            <li>
              <Link href="/">New & Featured</Link>
            </li>
            <li>
              <Link href="/">Men</Link>
            </li>
            <li>
              <Link href="/">Women</Link>
            </li>
            <li>
              <Link href="/">Kids</Link>
            </li>
            <li>
              <Link href="/">Sale</Link>
            </li>
          </ul>

          <div className="flex items-center space-x-5">
            <div className="bg-cardBg relative w-36 h-8 p-2 rounded-3xl flex item-center space-x-2">
              <div className="w-6 h-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  viewBox="-5.0 -10.0 110.0 135.0"
                  className="w-full"
                >
                  <g>
                    <path d="m47.398 78.398c-8.3008 0-16.102-3.1992-21.898-9.1016-5.8984-5.8008-9.1016-13.602-9.1016-21.898 0-8.3008 3.1992-16.102 9.1016-21.898 5.8984-5.8008 13.602-9.1016 21.898-9.1016 8.3008 0 16.102 3.1992 21.898 9.1016 5.8984 5.8984 9.1016 13.602 9.1016 21.898 0 8.3008-3.1992 16.102-9.1016 21.898-5.7969 5.9023-13.598 9.1016-21.898 9.1016zm0-56.797c-6.8984 0-13.398 2.6992-18.301 7.6016-4.8984 4.8984-7.6016 11.398-7.6016 18.301 0 6.8984 2.6992 13.398 7.6016 18.301 4.8984 4.8984 11.398 7.6016 18.301 7.6016 6.8984 0 13.398-2.6992 18.301-7.6016 4.8984-4.8984 7.6016-11.398 7.6016-18.301s-2.6992-13.504-7.5-18.402c-4.9023-4.8008-11.402-7.5-18.402-7.5z" />
                    <path d="m65.746 69.336 3.6055-3.6055 14.141 14.141-3.6055 3.6055z" />
                  </g>
                </svg>
              </div>

              <input
                type="text"
                placeholder="Search"
                className="text-sm w-2/3"
              />
            </div>

            <div className="flex items-center space-x-5">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 28"
                  className="w-full h-full"
                >
                  <title>heart-o</title>
                  <path d="M26 9.312c0-4.391-2.969-5.313-5.469-5.313-2.328 0-4.953 2.516-5.766 3.484-0.375 0.453-1.156 0.453-1.531 0-0.812-0.969-3.437-3.484-5.766-3.484-2.5 0-5.469 0.922-5.469 5.313 0 2.859 2.891 5.516 2.922 5.547l9.078 8.75 9.063-8.734c0.047-0.047 2.938-2.703 2.938-5.563zM28 9.312c0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281s-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313z"></path>
                </svg>
              </div>

              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height={25}
                  width={25}
                  id="shopping-bag"
                  onClick={() => setToggleCart(true)}
                  fill={checkScrollPos ? "#FFFFFF" : "#000000"}
                  style={{ transition: "fill .3s ease-in-out" }}
                >
                  <path d="M20,7.85A1,1,0,0,0,19,7H17A5,5,0,0,0,7,7H5a1,1,0,0,0-1,.85l-2,13A1,1,0,0,0,3,22H21a1,1,0,0,0,1-1.15ZM12,4a3,3,0,0,1,3,3H9A3,3,0,0,1,12,4Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          // top: isVissible ? "0" : "-100px",
          transition: "background-color 0.3s ease-in-out",
          backgroundColor: checkScrollPos ? "#000" : "#F5F5F5",
        }}
        className={`w-full h-14 flex md:hidden justify-between items-center py-4 md:py-8 px-4 md:px-20 fixed z-30 left-0 top-0 ${
          orderSuccess ? "pointer-events-none" : null
        }`}
      >
        <div className="w-28">
          <Link
            className="logo"
            href={`/`}
            style={{ color: checkScrollPos ? "#fe5d26" : "#000000" }}
          >
            StepStyle
          </Link>
        </div>

        <div className="flex items-center space-x-4 w-full justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="25"
            height="25"
            fill={checkScrollPos ? "#FFFFFF" : "#000000"}
            style={{ transition: "fill .3s ease-in-out" }}
            onClick={() => setOpenProductSearch((prev) => !prev)}
            className="mr-2"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
          </svg>

          <div className="flex space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={25}
              width={25}
              id="shopping-bag"
              onClick={() => setToggleCart(true)}
              fill={checkScrollPos ? "#FFFFFF" : "#000000"}
              style={{ transition: "fill .3s ease-in-out" }}
            >
              <path d="M20,7.85A1,1,0,0,0,19,7H17A5,5,0,0,0,7,7H5a1,1,0,0,0-1,.85l-2,13A1,1,0,0,0,3,22H21a1,1,0,0,0,1-1.15ZM12,4a3,3,0,0,1,3,3H9A3,3,0,0,1,12,4Z"></path>
            </svg>

            <div className="relative -top-1 right-1 text-xs">
              {cartLength && (
                <span
                  style={{
                    color: checkScrollPos ? "#FFFFFF" : "#000000",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>

          <div className="mobile-nav-box w-7 h-full z-50">
            <button
              onClick={() => setOpenMobileNav((prev) => !prev)}
              className={`button flex flex-col space-y-1 justify-center items-center outline-0 ${
                openMobileNav ? "mobile-nav-open" : "mobile-nav-close"
              } ${checkScrollPos ? "burgerWhite" : "burgerDark"}`}
              id="menu-button"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
