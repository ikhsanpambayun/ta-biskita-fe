import React from "react";
import NavLogo from "../assets/NavLogo.svg";
import Bell from "../components/Bell";
import { Link } from "gatsby";

export default function NavbarDesktop() {
  return (
    <nav className="bg-primary hidden md:flex">
      <div className="container flex justify-between self-center mx-auto py-5 z-[10]">
        <Link to="/">
          <NavLogo />
        </Link>
        <Bell />
      </div>
    </nav>
  );
}
