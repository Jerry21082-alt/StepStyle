"use client";

import { products } from "@/constants/mockProducts";
import { stateFunc } from "./stateContent/UseStateContext";
import Image from "next/image";

export default function ProductSearch() {
  const { openProductSearch, searchInput } = stateFunc();

  const handleProductFilterSearch = () => {
    const searchResults = products.filter((product) => {
      return product.name
        .toLocaleLowerCase()
        .includes(searchInput.toLocaleLowerCase());
    });

    return searchResults;
  };

  return (
    <div
      className={`${
        openProductSearch ? "open-product-search" : "close-product-search"
      } fixed top-14 left-0 h-full w-full z-50 bg-snow`}
    >
      <div
        className="max-h-[500] overscroll-contain mt-12 pl-2 flex flex-col space-y-3"
        id="scroll"
      >
        {handleProductFilterSearch().map((list, idx) => (
          <div
            className={`flex ${
              !searchInput.length ? "hide-search-results" : "show-search-results"
            }`}
            key={idx}
          >
            <div
              className={`w-40 h-28 bg-cardBg rounded-xl p-2 flex justify-center items-center`}
            >
              <Image
                src={`/${list.photos.main}`}
                width={500}
                height={500}
                alt="product image"
              />
            </div>
            <div className="flex flex-col space-y-1 w-full ml-2">
              <span className="w-full">
                {list.name.length > 50
                  ? `${list.name.substring(0, 50)}...`
                  : list.name}
              </span>

              <h4>${list.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
