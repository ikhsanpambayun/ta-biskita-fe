import React from "react";
import WALogo from "../assets/waLogo.svg";

export default function ExButton(props) {
  return (
    <a href={props.link}>
      <button
        type={props.type}
        className="w-full py-3 text-white bg-[#1BD741] hover:[#E27C36] active:bg-secondary focus:outline-none focus:ring focus:ring-secondary rounded-lg focus:outline-none"
      >
        <div className="flex justify-center gap-2">
          <WALogo />
          <p className="text-sm font-semibold tracking-wider">{props.name}</p>
        </div>
      </button>
    </a>
  );
}
