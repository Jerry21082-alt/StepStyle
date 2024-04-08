"use client";

import Link from "next/link";
import { stateFunc } from "./stateContent/UseStateContext";
import { useEffect, useState } from "react";

export default function Navigation() {
  const { setToggleCart, orderSuccess, cartItems, isMounted } = stateFunc();

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVissible, setIsVissible] = useState(true);
  const [openMobileNav, setOpenMobileNav] = useState(false);

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
    <div
      style={{ top: isVissible ? "0" : "-100px", transition: "top 0.3s" }}
      className={`w-full h-14 flex justify-between items-center py-4 md:py-8 px-4 md:px-20 fixed z-50 left-0 bg-snow ${
        orderSuccess ? "pointer-events-none" : null
      }`}
    >
      <div className="w-28">
        <Link href={`/`}>Xtra</Link>
      </div>

      <div className="flex items-center space-x-4 w-full justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="25"
          height="25"
          className="mr-2"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
        </svg>

        <div className="flex space-x-1">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => setToggleCart(true)}
          >
            <title>shopping-cart</title>
            <path d="M20.756 5.345c-0.191-0.219-0.466-0.345-0.756-0.345h-13.819l-0.195-1.164c-0.080-0.482-0.497-0.836-0.986-0.836h-2.25c-0.553 0-1 0.447-1 1s0.447 1 1 1h1.403l1.86 11.164c0.008 0.045 0.031 0.082 0.045 0.124 0.016 0.053 0.029 0.103 0.054 0.151 0.032 0.066 0.075 0.122 0.12 0.179 0.031 0.039 0.059 0.078 0.095 0.112 0.058 0.054 0.125 0.092 0.193 0.13 0.038 0.021 0.071 0.049 0.112 0.065 0.116 0.047 0.238 0.075 0.367 0.075 0.001 0 11.001 0 11.001 0 0.553 0 1-0.447 1-1s-0.447-1-1-1h-10.153l-0.166-1h11.319c0.498 0 0.92-0.366 0.99-0.858l1-7c0.041-0.288-0.045-0.579-0.234-0.797zM18.847 7l-0.285 2h-3.562v-2h3.847zM14 7v2h-3v-2h3zM14 10v2h-3v-2h3zM10 7v2h-3c-0.053 0-0.101 0.015-0.148 0.030l-0.338-2.030h3.486zM7.014 10h2.986v2h-2.653l-0.333-2zM15 12v-2h3.418l-0.285 2h-3.133z"></path>
            <path d="M10 19.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
            <path d="M19 19.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
          </svg>

          <div className="relative -top-1 right-1 text-xs">
            {isMounted ? <span>{cartItems.length}</span> : null}
          </div>
        </div>

        <div className="mobile-nav-box w-7 h-full">
          <div onClick={() => setOpenMobileNav((prev) => !prev)} className={`mobile-nav ${openMobileNav ? 'mobile-nav-open' : 'mobile-nav-close'}`} />
        </div>
      </div>
    </div>
  );
}
