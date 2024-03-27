"use client";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { stateFunc } from "./stateContent/UseStateContext";

export default function Success() {
    const { finishOrder } = stateFunc();
  return (
    <>
      <div className="flex justify-center items-center fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-snow z-[1000] w-[80vw] h-[60vh] md:w-[40vw] md:h-[50vh] rounded-2xl flex-col">
        <div className="flex justify-center items-center rounded-full bg-primaryColor w-[80px] h-[80px]">
          <div className="rounded-full bg-greenBg flex justify-center items-center w-[60px] h-[60px]">
            <FaCheck color="fff" size={20} />
          </div>
        </div>
        <h3 className="font-bold w-[200px] text-center my-5">
          Your order has been placed
        </h3>
        <p className="text-sm text-center">Transaction ID: 9400938484</p>
        <button 
        onClick={finishOrder}
        className="bg-secondaryColor py-2 px-5 text-sm text-snow md:text-md mt-5 rounded-2xl">
          <Link href={`/`}>Continue shopping</Link>
        </button>
      </div>
    </>
  );
}
