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
import Layout from "@/components/Layout";

export default function CheckOutPage() {
  const searchParams = useSearchParams();
  const ids = searchParams.getAll("id");
  const size = searchParams.get("size");
  const getQuantity = searchParams.get("quantity");
  const { products, cartItems, orderSuccess, setOrderSuccess } = stateFunc();
  const [isCustomer, setIscustomer] = useState(true);

  const _productIdDetail = [];

  for (let id of ids) {
    const productDetails = [...products];
    const getProduct = productDetails.find((detail) => detail.id == id);
    const quantity = cartItems.filter((item) => item == id).length;
    _productIdDetail.push({ ...getProduct, qty: quantity });
  }

  return (
    <Layout>
      <div className="flex flex-col md:flex-row">
        <div>
          <div className="w-full md:w-[55vw] border-2 border-primaryColor border-solid rounded-md p-3">
            <h2 className="font-bold text-lg">Review Item and shipping</h2>
            {_productIdDetail.map((product) => (
              <div key={product.id} className="flex items-start mt-5">
                <div className="bg-primaryColor rounded-md w-[130px] p-2">
                  <Image
                    src={product.product_photo}
                    alt="product photo"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="w-full flex items-start md:justify-between flex-col md:flex-row ml-5">
                  <p className="font-medium text-sm md:w-[300px]">
                    {product.product_description.length > 50
                      ? `${product.product_description.substring(0, 50)}...`
                      : product.product_description}
                  </p>
                  <div className="flex items-center space-x-4 flex-row md:flex-col">
                    <span className="mt-5 font-medium text-sm">
                      Price: ${product.product_price}
                    </span>
                    <span className="mt-5 font-medium text-sm">
                      Qty: {product.qty || getQuantity}
                    </span>
                    <span
                      className={size ? `mt-5 font-medium text-sm` : `hidden`}
                    >
                      Size: {size}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-5">
            <button
              onClick={() => setIscustomer((prev) => !prev)}
              className={`w-4 h-4 border border-black flex justify-center items-center rounded ${
                isCustomer ? "bg-greenBg border-none" : null
              }`}
            >
              {isCustomer && (
                <BsCheck
                  size={25}
                  style={{ color: isCustomer ? "#fff" : "#000" }}
                />
              )}
            </button>
            <p className="text-sm ml-2">Returning Customer?</p>
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
    </Layout>
  );
}
