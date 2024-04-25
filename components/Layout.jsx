import React from "react";
import Notify from "./Notify";
import Navigation from "./Navigation";
import Cart from "./Cart";
import { Footer } from ".";

export default function Layout({ children }) {
  return (
    <div className="p-2 md:p-20 flex flex-col w-full min-h-screen">
      <Notify />
      <nav>
        <Navigation />
        <Cart />
      </nav>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
