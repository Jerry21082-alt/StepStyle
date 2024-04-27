"use client";

import { Hero } from "@/components";
import GiveAway from "@/components/GiveAway";
import MobileSideBar from "@/components/MobileSideBar";
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
      {/* <ProductPrev /> */}
      <Slider title="Trending" products={products} />
      <GiveAway />
      <ProductReel products={products.slice(0, 4)} subtitle='Get 50% off' title='Flash Sales!'/>
      <Slider title='Recently Search Viewed Items'products={products}/>
      <MobileSideBar />
      {searchFocus && <Overlay />}
    </div>
  );
}
