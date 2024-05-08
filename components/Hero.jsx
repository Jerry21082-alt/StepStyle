"use client";

import { useEffect, useRef, useState } from "react";
import AspectRatioContainer from "./AspectRatioContainer";
import { stateFunc } from "./stateContent/UseStateContext";
import HeroSlider from "./HeroSlider";
import DesktopHeroSlider from "./DesktopHeroSlider";

export default function Hero() {
  const { setHeight } = stateFunc();
  const ref = useRef(null);

  const slides = [
    {
      image: "/pexels-wesleydavi-7116191 (1).jpg",
      title: "Elevate Your Look with Our Sneaker Sanctuary",
      btnText: "Explore",
    },
    {
      image: "/pexels-biola-visuals-415017893-16499261 (1).jpg",
      title: "Feel the Unreal, Match your Style",
      btnText: "Shop Now",
    },
    {
      image: "/pexels-ollivves-1103830 (1).jpg",
      title: "New Fitness Essentials",
      btnText: "Shop Now",
    },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const newHeight = ref.current.clientHeight;
    setHeight(newHeight);
  }, [ref]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="" ref={ref}>
      <HeroSlider slides={slides} />
      <DesktopHeroSlider slides={slides}/>
    </section>
  );
}
