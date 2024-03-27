import "../styles/global.css";
import UseStateContext from "@/components/stateContent/UseStateContext";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UseStateContext>
        <body>
          <Toaster />
          <nav>
            <Navigation />
          </nav>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </UseStateContext>
    </html>
  );
}
