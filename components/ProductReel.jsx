import ProductList from "./ProductList";
import Layout from "./Layout";

export default function ProductReel({ products, title, subtitle, href }) {
  let myMap = [];

  products.length && products ? (myMap = products) : (myMap = [] || null);

  return (
    <Layout>
      <section className="mt-12">
        <div className="md:flex md:items-center md:justify-between mb-4">
          <div className="w-full lg:px-0">
            {title ? (
              <div className="flex justify-between">
                <h3 className="text-xl font-bold sm:text-3xl">
                  {title}
                </h3>

                <span className="see relative text-xs">Shop All</span>
              </div>
            ) : null}
            {subtitle ? (
              <p className="mt-2 text-sm max-w-[200px]">{subtitle}</p>
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
            <div className="w-full grid grid-cols-2 gap-x-2 gap-y-10 md:gap-x-4 md:grid-cols-4 md:gap-y-10">
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
