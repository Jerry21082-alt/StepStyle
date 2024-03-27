"use client";

import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { BiSearch } from "react-icons/bi";
import { stateFunc } from "./stateContent/UseStateContext";
import { bag } from "@/public/sneaker-assets";

export default function Navigation() {
  const { setToggleCart, newProduct, searchInput, searchForProduct, products, setSearchFocus, orderSuccess } = stateFunc();

  return (
    <>
      <div className={`w-full flex justify-between items-center py-3 px-5 fixed top-0 z-[300] bg-snow ${orderSuccess ? 'pointer-events-none' : null}`}>
        <Link href={`/`}>Logo</Link>
        <div className="relative">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => searchForProduct(products, e.target.value)}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            placeholder="search products"
            className="bg-primaryColor border-none outline-none py-2 px-4 rounded-3xl"
          />
          <div className="absolute top-3 right-4">
            <BiSearch />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-[20px] relative" onClick={() => setToggleCart(true)}>
            <Image src={bag} alt="shopping bag" className="cursor-pointer"/>
            <div className="flex justify-center items-center w-[15px] h-[15px] absolute bottom-2 left-3 bg-secondaryColor rounded-full p-2"><h4 className="text-xs text-snow font-bold">{newProduct.length}</h4></div>
          </div>
        </div>
      </div>
      <Cart />
    </>
  );
}
