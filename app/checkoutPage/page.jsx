"use client";

import OrderSummary from "@/components/OrderSummary";
import DeliveryInfo from "@/components/DeliveryInfo";
import { useRouter, useSearchParams } from "next/navigation";
import { stateFunc } from "@/components/stateContent/UseStateContext";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsCheck } from "react-icons/bs";
import Success from "@/components/Success";
import Overlay from "@/components/Overlay";
import Layout from "@/components/Layout";
import AspectRatioContainer from "@/components/AspectRatioContainer";
import { products } from "@/constants/mockProducts";

export default function CheckOutPage() {
  const searchParams = useSearchParams();
  const ids = searchParams.getAll("id");
  const size = searchParams.get("size");
  const getQuantity = searchParams.get("quantity");
  const { cartItems, orderSuccess, setOrderSuccess } = stateFunc();
  const [isCustomer, setIscustomer] = useState(true);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const checkoutProducts = [];

  for (let id of ids) {
    const product = products.find((item) => item.id == id);
    checkoutProducts.push(product);
  }

  const getEachCartItemsQuantity = (product) => {
    const itemQuantity = cartItems.find((item) => item.id === product.id);

    return itemQuantity.quantity;
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-9 w-full">
        <div>
          <div className="w-full md:w-[55vw] border-2 border-primaryColor border-solid rounded-md p-3">
            <h5 className="text-xl">Review Item and shipping</h5>
            {isMounted &&
              checkoutProducts.map((product) => (
                <div key={product.id} className="flex items-start mt-5">
                  <AspectRatioContainer className="bg-white rounded-md w-36 p-2">
                    <div className="h-full flex items-center justify-center">
                      <Image
                        src={`/${product.photos[0]}`}
                        alt="product photo"
                        width={500}
                        height={500}
                      />
                    </div>
                  </AspectRatioContainer>
                  <div className="w-full flex items-start md:justify-between flex-col md:flex-row ml-5">
                    <p className="font-medium text-sm md:w-[300px]">
                      {product.name.length > 50
                        ? `${product.name.substring(0, 50)}...`
                        : product.name}
                    </p>
                    <div className="flex items-center space-x-4 flex-row md:flex-col">
                      <span className="mt-5 font-medium text-sm">
                        Price: ${product.price}
                      </span>
                      <span className="mt-5 font-medium text-sm">
                        Qty: {getQuantity || getEachCartItemsQuantity(product)}
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
            <div
              className="flex item-center justify-center w-4 h-4"
              style={{
                backgroundColor: isCustomer ? "#008000" : null,
                border: isCustomer ? "0" : "1px solid",
              }}
              onClick={() => setIscustomer((prev) => !prev)}
            >
              {isCustomer && <BsCheck color="#fff" />}
            </div>

            <p className="text-sm ml-2">Returning Customer?</p>
          </div>

          <DeliveryInfo isCustomer={isCustomer} setIscustomer={setIscustomer} />
        </div>

        <OrderSummary
          productDetails={checkoutProducts}
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
