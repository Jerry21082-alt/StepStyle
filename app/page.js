"use client";

import { Hero, ProductDisplay, Footer } from "@/components";
import Overlay from "@/components/Overlay";
import ProductReel from "@/components/ProductReel";
import { stateFunc } from "@/components/stateContent/UseStateContext";

export default function Home() {
  const { searchFocus, products } = stateFunc();
  return (
    <div>
      <Hero />
      <ProductReel
        title="New Arrival"
        subtitle="shop now"
        products={products}
      />
      {searchFocus && <Overlay />}
    </div>
  );
}
