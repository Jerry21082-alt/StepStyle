import "../styles/global.css";
import UseStateContext from "@/components/stateContent/UseStateContext";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components";
import { Toaster } from "react-hot-toast";
import Cart from "@/components/Cart";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <UseStateContext>
        <body>
          <Toaster />
          <nav>
            <Navigation />
            <Cart />
          </nav>
          <main className="min-h-screen flex flex-col relative">
            <div className="flex-1 mt-8">{children}</div>
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </UseStateContext>
    </html>
  );
}
