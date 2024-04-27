import { stateFunc } from "./stateContent/UseStateContext";
import Image from "next/image";

export default function SimilarProducts() {
  const { cartItems } = stateFunc();
  return (
    <div className="mt-10">
      <h2 className="my-5 font-bold text-2xl">Similar Products</h2>
      <div className="media-scroller snaps w-full">
        {cartItems.splice(0, 5).map((product, i) => (
          <div key={i} className="flex flex-col">
            <div className="flex justify-center items-center rounded-lg bg-primaryColor w-[140px] h-[140px] p-5 md:p-10 md:w-[20vw] md:h-[30vh]">
              <Image src={`/${product.photos.main}`} alt="product-photo" />
            </div>
            <span>
              {product.name.length > 15
                ? `${product.name.substring(0, 15)}...`
                : product.name}
            </span>
            <span className="font-bold mt-2">{`$${product.price}`}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
