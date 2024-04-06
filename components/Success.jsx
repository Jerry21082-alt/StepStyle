"use client";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { stateFunc } from "./stateContent/UseStateContext";
import { useEffect, useState } from "react";

export default function Success() {
  const [isLoading, setIsLoading] = useState(true);
  const { finishOrder } = stateFunc();

  useEffect(() => {
    setIsLoading(true);
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(time);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="text-secondaryColor z-[500] fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] flex items-center gap-1 animation-container">
          <span>Verifying</span>
          <div className="flex items-center gap-1 w-full loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      ) : (
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
            className="bg-secondaryColor py-2 px-5 text-sm text-snow md:text-md mt-5 rounded-2xl"
          >
            <Link href={`/`}>Continue shopping</Link>
          </button>
        </div>
      )}
    </>
  );
}
