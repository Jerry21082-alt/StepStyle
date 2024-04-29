import Cart from "@/components/Cart";
import Notify from "@/components/Notify";
import Navigation from "@/components/Navigation";
import MobileSideBar from "./MobileSideBar";

export default function Layout({ children }) {
  return (
    <>
      <Notify />
      <MobileSideBar />

      <nav>
        <Navigation />
        <Cart />
      </nav>
      <div className="p-2 md:p-20 flex flex-col w-full">{children}</div>
    </>
  );
}
