import React from "react";

export default function Button(props) {
  return (
    <button
      type="button"
      className="w-full py-3 text-white bg-[#3A3270] rounded-lg focus:outline-none"
    >
      {props.name}
    </button>
  );
}
