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
      <div className="min-h-screen z-50 bg-snow overflow-hidden mb-5">
        <Hero />
        <ProductReel
          title="New Arrival"
          subtitle="shop now"
          products={products.slice(0, 12)}
        />
        {/* <ProductPrev /> */}
        <Slider title="Trending" products={products} />
        <TopBrands />
        <GiveAway />
        <ProductReel
          products={products.slice(0, 4)}
          subtitle="Get 50% off"
          title="Flash Sales!"
        />
        <Slider title="Recently Search Viewed Items" products={products} />

        {searchFocus && <Overlay />}
      </div>
      <Footer />
    </>
  );
}
