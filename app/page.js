"use client";

import { Hero, ProductDisplay, Footer } from "@/components";
import GiveAway from "@/components/GiveAway";
import Overlay from "@/components/Overlay";
import ProductPrev from "@/components/ProductPrev";
import ProductReel from "@/components/ProductReel";
import Slider from "@/components/Slider";
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
      <ProductPrev />
      <Slider title="Trending" products={products} />
      <GiveAway />
      <ProductReel title="Hot Deals!" products={products.slice(0, 4)} />

      {searchFocus && <Overlay />}
    </div>
  );
}
