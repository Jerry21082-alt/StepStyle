import React from "react";

export default function Layout({ children }) {
  return <div className="p-2 md:p-20 flex flex-col w-full">{children}</div>;
}
