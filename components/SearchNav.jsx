"use client";

import { useState } from "react";
import { stateFunc } from "./stateContent/UseStateContext";

export default function SearchNav() {
  const {
    openProductSearch,
    setOpenProductSearch,
    searchInput,
    setSearchInput,
  } = stateFunc();

  return (
    <section
      className={`fixed top-0 left-0 h-14 p-2 bg-snow w-full z-50 ${
        openProductSearch ? "open-search-nav" : "close-search-nav"
      }`}
    >
      <nav className="flex items-center justify-between space-x-2 h-full w-full mt-2">
        <div
          className={`bg-cardBg rounded-md p-2 flex items-center space-x-1 w-full`}
        >
          <div className="w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="-5.0 -10.0 110.0 135.0"
              fill="#000000"
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
            //   ref={searchRef}
            value={searchInput}
            onChange={(ev) => setSearchInput(ev.target.value)}
            className="search-input w-3/4"
          />
        </div>

        <h4
          className="text-secondaryColor"
          onClick={() => setOpenProductSearch(false)}
        >
          Cancel
        </h4>
      </nav>
    </section>
  );
}
