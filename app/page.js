"use client";

import { Hero, ProductDisplay, Footer } from "@/components";
import Overlay from "@/components/Overlay";
import ProductReel from "@/components/ProductReel";
import { stateFunc } from "@/components/stateContent/UseStateContext";


const products = [
  {
    id: 1,
    product_photo: 'pngegg (1).png',
    product_description: "Nike Precision 6 Mens Basketball Shoes",
    product_price: 109,
    rating: [1, 2, 3],
  },
  // {
  //   id: 2,
  //   product_photo: sneaker2,
  //   product_description: "Nike Men's Air Monarch IV Cross Trainer",
  //   product_price: 69,
  //   rating: [1, 2, 3],
  // },
  // {
  //   id: 3,
  //   product_photo: sneaker3,
  //   product_description: "Nike Men's Air Max Correlate Running Shoe",
  //   product_price: 74,
  //   rating: [1],
  // },
  // {
  //   id: 4,
  //   product_photo: sneakder4,
  //   product_description: "TRETORN Women's Loyola Lace Up Sneakers",
  //   product_price: 54,
  //   rating: [1, 2],
  // },
  // {
  //   id: 5,
  //   product_photo: sneaker5,
  //   product_description:
  //     "Alicegana Women's Athletic Road Running Lace up Walking Shoes Comfort Lightweight Fashion Sneakers Breathable",
  //   product_price: 22,
  //   rating: [1, 2, 3, 4],
  // },
  // {
  //   id: 6,
  //   product_photo: sneaker6,
  //   product_description: "Steel toe shoes men and women breathable sneaker",
  //   product_price: 40,
  //   rating: [1, 2, 3, 4, 5],
  // },
  // {
  //   id: 7,
  //   product_photo: sneaker7,
  //   product_description:
  //     "Nike Air Monarch IV (4E) Extra-Wide Men's Shoes White/Black-Varsity Red 416355-101",
  //   product_price: 123,
  //   rating: [1, 2, 3],
  // },
  // {
  //   id: 8,
  //   product_photo: sneaker8,
  //   product_description:
  //     "Nike Air Max 270 White/ Industrial Blue/ Citron FJ400 Running Shoes",
  //   product_price: 200,
  //   rating: [1, 2],
  // },
  // {
  //   id: 9,
  //   product_photo: sneaker9,
  //   product_description: "PUMA Womens Prowl Alt Sneaker",
  //   product_price: 200,
  //   rating: [1, 2, 3, 4, 5],
  // },
  // {
  //   id: 10,
  //   product_photo: sneaker10,
  //   product_description: "New Balance Women's 460 V3 Running Shoe",
  //   product_price: 54,
  //   rating: [1, 2, 3],
  // },
  // {
  //   id: 11,
  //   product_photo: sneaker11,
  //   product_description: "Blowfish Malibu Women's Mamba Canvas Sneaker",
  //   product_price: 102,
  //   rating: [1, 2, 3],
  // },
  // {
  //   id: 13,
  //   product_photo: sneaker12,
  //   product_description:
  //     "Nike Air Max 90 Men's Shoes Size - 12, Wolf Grey/Burgundy Crush",
  //   product_price: 104,
  //   rating: [1, 2],
  // },
  // {
  //   id: 12,
  //   product_photo: "pngwing.com (7).png",
  //   product_description:
  //     "New Balance Women's Fresh Foam Arishi V4 Running Shoe",
  //   product_price: 60,
  // },
  // {
  //   id: 14,
  //   product_photo: sneaker23,
  //   product_description: "New Balance Women's 574 Core Sneaker",
  //   product_price: 63,
  // },
  // {
  //   id: 15,
  //   product_photo: sneaker14,
  //   product_description: "PUMA mens Redon Bungee Lace Up Sneakers",
  //   product_price: 106,
  // },
  // {
  //   id: 16,
  //   product_photo: sneaker24,
  //   product_description: "adidas Originals Men's X_PLR Running Shoe",
  //   product_price: 89,
  // },
];

export default function Home() {
  const { searchFocus } = stateFunc();
  return (
    <div>
      <Hero />
      {/* <ProductDisplay /> */}
      <ProductReel
        title="New Arrival"
        subtitle="shop now"
        products={products}
      />
      {searchFocus && <Overlay />}
    </div>
  );
}
