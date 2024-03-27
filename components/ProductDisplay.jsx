'use client';

import ProductCard from "./productCard";
import { FaStar } from "react-icons/fa";
import { BsFillHeartFill, BsHeartFill } from 'react-icons/bs'
import { stateFunc } from "./stateContent/UseStateContext";
import { useState } from "react";
import SimilarProducts from "./SimilaProducts";

export default function ProductDisplay() {
  const [toggleLike, setToggleLike] = useState(false);
  const { products, addToCart, quantity } = stateFunc();
  
  return (
    <div className="w-full p-5 md:px-[2rem]">
      <h2 className="text-2xl font-bold my-5">Popular Sneakers</h2>
      <div className="flex flex-wrap justify-start items-start gap-2 md:gap-5 w-full">
        {products.map((product) => (
          <div key={product.id} className="w-[48%] md:w-[23%] mt-2">
            <ProductCard
              product_description={
                product.product_description.length > 30
                  ? `${product.product_description.substring(0, 30)}...`
                  : product.product_description
              }
              product_photo={product.product_photo}
              product_price={product.product_price}
              product_id={product.id}
            />
            <div className="flex justify-start items-center my-1">
              {[1, 2, 3, 4, 5].map((index) => (
                <FaStar key={index} color="fe5d26"/>
              ))}
            </div>
            <button onClick={() => addToCart(product.id)} className="outline-none border-none text-xs text-snow bg-secondaryColor py-2 px-4 mt-2 rounded-2xl">Add to Cart</button>
          </div>
        ))}
      </div>
      <SimilarProducts />
    </div>
  );
}
