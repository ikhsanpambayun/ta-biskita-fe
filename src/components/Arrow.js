import React from "react";
import { navigate } from "gatsby";

export default function Arrow() {
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
    >
      <svg
        className="h-8 w-8 text-red-500"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="#F6B646"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <line x1="5" y1="12" x2="19" y2="12" />{" "}
        <line x1="5" y1="12" x2="9" y2="16" />{" "}
        <line x1="5" y1="12" x2="9" y2="8" />
      </svg>
    </button>
  );
}
