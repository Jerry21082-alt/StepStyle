"use client";

import { stateFunc } from "@/components/stateContent/UseStateContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function page() {
  const [search, setSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const { watchList } = stateFunc();

  const router = useRouter();

  return (
    <section className="fixed top-0 left-0 right-0 p-2 h-screen">
      <h1 className="text-center">Watchlist</h1>

      <div
        className="flex items-center space-x-2 absolute top-4 left-4 w-20 bg-secondaryColor rounded-md p-1"
        onClick={() => router.back()}
      >
        <div className="w-5 h-5">
          <svg
            viewBox="0 0 24 24"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <g id="Arrow / Chevron_Left_MD">
              <path id="Vector" d="M14 16L10 12L14 8" />
            </g>
          </svg>
        </div>
        <p className="text-snow">Back</p>
      </div>

      <div className="flex items-center justify-between mt-5 space-x-2 w-full">
        <div
          onClick={() => setSearch((previousState) => !previousState)}
          className={`flex items-center space-x-1 ${
            search ? "close-search" : "open-search"
          }`}
        >
          <div className="w-8 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="-5.0 -10.0 110.0 135.0"
              fill="#fe5d26"
              className="w-full h-full"
            >
              <g>
                <path d="m47.398 78.398c-8.3008 0-16.102-3.1992-21.898-9.1016-5.8984-5.8008-9.1016-13.602-9.1016-21.898 0-8.3008 3.1992-16.102 9.1016-21.898 5.8984-5.8008 13.602-9.1016 21.898-9.1016 8.3008 0 16.102 3.1992 21.898 9.1016 5.8984 5.8984 9.1016 13.602 9.1016 21.898 0 8.3008-3.1992 16.102-9.1016 21.898-5.7969 5.9023-13.598 9.1016-21.898 9.1016zm0-56.797c-6.8984 0-13.398 2.6992-18.301 7.6016-4.8984 4.8984-7.6016 11.398-7.6016 18.301 0 6.8984 2.6992 13.398 7.6016 18.301 4.8984 4.8984 11.398 7.6016 18.301 7.6016 6.8984 0 13.398-2.6992 18.301-7.6016 4.8984-4.8984 7.6016-11.398 7.6016-18.301s-2.6992-13.504-7.5-18.402c-4.9023-4.8008-11.402-7.5-18.402-7.5z" />
                <path d="m65.746 69.336 3.6055-3.6055 14.141 14.141-3.6055 3.6055z" />
              </g>
            </svg>
          </div>
          <span className="text-secondaryColor">Find</span>
        </div>

        <div
          className={`bg-cardBg rounded-md p-2 flex items-center space-x-1 w-3/4 absolute left-0 right-0 ${
            search ? "show-search-input" : "hide-search-input"
          }`}
        >
          <div className="w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="-5.0 -10.0 110.0 135.0"
              fill="#fe5d26"
              className="w-full h-full"
            >
              <g>
                <path d="m47.398 78.398c-8.3008 0-16.102-3.1992-21.898-9.1016-5.8984-5.8008-9.1016-13.602-9.1016-21.898 0-8.3008 3.1992-16.102 9.1016-21.898 5.8984-5.8008 13.602-9.1016 21.898-9.1016 8.3008 0 16.102 3.1992 21.898 9.1016 5.8984 5.8984 9.1016 13.602 9.1016 21.898 0 8.3008-3.1992 16.102-9.1016 21.898-5.7969 5.9023-13.598 9.1016-21.898 9.1016zm0-56.797c-6.8984 0-13.398 2.6992-18.301 7.6016-4.8984 4.8984-7.6016 11.398-7.6016 18.301 0 6.8984 2.6992 13.398 7.6016 18.301 4.8984 4.8984 11.398 7.6016 18.301 7.6016 6.8984 0 13.398-2.6992 18.301-7.6016 4.8984-4.8984 7.6016-11.398 7.6016-18.301s-2.6992-13.504-7.5-18.402c-4.9023-4.8008-11.402-7.5-18.402-7.5z" />
                <path d="m65.746 69.336 3.6055-3.6055 14.141 14.141-3.6055 3.6055z" />
              </g>
            </svg>
          </div>

          <input
            type="text"
            placeholder="Find items"
            ref={searchRef}
            className="search-input w-3/4"
          />
        </div>

        {search ? (
          <span
            className="text-secondaryColor"
            onClick={() => setSearch(false)}
          >
            Cancel
          </span>
        ) : (
          <span className="text-secondaryColor">Edit</span>
        )}
      </div>

      <div className="w-full h-full overflow-y-scroll flex flex-col space-y-3 mt-5">
        {watchList.map((list, idx) => (
          <div className="flex space-x-2 w-full" key={idx}>
            <div className="w-36 aspect-square bg-cardBg rounded-xl p-2 flex justify-center items-center">
              <Image
                src={`${list.product_photo}`}
                width={500}
                height={500}
                alt="product image"
              />
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <span className="w-full">
                {list.product_description.length > 50
                  ? `${list.product_description.substring(0, 50)}...`
                  : list.product_description}
              </span>

              <h4>${list.product_price}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
