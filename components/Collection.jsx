import React from "react";
import AspectRatioContainer from "./AspectRatioContainer";
import Link from "next/link";

export default function Collection() {
  const lists = [
    "Air Jordan 4",
    "Air Jordan 1",
    "Nike Dunk",
    "UGG",
    "Yeezy",
    "New Balance",
    "Yeezy 350",
    "Yeezy 700",
    "Air Force 1",
    "Travis Scott",
  ];
  return (
    <section className="bg-black p-2 md:p-4">
      <nav className="w-full flex justify-between items-center text-snow">
        <span className="inline-block">TOP COLLECTION</span>
        <Link href={`/`} className="underline">
          View More
        </Link>
      </nav>

      <section className="px-4 py-6 md:py-[8.33333%] md:px-[8.3333%]">
        <ul>
          {lists.map((list, idx) => (
            <li
              key={idx}
              className="text-snow inline-block mb-2 mr-2 text-3xl md:mb-3 md:mr-3  cursor-pointer"
            >
              <h1
                className="hover:text-gray md:text-4xl lg:text-6xl"
                style={{ transition: "color .359s ease-in-out" }}
              >
                {" "}
                {lists.length - 1 === idx ? list : `${list},`}
              </h1>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
