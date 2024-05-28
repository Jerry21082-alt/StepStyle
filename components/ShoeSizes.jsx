import React, { useEffect, useRef } from "react";
import { stateFunc } from "./stateContent/UseStateContext";

const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];

export default function ShoeSizes({
  product,
  toggleShoeSize,
  setToggleShoeSize,
  setShoeSizes,
}) {
  const { setOverlay } = stateFunc();

  const closeShoeSizeModal = () => {
    setOverlay(false);
    setToggleShoeSize(false);
  };

  const onClose = () => {
    setToggleShoeSize(false);
    setOverlay(false);
  };

  const ref = useRef(null);

  const handleClickOutside = (ev) => {
    const current = ref.current;
    if (current && !current.contains(ev.target)) onClose();
  };

  useEffect(() => {
    if (toggleShoeSize) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [toggleShoeSize, onClose]);

  const selectSize = (size) => {
    setShoeSizes(size);
    setToggleShoeSize(false);
    setOverlay(false);
  };

  return (
    <div
      ref={ref}
      className={`fixed bottom-0 left-0 right-0 bg-white p-4 z-[102] block md:hidden ${
        toggleShoeSize ? "open-shoe-size" : "close-shoe-size"
      }`}
    >
      <div className="flex items-center justify-between">
        <h3>
          {product.name.length > 35
            ? `${product.name.substring(0, 35)}...`
            : product.name}
        </h3>
        <div className="w-4 h-4" onClick={closeShoeSizeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="w-full h-full"
          >
            {" "}
            <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
          </svg>
        </div>
      </div>
      <div className="border-t border-t-primaryColor w-full mt-4 mb-10">
        <h3 className="mt-4">US MEN SIZE</h3>
        <div className="w-full mt-4 grid-items">
          {sizes.map((size) => (
            <div
              key={size}
              onClick={() => selectSize(size)}
              className="border border-primaryColor flex items-center justify-center p-2 hover:border-black"
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center w-full relative bottom-0  space-x-2">
        <div className="flex flex-col w-full">
          <span>BUY NEW</span>
          <button className="bg-secondaryColor p-3 text-white mt-3">
            ${product.originalPrice}
          </button>
        </div>
        <div className="flex flex-col w-full">
          <span>BUY USED</span>
          <button className="bg-buttonColor p-3 text-white mt-3">
            OUT OF STOCK
          </button>
        </div>
      </div>
    </div>
  );
}
