import React, { useEffect } from "react";
import ProductList from "./ProductList";
import Layout from "./Layout";

export default function ProductReel({ products, title, subtitle, href }) {
  let myMap = [];

  products.length && products ? (myMap = products) : (myMap = [] || null);

  return (
    <Layout>
      <section className="py-12">
        <div className="md:flex md:items-center md:justify-between mb-4">
          <div className="max-w-2xl lg:max-w-4xl lg:px-0">
            {title ? (
              <h1 className="text-2xl font-bold sm:text-3xl text-white">
                {title}
              </h1>
            ) : null}
            {subtitle ? (
              <p className="mt-2 text-sm text-white">{subtitle}</p>
            ) : null}
          </div>

          {href ? (
            <Link
              href={href}
              className="text-red-600 hover:text-white hidden md:inline-block"
            >
              Explore Collection <span aria-hidden="true">&rarr;</span>
            </Link>
          ) : null}
        </div>

        <div className="relative">
          <div className="flex items-center w-full mt-6">
            <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
              {myMap.map((product, index) => (
                <ProductList key={index} product={product} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
