import { Footer } from "@/components";
import "../styles/global.css";
import "../styles/typography.css";
import UseStateContext from "@/components/stateContent/UseStateContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UseStateContext>
        <body className="overscroll-none">
          <main className="min-h-screen flex flex-col relative">
            <div className="flex-1 w-full mt-14 overscroll-contain">
              {children}
            </div>
          </main>
          <Footer />
        </body>
      </UseStateContext>
    </html>
  );
}
