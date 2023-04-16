import React from "react";
import "../styles/global.css";
import Navbar from "./Navbar";
import NavbarDesktop from "./NavbarDesktop";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <NavbarDesktop />
      <div>{children}</div>
      <Navbar />
      <Footer />
    </div>
  );
}
