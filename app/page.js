"use client";

import { Footer, Hero } from "@/components";
import GiveAway from "@/components/GiveAway";
import Overlay from "@/components/Overlay";
import ProductReel from "@/components/ProductReel";
import Slider from "@/components/Slider";
import TopBrands from "@/components/TopBrands";
import { products } from "@/constants/mockProducts";
import { stateFunc } from "@/components/stateContent/UseStateContext";
import ProductSearch from "@/components/ProductSearch";

export default function Home() {
  const { searchFocus } = stateFunc();
  return (
    <>
      <div className="z-50 bg-snow overflow-hidden mb-5">
        <Hero />
        <ProductReel
          title="NEW ARRIVALS"
          subtitle="Explore the latest drops from top brands"
          products={products.slice(0, 12)}
        />
        {/* <ProductPrev /> */}
        <Slider title="TRENDING" products={products} />
        <TopBrands />
        <GiveAway />
        <ProductReel
          products={products.slice(0, 4)}
          subtitle="Get 50% off"
          title="FLASH SALES!"
        />
        <Slider title="RECENTLY VIEWED" products={products} />

        {searchFocus && <Overlay />}
      </div>
    </>
  );
}
