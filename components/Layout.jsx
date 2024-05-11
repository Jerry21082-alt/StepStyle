import Cart from "@/components/Cart";
import Notify from "@/components/Notify";
import Navigation from "@/components/Navigation";
import MobileSideBar from "./MobileSideBar";
import ProductSearch from "./ProductSearch";
import SearchNav from "./SearchNav";

export default function Layout({ children }) {
  return (
    <>
      <Notify />
      <MobileSideBar />
      <Cart />
      <SearchNav />
      <ProductSearch />
      <Navigation />

      <div className="p-2 md:px-20 flex flex-col w-full overscroll-contain bg-snow">
        {children}
      </div>
    </>
  );
}
