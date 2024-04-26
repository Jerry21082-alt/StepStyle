import Cart from "@/components/Cart";
import Notify from "@/components/Notify";
import Navigation from "@/components/Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Notify />
      <nav>
        <Navigation />
        <Cart />
      </nav>
      <div className="p-2 md:p-20 flex flex-col w-full">{children}</div>
    </>
  );
}
