"use client";

import GiveAway from "@/components/GiveAway";
import Overlay from "@/components/Overlay";
import ProductReel from "@/components/ProductReel";
import Slider from "@/components/Slider";
import TopBrands from "@/components/TopBrands";
import { newArrivals, trending, flashSales } from "@/constants/mockProducts";
import { stateFunc } from "@/components/stateContent/UseStateContext";
import { useEffect, useState } from "react";
import Collection from "@/components/Collection";
import { Hero } from "@/components";

export default function Home() {
  const { searchFocus, recentlyViewed } = stateFunc();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <>
      <div className="z-50 bg-snow overflow-hidden mb-5">
        <Hero />
        <ProductReel
          title="NEW ARRIVALS"
          subtitle="Explore the latest drops from top brands"
          products={newArrivals}
        />
        {/* <ProductPrev /> */}
        <Slider title="TRENDING" products={trending} />
        <TopBrands />
        <Collection />
        <GiveAway />
        <ProductReel
          products={flashSales}
          subtitle="Get 50% off"
          title="FLASH SALES!"
        />
        {isMounted && recentlyViewed.length > 0 && (
          <Slider
            title="RECENTLY VIEWED"
            products={recentlyViewed}
            href={`recentview`}
          />
        )}

        {searchFocus && <Overlay />}
      </div>
    </>
  );
}
