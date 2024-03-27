"use client";

import { Hero, ProductDisplay, Footer } from "@/components";
import Overlay from "@/components/Overlay";
import { stateFunc } from "@/components/stateContent/UseStateContext";

export default function Home() {
  const { searchFocus } = stateFunc();
  return (
    <div>
      <Hero />
      <ProductDisplay />
      {searchFocus && <Overlay />}
    </div>
  );
}
