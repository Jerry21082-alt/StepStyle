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
    <div
      style={{
        // top: isVissible ? "0" : "-100px",
        transition: "background-color 0.3s ease-in-out",
        backgroundColor: checkScrollPos ? "#000" : "#F5F5F5",
      }}
      className={`w-full h-14 flex justify-between items-center py-4 md:py-8 px-4 md:px-20 fixed z-30 left-0 top-0 ${
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
  );
}
