import React from "react";
import NavLogo from "../assets/NavLogo.svg";

export default function Footer() {
  return (
    <div className="bg-white mt-auto hidden md:flex shadow-2lg">
      <div className="container mx-auto py-8">
        <NavLogo />
        <p className="text-sm text-primary">
          Copyright Rheznandya Erwanto 2023
        </p>
      </div>
    </div>
  );
}
