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

      <nav>
        <Navigation />
      </nav>
      <div className="p-2 md:p-20 flex flex-col w-full overscroll-">
        {children}
      </div>
    </>
  );
}
