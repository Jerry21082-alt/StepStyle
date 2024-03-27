"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { stateFunc } from "./stateContent/UseStateContext";
import { FcSearch } from "react-icons/fc";
import { HiEmojiSad } from "react-icons/hi";

export default function SearchProduct() {
  const { searched, searchInput } = stateFunc();
  const [filteredProducts] = searched;
  const SearchItem = ({ image, price, name }) => (
    <div className="flex justify-between items-center py-2">
      <div className="flex gap-2 items-center justify-center">
        <div className="flex items-center justify-center p-1 bg-primaryColor rounded-md w-[80px] h-[80px] md:w-[120px] md:h-[100px] p-2">
          <Image src={image} alt="product Photo" />
        </div>
        <span className="font-semibold text-sm w-[100px] md:text-md md:w-[200px]">{name}</span>
      </div>

      <span className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <FaStar key={i} size={15} color="fe5d26" />
        ))}
      </span>

      <span className="font-semibold">{`$${price}`}</span>
    </div>
  );

  return (
    <div className="p-4 bg-snow fixed top-[10%] md:top-[15%] md:left-[20%] w-[95vw] h-[45vh] md:w-[60vw] md:h-[60vh] rounded-md overflow-y-auto z-[500]">
      {searchInput ? (
        <div>
          {filteredProducts.length ? (
            <>
              {filteredProducts.map((product, i) => (
                <SearchItem
                  key={i}
                  image={product.product_photo}
                  price={product.product_price}
                  name={
                    product.product_description.length > 30
                      ? `${product.product_description.slice(0, 30)}...`
                      : product.product_description
                  }
                />
              ))}
            </>
          ) : (
            <div className="flex justify-center items-center flex-col mt-[20%]">
              <HiEmojiSad size={120} />
              <p>No results</p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center mt-[20%] flex-col">
          <FcSearch size={120} />
          <p>Search product name</p>
        </div>
      )}
    </div>
  );
}
