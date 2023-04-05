import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="mb-100">{children}</div>
      <Navbar />
    </div>
  );
}
