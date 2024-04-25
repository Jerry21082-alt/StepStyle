import "../styles/global.css";
import "../styles/typography.css";
import UseStateContext from "@/components/stateContent/UseStateContext";
import Navigation from "@/components/Navigation";
import { Footer } from "@/components";
import Cart from "@/components/Cart";
import Notify from "@/components/Notify";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <UseStateContext>
        <body>
          <main className="min-h-screen flex flex-col relative">
            <div className="flex-1 w-full mt-14">{children}</div>
          </main>
        </body>
      </UseStateContext>
    </html>
  );
}
