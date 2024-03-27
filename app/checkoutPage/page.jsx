"use client";

import OrderSummary from "@/components/OrderSummary";
import DeliveryInfo from "@/components/DeliveryInfo";
import { useSearchParams } from "next/navigation";
import { stateFunc } from "@/components/stateContent/UseStateContext";
import Image from "next/image";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import Success from "@/components/Success";
import Overlay from "@/components/Overlay";

export default function CheckOutPage() {
  const searchParams = useSearchParams();
  const ids = searchParams.getAll("id");
  const size = searchParams.get("size");
  const getQuantity = searchParams.get("quantity");
  const { products, cartItems, orderSuccess, setOrderSuccess } = stateFunc();
  const [isCustomer, setIscustomer] = useState(false);

  const _productIdDetail = [];

  for (let id of ids) {
    const productDetails = [...products];
    const getProduct = productDetails.find((detail) => detail.id == id);
    const quantity = cartItems.filter((item) => item == id).length;
    _productIdDetail.push({ ...getProduct, qty: quantity });
  }

  return (
    <div className="mt-[4rem] p-5 flex flex-col  md:flex-row gap-5">
      <div>
        <div className="w-full md:w-[60vw] border-2 border-primaryColor border-solid rounded-md p-3">
          <h2 className="font-bold text-xl">Review Item and shipping</h2>
          {_productIdDetail.map((product) => (
            <div key={product.id} className="flex items-center gap-5 mt-5">
              <div className="bg-primaryColor rounded-md w-[130px] p-2">
                <Image src={product.product_photo} alt="product photo" />
              </div>
              <div className="w-full flex items-center md:justify-between flex-col md:flex-row">
                <p className="font-[500] md:w-[300px]">
                  {product.product_description.length > 40
                    ? `${product.product_description.substring(0, 40)}...`
                    : product.product_description}
                </p>
                <div className="flex items-center gap-1  flex-row md:flex-col">
                  <span className="mt-5 font-[500]">
                    Price: ${product.product_price}
                  </span>
                  <span className="mt-5 font-[500]">
                    Qty: {product.qty || getQuantity}
                  </span>
                  <span className={size ? `mt-5 font-[500]` : `hidden`}>
                    Size: {size}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mt-5">
          <button
            onClick={() => setIscustomer((prev) => !prev)}
            className={`w-[15px] h-[15px] border-2 border-heroColor flex justify-center items-center ${
              isCustomer ? "bg-greenBg border-none" : null
            }`}
          >
            {isCustomer && (
              <BsCheck
                size={20}
                style={{ color: isCustomer ? "#fff" : "#000" }}
              />
            )}
          </button>
          <p className="text-sm">Returning Customer?</p>
        </div>
        <DeliveryInfo isCustomer={isCustomer} setIscustomer={setIscustomer} />
      </div>
      <OrderSummary
        productDetails={_productIdDetail}
        quantity={getQuantity}
        isCustomer={isCustomer}
        orderSuccess={orderSuccess}
        setOrderSuccess={setOrderSuccess}
      />

      {orderSuccess && <Success />}
      {orderSuccess && <Overlay />}
    </div>
  );
}
