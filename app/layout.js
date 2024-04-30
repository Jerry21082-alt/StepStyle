import "../styles/global.css";
import "../styles/typography.css";
import UseStateContext from "@/components/stateContent/UseStateContext";
import { Footer } from "@/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <UseStateContext>
        <body className="overscroll-none">
          <main className="min-h-screen flex flex-col relative">
            <div className="flex-1 w-full mt-14">{children}</div>
          </main>
        </body>
      </UseStateContext>
    </html>
  );
}
