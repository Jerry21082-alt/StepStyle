import Link from "next/link";
import Image from "next/image";

export default function ProductCard({
  product_description,
  product_id,
  product_photo,
  product_price,
}) {
  return (
    <div className="relative">
      <Link href={`/products/${product_id}`}>
        <div className="rounded-md bg-cardBg w-full p-2 flex justify-center items-center ">
          <Image src={product_photo} alt="product photo" className="object-contain w-[130px] h-[130px]" />
        </div>
        <span>
          <p className="py-3 text-sm mt-1">{product_description}</p>
        </span>
        <span>${product_price}</span>
      </Link>
    </div>
  );
}
