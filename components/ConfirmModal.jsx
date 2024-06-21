"use client";

import React from "react";
import { stateFunc } from "./stateContent/UseStateContext";

export default function ConfirmModal() {
  const { openConfirmModal, setOpenConfirmModal, setOverlay, clearCart } =
    stateFunc();

  const confirmClearCart = () => {
    clearCart();
    setOpenConfirmModal(false);
    setOverlay(false);
  };

  const discardClearCart = () => {
    setOpenConfirmModal(false);
    setOverlay(false);
  };

  return (
    <div
      className={`fixed top-1/3 left-1/2 -translate-x-1/2 bg-black z-[2000] w-1/2 p-4 flex justify-center flex-col space-y-4 ${
        openConfirmModal ? "open-confirm-modal" : "close-confirm-modal"
      }`}
    >
      <span className="text-white text-center">
        Are you sure you want to clear cart?
      </span>

      <div className="flex items-center justify-center space-x-2">
        <button
          className="bg-dangerColor p-1 w-16 text-snow"
          onClick={discardClearCart}
        >
          NO
        </button>
        <button
          className="bg-secondaryColor p-1 w-16 text-snow"
          onClick={confirmClearCart}
        >
          YES
        </button>
      </div>
    </div>
  );
}
