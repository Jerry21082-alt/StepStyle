"use client";

import { stateFunc } from "@/components/stateContent/UseStateContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function page() {
  const [edit, setEdit] = useState(false);
  const [markedItem, setMarkedItem] = useState([]);
  const [height, setHeight] = useState(0);

  const heightRef = useRef(null);

  useEffect(() => {
    if (heightRef.current) {
      setHeight((heightRef.current.clientHeight * 1) / 1);
    }
  }, [height]);

  const { watchList, setRecentlyViewed, isMounted, recentlyViewed } =
    stateFunc();

  const router = useRouter();

  const toggleMark = (index) => {
    const newMarkedItems = [...markedItem];

    if (newMarkedItems.includes(index)) {
      newMarkedItems.splice(newMarkedItems.indexOf(index), 1);
    } else {
      newMarkedItems.push(index);
    }

    setMarkedItem(newMarkedItems);
  };

  const removeMarkedItem = () => {
    const newItems = recentlyViewed.filter(
      (index) => !markedItem.includes(index)
    );

    setRecentlyViewed(newItems);
    setMarkedItem([]);
  };

  const selectAll = () => {
    const allItems = [...recentlyViewed];
    setMarkedItem(allItems);
  };

  const handleCancel = () => {
    setMarkedItem([]);
    setEdit(false);
  };

  useEffect(() => {
    const div = document.getElementById("scroll");
    div.scrollTop = div.scrollHeight;
  }, [watchList]);

  return (
    <section className="fixed top-0 left-0 right-0 p-2 h-screen bg-snow z-[200]">
      <h3 className="text-center">Recently Viewed</h3>

      <button className={`absolute top-2 mb-5`} onClick={() => router.back()}>
        <div className="w-8 h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            id="chevron-left"
            className="w-full h-full"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M14.71 6.71c-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L10.83 12l3.88-3.88c.39-.39.38-1.03 0-1.41z"></path>
          </svg>
        </div>
      </button>

      <div className="flex items-center justify-between mt-5 space-x-2 w-full h-12">
        <div className={`items-center space-x-5 ${edit ? "flex" : "hidden"}`}>
          <h4 className="text-secondaryColor" onClick={selectAll}>
            Select All
          </h4>
          <div
            className={`flex items-center ${
              markedItem.length ? "bg-dangerColor p-1 rounded text-snow" : null
            }`}
          >
            <h4 className="text-snow" onClick={removeMarkedItem}>
              Delete
            </h4>
            <span>
              {markedItem.length > 0 ? `[${markedItem.length}]` : null}
            </span>
          </div>
        </div>

        <div className="absolute right-2">
          {edit ? (
            <h4 className="text-secondaryColor" onClick={handleCancel}>
              Cancel
            </h4>
          ) : (
            <h4 className="text-secondaryColor" onClick={() => setEdit(true)}>
              Edit
            </h4>
          )}
        </div>
      </div>

      <div
        id="scroll"
        className="w-full max-h-[500px] overflow-y-auto flex flex-col space-y-3 mt-5 overscroll-contain"
      >
        {isMounted &&
          recentlyViewed.map((list, idx) => (
            <div className="flex items-center w-full" key={idx}>
              <div
                className={`h-full items-center justify-center ${
                  edit ? "flex" : "hidden"
                }`}
              >
                {markedItem.some((item) => item.id === list.id) ? (
                  <div
                    className="w-6 h-6 bg-secondaryColor"
                    onClick={() => toggleMark(list)}
                  ></div>
                ) : (
                  <div
                    className="w-6 h-6 border"
                    onClick={() => toggleMark(list)}
                  ></div>
                )}
              </div>
              <div className="flex">
                <div
                  className={`w-40 h-28 bg-white rounded-xl p-2 flex justify-center items-center ${
                    edit ? "shift-img" : "unshift-img"
                  }`}
                >
                  <Image
                    src={`/${list.photos[0]}`}
                    width={500}
                    height={500}
                    alt="product image"
                  />
                </div>
                <div className="flex flex-col space-y-1 w-full ml-2">
                  <span className="w-full">
                    {list.name.length > 50
                      ? `${list.name.substring(0, 50)}...`
                      : list.name}
                  </span>

                  <h4>${list.price}</h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
