import ProductList from "./ProductList";
import Layout from "./Layout";

export default function ProductReel({ products, title, subtitle, href }) {
  let myMap = [];

  products.length && products ? (myMap = products) : (myMap = [] || null);

  return (
    <Layout>
      <section className="pb-12 mt-4">
        <div className="md:flex md:items-center md:justify-between mb-4">
          <div className="max-w-2xl lg:max-w-4xl lg:px-0">
            {title ? (
              <div className="w-full flex justify-between">
                <h1 className="text-xl font-bold sm:text-3xl">
                  {title}
                </h1>

                <span className="see relative text-xs">Shop All</span>
              </div>
            ) : null}
            {subtitle ? (
              <p className="mt-2 text-sm">{subtitle}</p>
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
                <ProductList
                  key={index}
                  product={product}
                  index={index}
                  products={products}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
